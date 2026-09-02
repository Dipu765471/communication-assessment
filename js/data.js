/**
 * DATA ARCHITECTURE:
 * To add a new set, simply copy the 'set1' object and rename it to 'set2'.
 * The application logic (app.js) will automatically handle the rendering.
 */

const TEST_DATA = {
    set1: {
        id: "set1",
        title: "Communication Assessment - Set 1",
        duration: 3600, // 60 minutes in seconds

        sections: [
            {
                id: "sec_1",
                title: "Grammar & Sentence Correction",
                type: "mcq",
                description: "Select the grammatically correct option for professional context.",
                questions: [
                    { id: "g1", question: "Choose the correct sentence:", options: ["The team have completed the project.", "The team has completed the project.", "The team is completed the project.", "The team has complete the project."], answer: 1 },
                    { id: "g2", question: "Select the formal version: 'I can't come to the meeting.'", options: ["I won't make it to the meeting.", "I am unable to attend the scheduled meeting.", "I am not coming for the meeting.", "Meeting is not possible for me."], answer: 1 },
                    { id: "g3", question: "Which word correctly completes: 'The manager ___ the report before the deadline.'", options: ["submitted", "submits", "had submitted", "has submit"], answer: 2 },
                    { id: "g4", question: "Find the error: 'Either the supervisor or the employees is responsible.'", options: ["Either", "supervisor", "is", "responsible"], answer: 2 }, // 'are' should be used
                    { id: "g5", question: "Identify the correct preposition: 'We will discuss this ___ the meeting.'", options: ["on", "at", "in", "by"], answer: 1 },
                    { id: "g6", question: "Choose the correct formal closing:", options: ["Best,", "Cheers,", "Yours sincerely,", "Thanks!"], answer: 2 },
                    { id: "g7", question: "Correct the sentence: 'He don't know the password.'", options: ["He doesn't knows", "He don't knows", "He doesn't know", "He didn't knew"], answer: 2 },
                    { id: "g8", question: "Which is more professional?", options: ["Give me the file.", "Send the file now.", "Could you please share the file?", "I want the file."], answer: 2 },
                    { id: "g9", question: "The project was delayed ___ unforeseen circumstances.", options: ["because", "due to", "as", "since"], answer: 1 },
                    { id: "g10", question: "Choose the correctly spelled word:", options: ["Accomodation", "Accommodation", "Acomodation", "Accommodatn"], answer: 1 }
                ]
            },
            {
                id: "sec_2",
                title: "Business Communication Writing",
                type: "writing",
                tasks: [
                    {
                        id: "w1",
                        title: "Task 1: Short Email (Requesting Information)",
                        scenario: "You are a trainee. You need to request the 'Brand Guidelines' document from the Marketing Manager, Mr. Sharma, to complete your task.",
                        instructions: "Write a short professional email (50-100 words)."
                    },
                    {
                        id: "w2",
                        title: "Task 2: Long Email (Handling a Complaint)",
                        scenario: "A client is unhappy because the software demo was delayed by 2 hours. Write an apology email explaining that it was due to a technical server migration and offer a new time.",
                        instructions: "Write a professional email (150-200 words)."
                    }
                ]
            },
            {
                id: "sec_3",
                title: "Chat / Email Response",
                type: "mcq",
                description: "Choose the best response for the given workplace scenario.",
                questions: [
                    { id: "c1", question: "Client: 'I need this by EOD, but your team said it's impossible.' Your response:", options: ["They are lazy, I'll do it.", "I understand the urgency; let me check if we can prioritize a partial delivery.", "Rules are rules, we can't.", "Please talk to my manager."], answer: 1 },
                    { id: "c2", question: "Colleague: 'Can you help me with this task?' (You are busy).", options: ["No, I'm busy.", "I'd love to help, but I'm currently tied up with a deadline. Can we connect in 2 hours?", "Ask someone else.", "Sure, I'll stop my work now."], answer: 1 },
                    { id: "c3", question: "Which is the best subject line for a leave request?", options: ["Leave", "I am sick", "Leave Application - [Your Name] - [Date]", "Need holiday"], answer: 2 },
                    { id: "c4", question: "A manager gives you constructive criticism. You say:", options: ["I disagree.", "Thank you for the feedback; I will work on improving these areas.", "It wasn't my fault.", "Okay."], answer: 1 },
                    { id: "c5", question: "How to start an email to someone you've never met?", options: ["Hey,", "Dear Mr./Ms. [Last Name],", "Yo!", "To whom it may concern,"], answer: 1 },
                    { id: "c6", question: "Your teammate missed a deadline. How do you address it in a meeting?", options: ["You ruined the project.", "Why are you late?", "Let's discuss the challenges we faced and how to get back on track.", "I will report you."], answer: 2 }
                ]
            },
            {
                id: "sec_4",
                title: "Reading Comprehension",
                type: "reading",
                passage: "In the modern corporate world, 'Agile Methodology' has shifted from a software development trend to a core business philosophy. It emphasizes iterative progress, team collaboration, and adaptability. Unlike the traditional Waterfall model, where every phase is mapped out at the start, Agile allows teams to respond to changing client needs in real-time. This flexibility reduces the risk of project failure and ensures that the final product remains relevant in a fast-paced market.",
                questions: [
                    { id: "r1", question: "What is the main advantage of Agile over Waterfall according to the text?", options: ["It is cheaper.", "It is older.", "It allows for real-time response to change.", "It requires no planning."], answer: 2 },
                    { id: "r2", question: "The word 'Iterative' most likely means:", options: ["Slow", "Repeating/Cyclical", "Final", "Difficult"], answer: 1 },
                    { id: "r3", question: "Who is Agile designed to satisfy primarily?", options: ["The CEO", "The Competitors", "The Clients", "The Waterfall model"], answer: 2 },
                    { id: "r4", question: "Which word in the text means 'the ability to change'?", options: ["Philosophy", "Adaptability", "Traditional", "Relevant"], answer: 1 }
                ]
            },
            {
                id: "sec_5",
                title: "Listening Comprehension",
                type: "listening",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Note: Replace with actual corporate audio clip
                description: "Listen to the clip and answer the questions. (Simulated corporate audio)",
                questions: [
                    { id: "l1", question: "What was the main topic of the conversation?", options: ["Salary hike", "Budget allocation", "Office renovation", "New hire orientation"], answer: 1 },
                    { id: "l2", question: "By what percentage did the speaker suggest increasing the marketing spend?", options: ["5%", "10%", "15%", "20%"], answer: 1 },
                    { id: "l3", question: "What was the deadline mentioned for the proposal?", options: ["Friday", "Monday", "Next month", "Wednesday"], answer: 3 },
                    { id: "l4", question: "Which department was mentioned as having a conflict?", options: ["HR", "Finance", "IT", "Sales"], answer: 1 }
                ]
            },
            {
                id: "sec_6",
                title: "Spoken Communication Simulation",
                type: "speaking",
                tasks: [
                    {
                        id: "s1",
                        title: "Task 1: Professional Introduction",
                        scenario: "Introduce yourself to a panel of interviewers. Focus on your academic background, one key project, and your career goals.",
                        prepTime: 30,
                        recordTime: 60
                    },
                    {
                        id: "s2",
                        title: "Task 2: Conflict Resolution",
                        scenario: "Explain to your supervisor why your team couldn't meet the deadline due to a technical glitch, and propose a solution.",
                        prepTime: 45,
                        recordTime: 90
                    }
                ]
            }
        ]
    }
};