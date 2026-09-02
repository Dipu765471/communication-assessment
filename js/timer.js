"use strict";

const Timer = {
    endTime: null,
    duration: 0,
    timerInterval: null,
    onExpiryCallback: null,

    /**
     * Initializes the timer based on a fixed duration.
     * Uses localStorage to ensure it doesn't reset on refresh.
     */
    init(setId, durationInSeconds, onExpiry) {
        this.duration = durationInSeconds;
        this.onExpiryCallback = onExpiry;

        const storageKey = Storage.PREFIX + setId + "_start_time";
        let startTime = localStorage.getItem(storageKey);

        if (!startTime) {
            startTime = Date.now();
            localStorage.setItem(storageKey, startTime);
        }

        // Calculate when the test SHOULD end
        this.endTime = parseInt(startTime) + (this.duration * 1000);
        
        this.start();
    },

    start() {
        this.update(); // Initial call
        this.timerInterval = setInterval(() => this.update(), 1000);
    },

    update() {
        const now = Date.now();
        const remainingMs = this.endTime - now;

        if (remainingMs <= 0) {
            this.stop();
            if (this.onExpiryCallback) this.onExpiryCallback();
            return;
        }

        const totalSeconds = Math.floor(remainingMs / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        this.render(minutes, seconds);
    },

    render(m, s) {
        const display = document.getElementById('timer-display');
        if (!display) return;

        const formattedTime = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        display.innerText = formattedTime;

        // Visual warnings
        if (m < 1) {
            display.classList.add('timer-warning'); // Critical (Red/Blink)
        } else if (m < 5) {
            display.style.color = 'var(--warning-orange)';
        }
    },

    stop() {
        clearInterval(this.timerInterval);
    },

    getRemainingSeconds() {
        return Math.max(0, Math.floor((this.endTime - Date.now()) / 1000));
    }
};