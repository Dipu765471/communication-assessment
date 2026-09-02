"use strict";

const Storage = {
    PREFIX: "capgemini_assessment_",

    /**
     * Saves the user's answer for a specific question.
     */
    saveAnswer(setId, questionId, value) {
        const answers = this.getAllAnswers(setId);
        answers[questionId] = value;
        localStorage.setItem(this.PREFIX + setId + "_answers", JSON.stringify(answers));
    },

    /**
     * Retrieves all answers for a specific test set.
     */
    getAllAnswers(setId) {
        const data = localStorage.getItem(this.PREFIX + setId + "_answers");
        return data ? JSON.parse(data) : {};
    },

    /**
     * Saves the user's current position (Section and Question index).
     */
    saveCurrentState(setId, sectionIdx, questionIdx) {
        const state = { sectionIdx, questionIdx };
        localStorage.setItem(this.PREFIX + setId + "_state", JSON.stringify(state));
    },

    /**
     * Gets the last saved position.
     */
    getCurrentState(setId) {
        const data = localStorage.getItem(this.PREFIX + setId + "_state");
        return data ? JSON.parse(data) : { sectionIdx: 0, questionIdx: 0 };
    },

    /**
     * Tracks which questions have been visited or marked for review.
     */
    saveMetadata(setId, metadata) {
        localStorage.setItem(this.PREFIX + setId + "_metadata", JSON.stringify(metadata));
    },

    getMetadata(setId) {
        const data = localStorage.getItem(this.PREFIX + setId + "_metadata");
        return data ? JSON.parse(data) : { visited: [], marked: [] };
    },

    /**
     * Clears storage for a fresh start.
     */
    clearAll() {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(this.PREFIX)) {
                localStorage.removeItem(key);
            }
        });
    }
};