// ============================================
// Maahi Ki Funshala
// COMPLETE JAVASCRIPT
// ============================================


// ============================================
// 🧠 QUIZ QUESTIONS
// ============================================

const questions = [

    {
        question: "What is the capital of India?",
        options: [
            "Mumbai",
            "New Delhi",
            "Kolkata",
            "Chennai"
        ],
        answer: "New Delhi"
    },

    {
        question: "Which language is used to style a web page?",
        options: [
            "Python",
            "CSS",
            "C++",
            "Java"
        ],
        answer: "CSS"
    },

    {
        question: "How many days are there in a week?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: "7"
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Venus"
        ],
        answer: "Mars"
    },

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which device is used to type text?",
        options: [
            "Monitor",
            "Keyboard",
            "Speaker",
            "Printer"
        ],
        answer: "Keyboard"
    },

    {
        question: "How many months are there in a year?",
        options: [
            "10",
            "11",
            "12",
            "13"
        ],
        answer: "12"
    },

    {
        question: "Which one is a programming language?",
        options: [
            "Python",
            "HTML",
            "CSS",
            "JPEG"
        ],
        answer: "Python"
    },

    {
        question: "Which is the largest ocean?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: "Pacific Ocean"
    },

    {
        question: "What is 10 + 5?",
        options: [
            "12",
            "15",
            "20",
            "25"
        ],
        answer: "15"
    },

    {
        question: "Which animal is known as the King of the Jungle?",
        options: [
            "Tiger",
            "Lion",
            "Elephant",
            "Bear"
        ],
        answer: "Lion"
    },

    {
        question: "How many hours are there in a day?",
        options: [
            "12",
            "18",
            "24",
            "48"
        ],
        answer: "24"
    },

    {
        question: "Which is the fastest land animal?",
        options: [
            "Lion",
            "Horse",
            "Cheetah",
            "Tiger"
        ],
        answer: "Cheetah"
    },

    {
        question: "What is 5 × 5?",
        options: [
            "10",
            "20",
            "25",
            "30"
        ],
        answer: "25"
    },

    {
        question: "Which planet is closest to the Sun?",
        options: [
            "Earth",
            "Mars",
            "Mercury",
            "Venus"
        ],
        answer: "Mercury"
    }

];


// ============================================
// QUIZ VARIABLES
// ============================================

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;

const totalQuestions = 10;


// ============================================
// SHUFFLE
// ============================================

function shuffle(array) {

    let result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        let j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            result[i],
            result[j]
        ] =
        [
            result[j],
            result[i]
        ];

    }

    return result;
}


// ============================================
// START QUIZ
// ============================================

function startQuiz() {

    quizQuestions =
        shuffle(questions)
        .slice(0, totalQuestions);

    currentQuestion = 0;
    score = 0;

    let scoreElement =
        document.getElementById("score");

    if (scoreElement) {

        scoreElement.innerText =
            "Score: 0";

    }

    showQuestion();
}


// ============================================
// SHOW QUESTION
// ============================================

function showQuestion() {

    let current =
        quizQuestions[currentQuestion];

    let questionNumber =
        document.getElementById(
            "questionNumber"
        );

    let question =
        document.getElementById(
            "question"
        );

    let options =
        document.getElementById(
            "options"
        );

    if (!questionNumber || !question || !options) {
        return;
    }

    questionNumber.innerText =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        totalQuestions;

    question.innerText =
        current.question;

    options.innerHTML = "";

    current.options.forEach(
        function(option) {

            let button =
                document.createElement(
                    "button"
                );

            button.className =
                "option";

            button.innerText =
                option;

            button.onclick =
                function() {

                    checkAnswer(
                        button,
                        option
                    );

                };

            options.appendChild(button);

        }
    );


    let nextBtn =
        document.getElementById(
            "nextBtn"
        );

    if (nextBtn) {

        nextBtn.style.display =
            "none";

    }

    let submitBtn =
        document.getElementById(
            "submitBtn"
        );

    if (submitBtn) {

        submitBtn.style.display =
            "none";

    }

}


// ============================================
// CHECK ANSWER
// ============================================

