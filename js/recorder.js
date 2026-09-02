"use strict";

const Recorder = {
    mediaRecorder: null,
    stream: null,
    chunks: [],

    async init() {
        const videoElement = document.getElementById('video-preview');
        if (!videoElement) return;

        try {
            // Requesting Camera and Mic
            this.stream = await navigator.mediaDevices.getUserMedia({ 
                video: true, 
                audio: true 
            });
            videoElement.srcObject = this.stream;
        } catch (err) {
            console.error("Error accessing media devices.", err);
            alert("Please enable Camera and Microphone permissions to perform the speaking tasks.");
        }
    },

    startRecording() {
        if (!this.stream) return alert("Camera not initialized.");

        this.chunks = [];
        this.mediaRecorder = new MediaRecorder(this.stream);
        
        this.mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) this.chunks.push(e.data);
        };

        this.mediaRecorder.onstop = () => {
            const blob = new Blob(this.chunks, { type: 'video/webm' });
            console.log("Recording stopped. Blob created.");
            // In a production app, you would upload this blob to a server here.
            document.getElementById('rec-status').innerText = "Recording Saved Successfully.";
            document.getElementById('rec-status').style.color = "var(--success-green)";
        };

        this.mediaRecorder.start();
        document.getElementById('rec-start').classList.add('hidden');
        document.getElementById('rec-stop').classList.remove('hidden');
        document.getElementById('rec-status').innerText = "Recording... Speak clearly.";
        document.getElementById('rec-status').style.color = "var(--danger-red)";
    },

    stopRecording() {
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            this.mediaRecorder.stop();
            document.getElementById('rec-stop').classList.add('hidden');
            document.getElementById('rec-start').classList.remove('hidden');
            document.getElementById('rec-start').innerText = "Re-record";
        }
    }
};