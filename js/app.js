/**
 * js/app.js 
 * Core Application Controller
 * Handles Navigation, Sequential Locking, Proctoring, and UI Rendering.
 */

"use strict";

const App = {
    currentSetId: new URLSearchParams(window.location.search).get('set') || 'set1',
    currentSecIdx: 0,
    currentQueIdx: 0,
    testData: null,
    metadata: { visited: [], marked: [] },
    
    // Sequential Locking: Load the furthest unlocked section from storage or default to 0
    unlockedSection: parseInt(localStorage.getItem('unlockedSection')) || 0,

    init() {
        // 1. Load Data from data.js
        this.testData = TEST_DATA[this.currentSetId];
        if (!this.testData) {
            console.error("Test data not found!");
            return;
        }

        // 2. Load Progress from Storage (to survive refresh)
        const savedState = Storage.getCurrentState(this.currentSetId);
        this.currentSecIdx = savedState.sectionIdx;
        this.currentQueIdx = savedState.questionIdx;
        this.metadata = Storage.getMetadata(this.currentSetId);

        // 3. Initialize Timer
        Timer.init(this.currentSetId, this.testData.duration, () => {
            this.submitTest();
        });

        // 4. Setup Proctoring (Tab Switch Restriction)
        this.setupProctoring();

        // 5. Bind Global UI Events
        this.bindEvents();

        // 6. Initial Render
        this.renderSectionNav();
        this.renderQuestion();
    },

    /**
     * PROCTORING: Restricts tab switching.
     * Auto-submits after 3 violations.
     */
    setupProctoring() {
        let violations = 0;
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                violations++;
                if (violations >= 3) {
                    alert("CRITICAL: Multiple tab switches detected. The assessment is being submitted automatically.");
                    this.submitTest();
                } else {
                    alert(`WARNING: Switching tabs or windows is not allowed during this assessment. Violation ${violations} of 3.`);
                }
            }
        });

        // Optional: Block right-click and copy-paste
        document.addEventListener('contextmenu', e => e.preventDefault());
    },

    bindEvents() {
        document.getElementById('next-btn').onclick = () => this.navigate(1);
        document.getElementById('prev-btn').onclick = () => this.navigate(-1);
        document.getElementById('mark-review-btn').onclick = () => this.toggleMark();
        
        // Prevent accidental page close
        window.onbeforeunload = () => "Warning: Progress will be saved, but do not leave the test environment.";
    },

    /**
     * SIDEBAR: Renders sections and applies Locking logic.
     */
    renderSectionNav() {
        const nav = document.getElementById('section-nav-list');
        if (!nav) return;
        nav.innerHTML = '';

        this.testData.sections.forEach((sec, idx) => {
            const isLocked = idx > this.unlockedSection;
            const btn = document.createElement('div');
            
            btn.className = `section-nav-item 
                ${idx === this.currentSecIdx ? 'active' : ''} 
                ${isLocked ? 'locked' : ''}`;
            
            btn.innerHTML = `
                <span class="sec-num">${idx + 1}</span> 
                ${sec.title} 
                ${isLocked ? '<span style="float:right">🔒</span>' : ''}
            `;
            
            if (!isLocked) {
                btn.onclick = () => this.jumpToSection(idx);
            }
            nav.appendChild(btn);
        });
    },

    /**
     * MAIN ROUTER: Renders different UIs based on Section Type
     */
    renderQuestion() {
        const section = this.testData.sections[this.currentSecIdx];
        const container = document.getElementById('question-display-area');
        
        // Update Metadata
        const qId = this.getCurrentQuestionId();
        if (!this.metadata.visited.includes(qId)) this.metadata.visited.push(qId);
        Storage.saveMetadata(this.currentSetId, this.metadata);

        // UI Header Updates
        document.getElementById('current-section-title').innerText = section.title;
        document.getElementById('current-section-desc').innerText = section.description || "";

        // Component Rendering
        if (['mcq', 'reading', 'listening'].includes(section.type)) {
            this.renderObjectiveQuestion(section, container);
        } else if (section.type === 'writing') {
            this.renderWritingTask(section, container);
        } else if (section.type === 'speaking') {
            this.renderSpeakingTask(section, container);
        }

        this.renderPalette();
        this.updateButtons();
        Storage.saveCurrentState(this.currentSetId, this.currentSecIdx, this.currentQueIdx);
    },

    /**
     * UI: Vertical MCQ rendering
     */
    renderObjectiveQuestion(section, container) {
        const q = section.questions[this.currentQueIdx];
        const answers = Storage.getAllAnswers(this.currentSetId);
        const savedAns = answers[q.id];

        let passageHTML = section.passage ? `<div class="passage-box"><strong>Passage:</strong><br>${section.passage}</div>` : '';
        let audioHTML = section.audioUrl ? `<div class="audio-box"><audio controls src="${section.audioUrl}"></audio></div>` : '';

        container.innerHTML = `
            ${passageHTML}
            ${audioHTML}
            <div class="question-block">
                <div class="q-number">Question ${this.currentQueIdx + 1} of ${section.questions.length}</div>
                <div class="q-text" style="font-size: 1.1rem; margin-bottom: 20px; font-weight: 500;">${q.question}</div>
                <div class="options-container">
                    ${q.options.map((opt, i) => `
                        <label class="option-row ${savedAns == i ? 'selected' : ''}">
                            <input type="radio" name="ans" value="${i}" ${savedAns == i ? 'checked' : ''} 
                                onchange="App.saveObjectiveAnswer('${q.id}', ${i})">
                            <span class="opt-text">${String.fromCharCode(65 + i)}. ${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderWritingTask(section, container) {
        const task = section.tasks[this.currentQueIdx];
        const answers = Storage.getAllAnswers(this.currentSetId);
        const savedText = answers[task.id] || "";

        container.innerHTML = `
            <div class="writing-task">
                <div class="task-scenario"><strong>Scenario:</strong><br>${task.scenario}</div>
                <textarea id="writing-area" placeholder="Write your professional response here..." 
                    oninput="App.saveWritingAnswer('${task.id}')">${savedText}</textarea>
                <div class="word-count">Character Count: <span id="char-count">${savedText.length}</span></div>
            </div>
        `;
    },

    renderSpeakingTask(section, container) {
        const task = section.tasks[this.currentQueIdx];
        container.innerHTML = `
            <div class="speaking-task">
                <div class="task-scenario"><strong>Scenario:</strong><br>${task.scenario}</div>
                <div class="speaking-controls">
                    <video id="video-preview" autoplay muted class="video-preview"></video>
                    <div class="recording-ui">
                        <button id="rec-start" class="primary-btn" onclick="Recorder.startRecording()">Start Recording</button>
                        <button id="rec-stop" class="danger-btn hidden" onclick="Recorder.stopRecording()">Stop Recording</button>
                        <div id="rec-status" class="status-msg">Camera active. Ready to record.</div>
                    </div>
                </div>
            </div>
        `;
        Recorder.init(); // Activate camera
    },

    /**
     * NAVIGATION: Sequential Section Logic
     */
    navigate(dir) {
        const section = this.testData.sections[this.currentSecIdx];
        const totalQ = (section.questions || section.tasks).length;

        if (dir === 1) { // Moving Forward
            if (this.currentQueIdx < totalQ - 1) {
                this.currentQueIdx++;
            } else {
                // At the end of a section
                if (this.currentSecIdx < this.testData.sections.length - 1) {
                    const confirmMsg = `You have completed Section ${this.currentSecIdx + 1}. Once you move to Section ${this.currentSecIdx + 2}, you can return but you cannot skip ahead. Proceed?`;
                    
                    if (confirm(confirmMsg)) {
                        this.currentSecIdx++;
                        this.currentQueIdx = 0;
                        
                        // Unlock next section in persistence
                        if (this.currentSecIdx > this.unlockedSection) {
                            this.unlockedSection = this.currentSecIdx;
                            localStorage.setItem('unlockedSection', this.unlockedSection);
                        }
                    }
                }
            }
        } else { // Moving Backward
            if (this.currentQueIdx > 0) {
                this.currentQueIdx--;
            }
        }

        this.renderSectionNav();
        this.renderQuestion();
    },

    jumpToSection(idx) {
        if (idx <= this.unlockedSection) {
            this.currentSecIdx = idx;
            this.currentQueIdx = 0;
            this.renderSectionNav();
            this.renderQuestion();
        }
    },

    /**
     * HELPERS: Data Saving & UI Updates
     */
    saveObjectiveAnswer(qId, val) {
        Storage.saveAnswer(this.currentSetId, qId, val);
        this.renderPalette();
    },

    saveWritingAnswer(qId) {
        const val = document.getElementById('writing-area').value;
        Storage.saveAnswer(this.currentSetId, qId, val);
        document.getElementById('char-count').innerText = val.length;
        this.renderPalette();
    },

    renderPalette() {
        const grid = document.getElementById('palette-grid');
        if (!grid) return;
        grid.innerHTML = '';
        const section = this.testData.sections[this.currentSecIdx];
        const items = section.questions || section.tasks;
        const answers = Storage.getAllAnswers(this.currentSetId);

        items.forEach((item, idx) => {
            const btn = document.createElement('button');
            btn.className = 'palette-item';
            btn.innerText = idx + 1;
            
            if (this.currentQueIdx === idx) btn.classList.add('current');
            if (answers[item.id] !== undefined && answers[item.id] !== "") btn.classList.add('answered');
            else if (this.metadata.marked.includes(item.id)) btn.classList.add('marked');
            else if (this.metadata.visited.includes(item.id)) btn.classList.add('visited');

            btn.onclick = () => { this.currentQueIdx = idx; this.renderQuestion(); };
            grid.appendChild(btn);
        });
    },

    getCurrentQuestionId() {
        const sec = this.testData.sections[this.currentSecIdx];
        const q = (sec.questions || sec.tasks)[this.currentQueIdx];
        return q.id;
    },

    toggleMark() {
        const qId = this.getCurrentQuestionId();
        if (this.metadata.marked.includes(qId)) {
            this.metadata.marked = this.metadata.marked.filter(id => id !== qId);
        } else {
            this.metadata.marked.push(qId);
        }
        Storage.saveMetadata(this.currentSetId, this.metadata);
        this.renderPalette();
    },

    updateButtons() {
        const isLast = this.currentSecIdx === this.testData.sections.length - 1 && 
                       this.currentQueIdx === (this.testData.sections[this.currentSecIdx].questions || this.testData.sections[this.currentSecIdx].tasks).length - 1;
        
        document.getElementById('next-btn').innerText = isLast ? "Review All" : "Next & Save";
        document.getElementById('submit-btn').classList.toggle('hidden', !isLast);
    },

    confirmSubmit() {
        if (confirm("Are you sure you want to finalize and submit the assessment?")) {
            this.submitTest();
        }
    },

    submitTest() {
        window.onbeforeunload = null;
        window.location.href = 'result.html';
    }
};

// Initialize App on Window Load
window.onload = () => App.init();