function checkAnswer(
    button,
    selectedAnswer
) {

    let current =
        quizQuestions[currentQuestion];

    let allOptions =
        document.querySelectorAll(
            ".option"
        );

    allOptions.forEach(
        function(option) {

            option.disabled = true;

        }
    );


    if (
        selectedAnswer ===
        current.answer
    ) {

        button.classList.add(
            "correct"
        );

        score++;

        let scoreElement =
            document.getElementById(
                "score"
            );

        if (scoreElement) {

            scoreElement.innerText =
                "Score: " + score;

        }

    }

    else {

        button.classList.add(
            "wrong"
        );

        allOptions.forEach(
            function(option) {

                if (
                    option.innerText ===
                    current.answer
                ) {

                    option.classList.add(
                        "correct"
                    );

                }

            }
        );

    }


    if (
        currentQuestion ===
        totalQuestions - 1
    ) {

        let submitBtn =
            document.getElementById(
                "submitBtn"
            );

        if (submitBtn) {

            submitBtn.style.display =
                "inline-block";

        }

    }

    else {

        let nextBtn =
            document.getElementById(
                "nextBtn"
            );

        if (nextBtn) {

            nextBtn.style.display =
                "inline-block";

        }

    }

}


// ============================================
// NEXT QUESTION
// ============================================

function nextQuestion() {

    currentQuestion++;

    if (
        currentQuestion <
        totalQuestions
    ) {

        showQuestion();

    }

}


// ============================================
// SUBMIT QUIZ
// ============================================

function submitQuiz() {

    showResult();

}


// ============================================
// QUIZ RESULT
// ============================================

function showResult() {

    let quizBox =
        document.getElementById(
            "quizBox"
        );

    if (!quizBox) {
        return;
    }

    let percentage =
        Math.round(
            (
                score /
                totalQuestions
            ) * 100
        );


    quizBox.innerHTML = `

        <div class="result">

            <h2>
                🎉 Quiz Completed!
            </h2>

            <h2>
                ${score} / ${totalQuestions}
            </h2>

            <p>
                Your Score:
                ${percentage}%
            </p>

            <button
                class="btn"
                onclick="location.reload()">

                🔄 Play Again

            </button>

        </div>

    `;

}


// ============================================
// ⌨️ TYPING TEST
// ============================================


// ============================================
// TYPING LEVELS
// ============================================

const typingLevels = {

    1: {

        name: "🟢 Easy",

        time: 30,

        texts: [

            "Learning is fun and exciting.",

            "Practice makes us better every day.",

            "I love learning new things.",

            "Keep learning and keep smiling."

        ]

    },


    2: {

        name: "🟡 Medium",

        time: 30,

        texts: [

            "Learning something new every day makes us better.",

            "Practice is the key to improving your skills.",

            "Technology makes learning easier and more interesting.",

            "Small steps every day can lead to great success."

        ]

    },


    3: {

        name: "🟠 Hard",

        time: 30,

        texts: [

            "Students can achieve their goals with regular practice and determination.",

            "Reading books improves knowledge, imagination, creativity, and communication skills.",

            "Successful people understand that patience and consistency are important for achieving goals.",

            "Learning programming requires logical thinking, problem solving, and continuous practice."

        ]

    },


    4: {

        name: "🔴 Expert",

        time: 45,

        texts: [

            "Technology has transformed the way students learn, communicate, collaborate, and solve complex problems in modern education.",

            "Developing strong programming skills requires patience, logical thinking, creativity, debugging, and consistent hands-on practice.",

            "The ability to learn from mistakes and continuously improve is one of the most valuable skills a student can develop."

        ]

    },


    5: {

        name: "🟣 Master",

        time: 60,

        texts: [

            "Learning is a lifelong journey that requires curiosity, discipline, patience, creativity, and the willingness to overcome challenges while continuously improving knowledge and skills.",

            "Programming teaches us how to break complex problems into smaller parts, think logically, experiment with different solutions, identify mistakes, and develop efficient ways to solve real world challenges.",

            "Success does not come from talent alone. It comes from consistent effort, meaningful practice, learning from failure, staying focused on your goals, and having the courage to continue when things become difficult."

        ]

    }

};


// ============================================
// TYPING VARIABLES
// ============================================

let typingTimer = null;

let typingTime = 30;

let selectedLevel = 1;

let totalLevelTime = 30;

let typingStarted = false;


// ============================================
// SELECT LEVEL
// ============================================

