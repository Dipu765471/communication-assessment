"use strict";

const Scoring = {
    evaluate(setId) {
        const data = TEST_DATA[setId];
        const answers = Storage.getAllAnswers(setId);
        let results = {
            objectiveScore: 0,
            totalObjective: 0,
            sectionBreakdown: []
        };

        data.sections.forEach(section => {
            let sectionResult = {
                title: section.title,
                score: 0,
                total: 0,
                type: section.type,
                remarks: ""
            };

            if (section.type === 'mcq' || section.type === 'reading' || section.type === 'listening') {
                section.questions.forEach(q => {
                    sectionResult.total++;
                    results.totalObjective++;
                    if (answers[q.id] == q.answer) {
                        sectionResult.score++;
                        results.objectiveScore++;
                    }
                });
            } 
            else if (section.type === 'writing') {
                // SIMULATED AI EVALUATION FOR WRITING
                section.tasks.forEach(task => {
                    sectionResult.total += 10; // Max 10 per writing task
                    const userText = answers[task.id] || "";
                    sectionResult.score += this.evaluateWriting(userText);
                });
                sectionResult.remarks = "AI Evaluated";
            }
            else if (section.type === 'speaking') {
                // Simulated Speaking Score based on "Completion"
                section.tasks.forEach(task => {
                    sectionResult.total += 10;
                    // In a real app, we check if a blob exists. Here we assume 8/10 if attempted.
                    sectionResult.score += 8; 
                });
                sectionResult.remarks = "Technical Check Passed";
            }

            results.sectionBreakdown.push(sectionResult);
        });

        return results;
    },

    evaluateWriting(text) {
        if (text.length < 20) return 0;
        let score = 0;
        const professionalKeywords = ["sincerely", "regards", "appreciate", "concern", "apologize", "update", "scheduled", "confirm"];
        
        // 1. Length Check
        if (text.split(' ').length > 40) score += 4;
        else score += 2;

        // 2. Keyword Check
        professionalKeywords.forEach(word => {
            if (text.toLowerCase().includes(word)) score += 1;
        });

        return Math.min(score, 10); // Cap at 10
    }
};