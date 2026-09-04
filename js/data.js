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
        description: "Select the option that best maintains formal business standards.",
        questions: [
            { id: "g1", question: "Which of the following is the most professional way to follow up on a pending task?", options: ["Why haven't you finished the report yet?", "I am waiting for the report, please send it now.", "I am writing to check on the status of the report due yesterday.", "Has the report been done by you or not?"], answer: 2 },
            { id: "g2", question: "Choose the grammatically correct sentence:", options: ["The manager, along with his team members, are attending the seminar.", "The manager, along with his team members, is attending the seminar.", "The manager, along with his team members, were attending the seminar.", "The manager, along with his team members, have been attending the seminar."], answer: 1 },
            { id: "g3", question: "Identify the correct conditional form: 'If the server ___ earlier, we would have met the deadline.'", options: ["would have been fixed", "was fixed", "had been fixed", "has been fixed"], answer: 2 },
            { id: "g4", question: "Choose the correct preposition: 'The committee was appreciative ___ the efforts made by the interns.'", options: ["for", "of", "about", "with"], answer: 1 },
            { id: "g5", question: "Select the sentence with correct punctuation for a formal document:", options: ["The project is high-priority; therefore, we must allocate more resources.", "The project is high-priority, therefore we must allocate more resources.", "The project is high-priority; therefore we must allocate more resources.", "The project is high-priority therefore, we must allocate more resources."], answer: 0 },
            { id: "g6", question: "Which word best completes the sentence: 'The CEO's speech was ___ and to the point.'", options: ["Verbose", "Concise", "Protracted", "Redundant"], answer: 1 },
            { id: "g7", question: "Identify the error: 'Between you and I, the new policy seems quite restrictive.'", options: ["Between", "and I", "seems", "quite restrictive"], answer: 1 }, // Should be 'and me'
            { id: "g8", question: "Choose the most formal alternative for 'He gave up on the project.'", options: ["He quit the project.", "He abandoned the project.", "He stopped the project.", "He threw away the project."], answer: 1 },
            { id: "g9", question: "Select the correct spelling used in global business English:", options: ["Liaison", "Liason", "Liaisonne", "Liaisonn"], answer: 0 },
            { id: "g10", question: "Choose the correct verb form: 'Neither the supervisor nor the engineers ___ aware of the glitch.'", options: ["was", "were", "has been", "is"], answer: 1 }
        ]
    },
    {
        id: "sec_2",
        title: "Business Communication Writing",
        type: "writing",
        tasks: [
            {
                id: "w1",
                title: "Task 1: Project Extension Request",
                scenario: "You are working on a critical module. Due to an unexpected API integration issue, you need two more days. Write an email to your Project Manager, Ms. Anjali, explaining the technical hurdle and proposing a revised timeline.",
                instructions: "Write a professional email (80-120 words). Include a clear subject line."
            },
            {
                id: "w2",
                title: "Task 2: Apology for Scheduling Conflict",
                scenario: "You missed a high-stakes client call because you were double-booked for an internal training session. Write an email to the client, Mr. David, apologizing for the oversight, summarizing your understanding of the meeting's agenda, and requesting a 15-minute slot to sync up.",
                instructions: "Write a professional email (150-200 words). Maintain a sincere but confident tone."
            }
        ]
    },
    {
        id: "sec_3",
        title: "Situational Chat / Email Response",
        type: "mcq",
        description: "Select the response that demonstrates the highest level of Emotional Intelligence (EQ).",
        questions: [
            { id: "c1", question: "A senior colleague criticizes your presentation style in front of the team. How do you respond?", options: ["Tell them it was unprofessional to do that publicly.", "Ignore the comment and continue with the presentation.", "Thank them for the feedback and offer to discuss specific improvements after the meeting.", "Argue that your style is modern and more effective."], answer: 2 },
            { id: "c2", question: "A client asks for a feature that is not in the current contract. Your response:", options: ["We can't do that. It's not in the contract.", "That is an interesting suggestion. Let me discuss the feasibility and scope with my technical lead and get back to you.", "Sure, we will do it for free to keep you happy.", "You will have to pay a lot extra for this feature."], answer: 1 },
            { id: "c3", question: "Your teammate is consistently missing deadlines, affecting your work. You say:", options: ["I am reporting you to the manager if you miss one more.", "Is everything okay? I noticed a delay in the modules; let's see how we can align to meet the project goals.", "I'll do your work for you, just don't tell the boss.", "You are being very irresponsible lately."], answer: 1 },
            { id: "c4", question: "Which subject line is most appropriate for a technical escalation?", options: ["ISSUE WITH SYSTEM", "Help me fast!!", "Urgent: Production Server Latency - Ticket #9902", "System not working since morning"], answer: 2 },
            { id: "c5", question: "How do you professionally decline a meeting invite due to a prior commitment?", options: ["I'm busy, can't come.", "I have another meeting, sorry.", "Thank you for the invite. Unfortunately, I have a prior commitment. Could we record the session or sync up later?", "Delete the invite without responding."], answer: 2 },
            { id: "c6", question: "A customer is shouting on a call about a billing error. You should:", options: ["Shout back to show authority.", "Hang up immediately.", "Acknowledge their frustration, stay calm, and state the steps you are taking to investigate the error.", "Tell them it's not your department."], answer: 2 }
        ]
    },
    {
        id: "sec_4",
        title: "Reading Comprehension",
        type: "reading",
        passage: "The concept of 'Cognitive Diversity' in the workplace goes beyond demographic differences. It refers to the inclusion of people who have different styles of problem-solving and can offer unique perspectives because they think differently. High-performing teams at Capgemini-like organizations leverage this diversity to avoid 'Groupthink'—a psychological phenomenon where the desire for harmony in a group results in irrational or dysfunctional decision-making. By encouraging dissenting opinions and intellectual friction, companies can foster innovation and better manage complex global projects.",
        questions: [
            { id: "r1", question: "According to the passage, what is the primary benefit of 'Cognitive Diversity'?", options: ["It improves office aesthetics.", "It helps avoid dysfunctional decision-making caused by Groupthink.", "It ensures everyone thinks exactly the same way.", "It reduces the number of meetings needed."], answer: 1 },
            { id: "r2", question: "What does the term 'Groupthink' imply in this context?", options: ["Effective team collaboration", "A tendency to prioritize group harmony over critical evaluation", "Thinking as a group to solve a math problem", "Brainstorming sessions"], answer: 1 },
            { id: "r3", question: "The author suggests that 'intellectual friction' is:", options: ["A sign of a failing team", "Something to be avoided at all costs", "A catalyst for innovation", "A result of poor management"], answer: 2 },
            { id: "r4", question: "Which word in the text is a synonym for 'disagreeing'?", options: ["Dissenting", "Leverage", "Harmony", "Inclusion"], answer: 0 }
        ]
    },
    {
        id: "sec_5",
        title: "Listening Comprehension",
        type: "listening",
        audioUrl: "https://drive.google.com/file/d/1Q5UBeELmZekqw_Y_KP9tSAojmWqrBmt-", 
        description: "Analyze the audio clip for specific project details and stakeholder concerns.",
        questions: [
    {
        id: "l1",
        question: "What is one major advantage of remote work mentioned in the passage?",
        options: [
            "Higher salaries",
            "Saving commuting time",
            "More holidays",
            "Less responsibility"
        ],
        answer: 1
    },
    {
        id: "l2",
        question: "Which skill is important for successful remote work?",
        options: [
            "Cooking",
            "Driving",
            "Time management",
            "Physical strength"
        ],
        answer: 2
    },
    {
        id: "l3",
        question: "What problem may employees face while working remotely?",
        options: [
            "Finding transportation",
            "Separating professional and personal life",
            "Getting a promotion",
            "Learning to use computers"
        ],
        answer: 1
    },
    {
        id: "l4",
        question: "According to the passage, successful remote work depends on:",
        options: [
            "Technology alone",
            "Working longer hours",
            "Discipline, communication, and time management",
            "Having a large office"
        ],
        answer: 2
    }
]
    },
    {
        id: "sec_6",
        title: "Spoken Communication Simulation",
        type: "speaking",
        tasks: [
            {
                id: "s1",
                title: "Task 1: Elevator Pitch for a Solution",
                scenario: "You have identified a way to automate a repetitive data-entry task that saves the team 5 hours a week. Present your idea to your Team Lead in 60 seconds.",
                prepTime: 30,
                recordTime: 60
            },
            {
                id: "s2",
                title: "Task 2: Delivering Unfavorable News",
                scenario: "A software release has been postponed by one week due to a critical security patch requirement. Explain this to the client (Mr. David) over a recorded video message, ensuring you maintain trust.",
                prepTime: 45,
                recordTime: 90
            }
        ]
    }
]
    }
};