function selectLevel(level) {

    clearInterval(typingTimer);

    typingStarted = false;

    selectedLevel = level;

    let levelData =
        typingLevels[selectedLevel];

    totalLevelTime =
        levelData.time;

    typingTime =
        levelData.time;


    let levelName =
        document.getElementById(
            "levelName"
        );

    if (levelName) {

        levelName.innerText =
            levelData.name;

    }


    let time =
        document.getElementById(
            "time"
        );

    if (time) {

        time.innerText =
            levelData.time;

    }


    let wpm =
        document.getElementById(
            "wpm"
        );

    if (wpm) {

        wpm.innerText = "0";

    }


    let accuracy =
        document.getElementById(
            "accuracy"
        );

    if (accuracy) {

        accuracy.innerText =
            "100";

    }


    let typingText =
        document.getElementById(
            "typingText"
        );

    if (typingText) {

        typingText.innerText =
            "Click Start Test to begin!";

    }


    let input =
        document.getElementById(
            "typingInput"
        );

    if (input) {

        input.value = "";

        input.disabled = true;

    }


    let result =
        document.getElementById(
            "typingResult"
        );

    if (result) {

        result.innerHTML = "";

    }


    hideSubmitButton();


    let buttons =
        document.querySelectorAll(
            ".level-btn"
        );

    buttons.forEach(
        function(button) {

            button.classList.remove(
                "active"
            );

        }
    );


    if (buttons[level - 1]) {

        buttons[level - 1]
            .classList.add(
                "active"
            );

    }

}


// ============================================
// START TYPING TEST
// ============================================

function startTypingTest() {

    clearInterval(typingTimer);

    typingStarted = true;


    let levelData =
        typingLevels[selectedLevel];


    totalLevelTime =
        levelData.time;

    typingTime =
        levelData.time;


    document.getElementById(
        "time"
    ).innerText =
        typingTime;


    document.getElementById(
        "wpm"
    ).innerText =
        "0";


    document.getElementById(
        "accuracy"
    ).innerText =
        "100";


    document.getElementById(
        "typingResult"
    ).innerHTML = "";


    let randomIndex =
        Math.floor(
            Math.random() *
            levelData.texts.length
        );


    document.getElementById(
        "typingText"
    ).innerText =
        levelData.texts[randomIndex];


    let input =
        document.getElementById(
            "typingInput"
        );


    input.value = "";

    input.disabled = false;

    input.focus();


    // ========================================
    // SHOW SUBMIT BUTTON
    // ========================================

    let submitBtn =
        document.getElementById(
            "submitBtn"
        );

    if (submitBtn) {

        submitBtn.style.display =
            "inline-block";

    }


    typingTimer =
        setInterval(
            function() {

                typingTime--;


                document.getElementById(
                    "time"
                ).innerText =
                    typingTime;


                calculateTyping();


                if (
                    typingTime <= 0
                ) {

                    finishTypingTest();

                }

            },
            1000
        );

}


// ============================================
// CALCULATE TYPING
// ============================================

function calculateTyping() {

    let input =
        document.getElementById(
            "typingInput"
        );

    if (!input) {
        return;
    }


    let typedText =
        input.value;


    let originalText =
        document.getElementById(
            "typingText"
        ).innerText;


    if (
        typedText.length === 0
    ) {

        document.getElementById(
            "wpm"
        ).innerText = "0";

        return;

    }


    let words =
        typedText
        .trim()
        .split(/\s+/)
        .filter(
            function(word) {

                return word.length > 0;

            }
        );


    let elapsedSeconds =
        totalLevelTime -
        typingTime;


    if (
        elapsedSeconds <= 0
    ) {

        return;

    }


    let minutes =
        elapsedSeconds / 60;


    let wpm =
        Math.round(
            words.length /
            minutes
        );


    document.getElementById(
        "wpm"
    ).innerText =
        wpm;


    let correctCharacters = 0;


    for (
        let i = 0;
        i < typedText.length;
        i++
    ) {

        if (
            typedText[i] ===
            originalText[i]
        ) {

            correctCharacters++;

        }

    }


    let accuracy =
        Math.round(
            (
                correctCharacters /
                typedText.length
            ) * 100
        );


    accuracy =
        Math.min(
            accuracy,
            100
        );


    document.getElementById(
        "accuracy"
    ).innerText =
        accuracy;

}


