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
    {
        id: "g1",
        question: "You need to follow up with a team member about a pending task. Which sentence is most appropriate in a professional workplace?",
        options: [
            "Why have you still not completed the task?",
            "Please finish the task immediately.",
            "I am writing to follow up on the status of the task assigned to you.",
            "You haven't done the task yet, right?"
        ],
        answer: 2
    },

    {
        id: "g2",
        question: "Choose the grammatically correct sentence:",
        options: [
            "The development team are working on the client requirements.",
            "The development team is working on the client requirements.",
            "The development team were working on the client requirements.",
            "The development team have working on the client requirements."
        ],
        answer: 1
    },

    {
        id: "g3",
        question: "Complete the sentence correctly: 'If the team ___ the issue earlier, the application would not have failed.'",
        options: [
            "identified",
            "has identified",
            "had identified",
            "would identify"
        ],
        answer: 2
    },

    {
        id: "g4",
        question: "Choose the correct preposition: 'The client was satisfied ___ the solution provided by our team.'",
        options: [
            "at",
            "with",
            "for",
            "on"
        ],
        answer: 1
    },

    {
        id: "g5",
        question: "Choose the sentence with correct punctuation:",
        options: [
            "The deadline is approaching; therefore, we need to complete the testing soon.",
            "The deadline is approaching, therefore we need to complete the testing soon.",
            "The deadline is approaching therefore, we need to complete the testing soon.",
            "The deadline is approaching; therefore we need, to complete the testing soon."
        ],
        answer: 0
    },

    {
        id: "g6",
        question: "Choose the word that best completes the sentence: 'The project manager gave a ___ explanation of the project requirements.'",
        options: [
            "concise",
            "redundant",
            "verbose",
            "ambiguous"
        ],
        answer: 0
    },

    {
        id: "g7",
        question: "Identify the error in the sentence: 'The manager discussed the issue between you and I.'",
        options: [
            "The manager",
            "discussed",
            "between you and I",
            "the issue"
        ],
        answer: 2
    },

    {
        id: "g8",
        question: "Choose the most professional alternative for: 'We need to fix this problem quickly.'",
        options: [
            "We need to sort this mess out quickly.",
            "We should address this issue promptly.",
            "We have to deal with this somehow.",
            "We must get rid of this problem."
        ],
        answer: 1
    },

    {
        id: "g9",
        question: "Choose the correctly spelled word commonly used in corporate communication:",
        options: [
            "Accomodation",
            "Acommodation",
            "Accommodation",
            "Accommadation"
        ],
        answer: 2
    },

    {
        id: "g10",
        question: "Complete the sentence correctly: 'Neither the project manager nor the developers ___ available for the meeting.'",
        options: [
            "was",
            "is",
            "were",
            "has been"
        ],
        answer: 2
    }
]
    },
    {
        id: "sec_2",
        title: "Business Communication Writing",
        type: "writing",
        tasks: [
    {
        id: "w1",
        title: "Task 1: Project Delay",
        scenario: "You are working on a software project and an unexpected technical issue has delayed your assigned task. Write an email to your Project Manager requesting a short extension.",
        instructions: "Write a professional email (80-120 words). Include a clear subject line.",
        points: [
            "Mention the technical issue causing the delay.",
            "Explain briefly how it has affected the task.",
            "Request an extension of two days.",
            "Mention the revised completion date."
        ]
    },

    {
        id: "w2",
        title: "Task 2: Missed Client Meeting",
        scenario: "You missed an important client meeting because it overlapped with an internal training session. Write an email to the client apologizing for missing the meeting and requesting a follow-up discussion.",
        instructions: "Write a professional email (150-200 words). Include a clear subject line.",
        points: [
            "Apologize for missing the meeting.",
            "Briefly explain the scheduling conflict.",
            "Mention your understanding of the main discussion points.",
            "Request a suitable 15-minute slot for a follow-up call."
        ]
    }
]
    },
    {
        id: "sec_3",
        title: "Situational Chat / Email Response",
        type: "mcq",
        description: "Select the response that demonstrates the highest level of Emotional Intelligence (EQ).",
        questions: [
    {
        id: "c1",
        question: "During a team meeting, your manager points out a mistake in your work. What would be the most appropriate response?",
        options: [
            "Acknowledge the observation and explain the reason for the mistake so the team has the complete context.",
            "Thank the manager for pointing it out and ask what changes would help avoid a similar issue.",
            "Accept the feedback and suggest discussing the correction separately so the meeting can continue.",
            "Agree with the feedback and mention that you will review the issue once the meeting is over."
        ],
        answer: 1
    },

    {
        id: "c2",
        question: "A client requests a feature that was not included in the agreed project scope. How should you handle the request?",
        options: [
            "Let the client know that the feature is outside the current scope and discuss whether it can be considered separately.",
            "Acknowledge the requirement, check its technical and project impact internally, and then update the client on the available options.",
            "Tell the client that the requirement can be considered after confirming the additional effort involved.",
            "Inform the client that the team will first review the requirement before confirming whether it can be included."
        ],
        answer: 1
    },

    {
        id: "c3",
        question: "A teammate's delayed work is beginning to affect your own deadline. What would be the best approach?",
        options: [
            "Discuss the delay with the teammate and understand whether there is any issue preventing completion.",
            "Inform the teammate about the impact on your work and agree on a revised timeline for the pending task.",
            "Raise the concern with the teammate first and, if the delay continues, discuss the impact with the project manager.",
            "Ask the teammate about the delay, explain the dependency, and offer help if required to keep the work on schedule."
        ],
        answer: 2
    },

    {
        id: "c4",
        question: "You need to report a critical issue affecting a production application. Which subject line would be most effective?",
        options: [
            "Urgent: Production Application Issue – Login Failure",
            "Production Application – Login Failure Requiring Attention",
            "Critical Production Issue – Application Login Failure",
            "Application Login Failure – Production Environment"
        ],
        answer: 2
    },

    {
        id: "c5",
        question: "You receive a meeting invitation that conflicts with an important task already scheduled. What would be the most professional response?",
        options: [
            "Thank the organizer and explain that you have a prior commitment, then ask whether the discussion can be moved or shared afterward.",
            "Inform the organizer about the conflict and ask if another team member can represent you in the meeting.",
            "Let the organizer know that you may not be able to attend because of another commitment and ask for the meeting details afterward.",
            "Decline the invitation with a brief explanation and request the meeting notes so you can remain informed."
        ],
        answer: 0
    },

    {
        id: "c6",
        question: "A client is upset because an issue has taken longer than expected to resolve. What should you do?",
        options: [
            "Acknowledge the concern, explain the current status, and provide the next expected update.",
            "Apologize for the delay, explain that the technical team is investigating, and assure the client that the issue is being handled.",
            "Recognize the client's concern, avoid assigning blame, and explain the actions currently being taken to resolve the issue.",
            "Apologize for the inconvenience and provide the client with the technical team's latest findings and expected resolution."
        ],
        answer: 2
    }
]
    },
    {
        id: "sec_4",
        title: "Reading Comprehension",
        type: "reading",
        passage: "In modern technology organizations, adaptability has become an important skill as tools, processes, and customer expectations continue to change. Employees are often required to learn new technologies while maintaining productivity in their existing roles. However, adaptability does not simply mean accepting every change without question. Effective professionals evaluate how a new approach may affect their work, identify the skills they need to develop, and seek guidance when necessary. Organizations can support this process by providing learning opportunities and encouraging employees to experiment with new methods. In this way, adaptability becomes a continuous process of learning and improvement rather than a one-time response to organizational change.",

questions: [
    {
        id: "r5",
        question: "What does the passage primarily suggest about adaptability?",
        options: [
            "It requires employees to accept organizational changes without questioning existing methods.",
            "It is mainly the ability to learn new technologies while maintaining current productivity.",
            "It involves continuously learning, evaluating changes, and improving one's approach to work.",
            "It is a skill that becomes necessary only when an organization introduces new technology."
        ],
        answer: 2
    },

    {
        id: "r6",
        question: "According to the passage, what should an employee do when a new approach is introduced?",
        options: [
            "Adopt the approach immediately so that productivity is not affected.",
            "Evaluate its impact and identify any skills required to use it effectively.",
            "Wait for the organization to provide complete training before considering the approach.",
            "Continue using the existing method unless the new approach becomes mandatory."
        ],
        answer: 1
    },

    {
        id: "r7",
        question: "Which of the following can be inferred about organizations that encourage experimentation?",
        options: [
            "They expect employees to learn new methods without formal guidance.",
            "They may help employees become more comfortable with continuous learning and change.",
            "They consider experimentation more important than maintaining productivity.",
            "They reduce the need for employees to develop new technical skills."
        ],
        answer: 1
    },

    {
        id: "r8",
        question: "The phrase 'a one-time response to organizational change' implies that adaptability:",
        options: [
            "should be treated as an ongoing process rather than something used only during major changes.",
            "is mainly required when employees are moved to a different role within an organization.",
            "can be achieved once an employee learns the technology introduced by the organization.",
            "is most effective when employees respond quickly to every organizational decision."
        ],
        answer: 0
    }
]
    },
    {
        id: "sec_5",
        title: "Listening Comprehension",
        type: "listening",
        audioUrl: "https://drive.google.com/file/d/1KzdrsVt_JrJ8oapVGFVMcDJ2ejtchTVn/view?usp=sharing", 
        description: "Analyze the audio clip for specific project details and stakeholder concerns.",
        questions: [
    {
        id: "l1",
        question: "According to the passage, what is important in addition to individual technical skills?",
        options: [
            "Working independently without consulting others",
            "Communicating clearly and respecting different viewpoints",
            "Avoiding disagreements within the team",
            "Completing tasks without informing other team members"
        ],
        answer: 1
    },
    {
        id: "l2",
        question: "What does the passage suggest about disagreements in a project team?",
        options: [
            "They should always be avoided to maintain teamwork.",
            "They indicate that team members lack technical skills.",
            "They can help identify risks and lead to better solutions when handled professionally.",
            "They usually prevent teams from reaching their common goals."
        ],
        answer: 2
    },
    {
        id: "l3",
        question: "What should an employee do when facing difficulties with a task?",
        options: [
            "Try to solve the issue without informing the team.",
            "Wait until the project deadline before discussing the problem.",
            "Inform the relevant team members about the difficulty.",
            "Transfer the responsibility to another team member."
        ],
        answer: 2
    },
    {
        id: "l4",
        question: "Which statement best describes a strong team according to the passage?",
        options: [
            "A team where members generally agree with each other's decisions.",
            "A team where members focus mainly on their individual responsibilities.",
            "A team where members openly discuss problems, learn from one another, and work toward a common goal.",
            "A team where disagreements are resolved by the most experienced member."
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
        title: "Task 1: Suggesting a Process Improvement",
        scenario: "You noticed that your team spends considerable time manually entering data into a system. You have an idea to automate part of the process and believe it could save several hours each week. Present your idea to your Team Lead in a clear and convincing way.",
        prepTime: 30,
        recordTime: 60
    },

    {
        id: "s2",
        title: "Task 2: Communicating a Project Delay",
        scenario: "A software release has been delayed by one week because the testing team identified a critical security issue that must be fixed before deployment. Explain the situation to the client in a recorded video message. Be honest about the delay while maintaining the client's confidence in the team.",
        prepTime: 45,
        recordTime: 90
    }
]
    }
]
    }
};