// ============================================
// SUBMIT TYPING TEST
// ============================================

function submitTypingTest() {

    if (!typingStarted) {
        return;
    }


    clearInterval(typingTimer);

    typingStarted = false;


    let input =
        document.getElementById(
            "typingInput"
        );


    input.disabled = true;


    calculateFinalTypingResult();


    let wpm =
        document.getElementById(
            "wpm"
        ).innerText;


    let accuracy =
        document.getElementById(
            "accuracy"
        ).innerText;


    document.getElementById(
        "typingResult"
    ).innerHTML =

        "🎉 Test Submitted!<br>" +

        "⚡ Speed: " +
        wpm +
        " WPM<br>" +

        "🎯 Accuracy: " +
        accuracy +
        "%";


    hideSubmitButton();

}


// ============================================
// CALCULATE FINAL RESULT
// ============================================

function calculateFinalTypingResult() {

    let input =
        document.getElementById(
            "typingInput"
        );


    let typedText =
        input.value;


    let originalText =
        document.getElementById(
            "typingText"
        ).innerText;


    if (
        typedText.trim().length === 0
    ) {

        document.getElementById(
            "wpm"
        ).innerText =
            "0";


        document.getElementById(
            "accuracy"
        ).innerText =
            "0";


        return;

    }


    // ========================================
    // WORD COUNT
    // ========================================

    let words =
        typedText
        .trim()
        .split(/\s+/)
        .filter(
            function(word) {

                return word.length > 0;

            }
        );


    // ========================================
    // TIME USED
    // ========================================

    let elapsedSeconds =
        totalLevelTime -
        typingTime;


    let actualSeconds =
        Math.max(
            elapsedSeconds,
            1
        );


    let minutes =
        actualSeconds / 60;


    // ========================================
    // WPM
    // ========================================

    let wpm =
        Math.round(
            words.length /
            minutes
        );


    // ========================================
    // ACCURACY
    // ========================================

    let correctCharacters = 0;


    for (
        let i = 0;
        i < typedText.length;
        i++
    ) {

        if (
            typedText[i] ===
            originalText[i]
        ) {

            correctCharacters++;

        }

    }


    let accuracy =
        Math.round(
            (
                correctCharacters /
                typedText.length
            ) * 100
        );


    accuracy =
        Math.min(
            accuracy,
            100
        );


    document.getElementById(
        "wpm"
    ).innerText =
        wpm;


    document.getElementById(
        "accuracy"
    ).innerText =
        accuracy;

}


// ============================================
// FINISH TYPING TEST
// TIME OVER
// ============================================

function finishTypingTest() {

    clearInterval(typingTimer);

    typingStarted = false;


    let input =
        document.getElementById(
            "typingInput"
        );


    input.disabled = true;


    calculateFinalTypingResult();


    let wpm =
        document.getElementById(
            "wpm"
        ).innerText;


    let accuracy =
        document.getElementById(
            "accuracy"
        ).innerText;


    document.getElementById(
        "typingResult"
    ).innerHTML =

        "⏰ Time's Up!<br>" +

        "⚡ Speed: " +
        wpm +
        " WPM<br>" +

        "🎯 Accuracy: " +
        accuracy +
        "%";


    hideSubmitButton();

}


// ============================================
// RESET TYPING TEST
// ============================================

function resetTypingTest() {

    clearInterval(typingTimer);

    typingStarted = false;


    let levelData =
        typingLevels[selectedLevel];


    typingTime =
        levelData.time;


    totalLevelTime =
        levelData.time;


    document.getElementById(
        "time"
    ).innerText =
        levelData.time;


    document.getElementById(
        "wpm"
    ).innerText =
        "0";


    document.getElementById(
        "accuracy"
    ).innerText =
        "100";


    document.getElementById(
        "typingText"
    ).innerText =
        "Click Start Test to begin!";


    let input =
        document.getElementById(
            "typingInput"
        );


    input.value = "";

    input.disabled = true;


    document.getElementById(
        "typingResult"
    ).innerHTML = "";


    hideSubmitButton();

}


// ============================================
// HIDE SUBMIT BUTTON
// ============================================

function hideSubmitButton() {

    let submitBtn =
        document.getElementById(
            "submitBtn"
        );


    if (submitBtn) {

        submitBtn.style.display =
            "none";

    }

}