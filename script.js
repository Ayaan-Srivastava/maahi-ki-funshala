/* =========================================================
   MAAHI KI FUNSHALA
   COMPLETE SCRIPT.JS
   Quiz + Typing Test
========================================================= */


/* =========================================================
   QUIZ SECTION
========================================================= */

const quizQuestions = {

    English: [
        {
            question: "Choose the correct sentence.",
            options: [
                "She go to school every day.",
                "She goes to school every day.",
                "She going to school every day.",
                "She gone to school every day."
            ],
            answer: 1
        },
        {
            question: "Choose the correct plural of 'Child'.",
            options: [
                "Childs",
                "Childes",
                "Children",
                "Childrens"
            ],
            answer: 2
        },
        {
            question: "What is the past tense of 'Go'?",
            options: [
                "Goed",
                "Gone",
                "Went",
                "Going"
            ],
            answer: 2
        },
        {
            question: "Identify the noun: 'The dog is barking.'",
            options: [
                "The",
                "Dog",
                "Is",
                "Barking"
            ],
            answer: 1
        },
        {
            question: "Choose the correct article: ___ apple.",
            options: [
                "A",
                "An",
                "The",
                "No article"
            ],
            answer: 1
        },
        {
            question: "Which word is an adjective?",
            options: [
                "Beautiful",
                "Run",
                "Quickly",
                "School"
            ],
            answer: 0
        },
        {
            question: "Choose the correct pronoun: 'Riya is a student. ___ is intelligent.'",
            options: [
                "He",
                "She",
                "It",
                "They"
            ],
            answer: 1
        },
        {
            question: "What is the opposite of 'Happy'?",
            options: [
                "Joyful",
                "Sad",
                "Excited",
                "Cheerful"
            ],
            answer: 1
        },
        {
            question: "Which is a verb?",
            options: [
                "Beautiful",
                "Run",
                "Blue",
                "Chair"
            ],
            answer: 1
        },
        {
            question: "Choose the correct spelling.",
            options: [
                "Beautifull",
                "Beutiful",
                "Beautiful",
                "Beautifol"
            ],
            answer: 2
        }
    ],


    Hindi: [
        {
            question: "हिंदी वर्णमाला में कितने स्वर माने जाते हैं?",
            options: [
                "10",
                "11",
                "12",
                "13"
            ],
            answer: 1
        },
        {
            question: "'जल' का पर्यायवाची शब्द क्या है?",
            options: [
                "अग्नि",
                "पानी",
                "वायु",
                "धरती"
            ],
            answer: 1
        },
        {
            question: "'दिन' का विलोम शब्द क्या है?",
            options: [
                "सुबह",
                "शाम",
                "रात",
                "दोपहर"
            ],
            answer: 2
        },
        {
            question: "'सुंदर' का विलोम क्या है?",
            options: [
                "अच्छा",
                "कुरूप",
                "मीठा",
                "साफ"
            ],
            answer: 1
        },
        {
            question: "'विद्यालय' का अर्थ क्या है?",
            options: [
                "घर",
                "बाजार",
                "स्कूल",
                "अस्पताल"
            ],
            answer: 2
        },
        {
            question: "'कमल' क्या है?",
            options: [
                "पक्षी",
                "फूल",
                "फल",
                "जानवर"
            ],
            answer: 1
        },
        {
            question: "'गाय' का बहुवचन क्या है?",
            options: [
                "गायों",
                "गाय",
                "गाया",
                "गायें"
            ],
            answer: 3
        },
        {
            question: "'सूर्य' का पर्यायवाची क्या है?",
            options: [
                "चंद्रमा",
                "रवि",
                "बादल",
                "तारा"
            ],
            answer: 1
        },
        {
            question: "'बड़ा' का विलोम क्या है?",
            options: [
                "लंबा",
                "छोटा",
                "ऊँचा",
                "मोटा"
            ],
            answer: 1
        },
        {
            question: "हिंदी भाषा की लिपि कौन-सी है?",
            options: [
                "रोमन",
                "देवनागरी",
                "गुरुमुखी",
                "उर्दू"
            ],
            answer: 1
        }
    ],


    Mathematics: [
        {
            question: "What is 5 + 7?",
            options: [
                "10",
                "11",
                "12",
                "13"
            ],
            answer: 2
        },
        {
            question: "What is 8 × 6?",
            options: [
                "42",
                "48",
                "54",
                "56"
            ],
            answer: 1
        },
        {
            question: "What is 100 ÷ 10?",
            options: [
                "5",
                "10",
                "20",
                "25"
            ],
            answer: 1
        },
        {
            question: "What is the square of 9?",
            options: [
                "18",
                "27",
                "81",
                "90"
            ],
            answer: 2
        },
        {
            question: "What is 15 - 8?",
            options: [
                "5",
                "6",
                "7",
                "8"
            ],
            answer: 2
        },
        {
            question: "How many sides does a triangle have?",
            options: [
                "2",
                "3",
                "4",
                "5"
            ],
            answer: 1
        },
        {
            question: "What is half of 50?",
            options: [
                "20",
                "25",
                "30",
                "35"
            ],
            answer: 1
        },
        {
            question: "What is 12 × 12?",
            options: [
                "124",
                "134",
                "144",
                "154"
            ],
            answer: 2
        },
        {
            question: "Which number is even?",
            options: [
                "17",
                "21",
                "29",
                "24"
            ],
            answer: 3
        },
        {
            question: "What is 50% of 100?",
            options: [
                "25",
                "40",
                "50",
                "75"
            ],
            answer: 2
        }
    ],


    "Social Science": [
        {
            question: "What is the capital of India?",
            options: [
                "Mumbai",
                "New Delhi",
                "Kolkata",
                "Chennai"
            ],
            answer: 1
        },
        {
            question: "Who is known as the Father of the Nation in India?",
            options: [
                "Jawaharlal Nehru",
                "Mahatma Gandhi",
                "Sardar Patel",
                "Subhash Chandra Bose"
            ],
            answer: 1
        },
        {
            question: "Which is the largest continent?",
            options: [
                "Africa",
                "Europe",
                "Asia",
                "Australia"
            ],
            answer: 2
        },
        {
            question: "How many states are there in India?",
            options: [
                "26",
                "27",
                "28",
                "29"
            ],
            answer: 2
        },
        {
            question: "Which is the longest river in India?",
            options: [
                "Yamuna",
                "Ganga",
                "Godavari",
                "Narmada"
            ],
            answer: 1
        },
        {
            question: "Who was the first Prime Minister of India?",
            options: [
                "Mahatma Gandhi",
                "Sardar Patel",
                "Jawaharlal Nehru",
                "Rajendra Prasad"
            ],
            answer: 2
        },
        {
            question: "Which ocean is south of India?",
            options: [
                "Atlantic Ocean",
                "Pacific Ocean",
                "Indian Ocean",
                "Arctic Ocean"
            ],
            answer: 2
        },
        {
            question: "What is the national animal of India?",
            options: [
                "Lion",
                "Tiger",
                "Elephant",
                "Peacock"
            ],
            answer: 1
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: [
                "Earth",
                "Mars",
                "Jupiter",
                "Venus"
            ],
            answer: 1
        },
        {
            question: "What is the currency of India?",
            options: [
                "Dollar",
                "Pound",
                "Rupee",
                "Euro"
            ],
            answer: 2
        }
    ],


    "General Studies": [
        {
            question: "Which is the largest planet in our Solar System?",
            options: [
                "Earth",
                "Mars",
                "Jupiter",
                "Saturn"
            ],
            answer: 2
        },
        {
            question: "How many days are there in a leap year?",
            options: [
                "365",
                "366",
                "364",
                "360"
            ],
            answer: 1
        },
        {
            question: "Which gas do humans need to breathe?",
            options: [
                "Carbon dioxide",
                "Oxygen",
                "Nitrogen",
                "Hydrogen"
            ],
            answer: 1
        },
        {
            question: "How many continents are there?",
            options: [
                "5",
                "6",
                "7",
                "8"
            ],
            answer: 2
        },
        {
            question: "Which is the fastest land animal?",
            options: [
                "Lion",
                "Tiger",
                "Cheetah",
                "Horse"
            ],
            answer: 2
        },
        {
            question: "Which organ pumps blood in the human body?",
            options: [
                "Brain",
                "Heart",
                "Lungs",
                "Kidney"
            ],
            answer: 1
        },
        {
            question: "Which is the smallest prime number?",
            options: [
                "0",
                "1",
                "2",
                "3"
            ],
            answer: 2
        },
        {
            question: "How many colors are there in a rainbow?",
            options: [
                "5",
                "6",
                "7",
                "8"
            ],
            answer: 2
        },
        {
            question: "Which device is used to type on a computer?",
            options: [
                "Monitor",
                "Keyboard",
                "Speaker",
                "Printer"
            ],
            answer: 1
        },
        {
            question: "Which is the nearest star to Earth?",
            options: [
                "Moon",
                "Sun",
                "Mars",
                "Sirius"
            ],
            answer: 1
        }
    ]
};


/* =========================================================
   SCIENCE QUESTIONS
========================================================= */

const scienceQuestions = {

    Easy: [
        {
            question: "Which organ helps us to breathe?",
            options: [
                "Heart",
                "Lungs",
                "Brain",
                "Stomach"
            ],
            answer: 1
        },
        {
            question: "What do plants need to make food?",
            options: [
                "Sunlight",
                "Plastic",
                "Iron",
                "Stone"
            ],
            answer: 0
        },
        {
            question: "Which is a source of light?",
            options: [
                "Sun",
                "Table",
                "Chair",
                "Book"
            ],
            answer: 0
        },
        {
            question: "Water freezes at:",
            options: [
                "0°C",
                "10°C",
                "50°C",
                "100°C"
            ],
            answer: 0
        },
        {
            question: "Which planet do we live on?",
            options: [
                "Mars",
                "Venus",
                "Earth",
                "Jupiter"
            ],
            answer: 2
        },
        {
            question: "Which sense organ helps us see?",
            options: [
                "Ear",
                "Eye",
                "Nose",
                "Skin"
            ],
            answer: 1
        },
        {
            question: "Which gas do plants release during photosynthesis?",
            options: [
                "Oxygen",
                "Carbon dioxide",
                "Hydrogen",
                "Nitrogen"
            ],
            answer: 0
        },
        {
            question: "Which animal is a mammal?",
            options: [
                "Cow",
                "Frog",
                "Fish",
                "Snake"
            ],
            answer: 0
        },
        {
            question: "What is the natural satellite of Earth?",
            options: [
                "Sun",
                "Moon",
                "Mars",
                "Venus"
            ],
            answer: 1
        },
        {
            question: "Which part of a plant absorbs water?",
            options: [
                "Flower",
                "Leaf",
                "Root",
                "Fruit"
            ],
            answer: 2
        }
    ],


    Medium: [
        {
            question: "Which process helps plants make food?",
            options: [
                "Respiration",
                "Photosynthesis",
                "Digestion",
                "Evaporation"
            ],
            answer: 1
        },
        {
            question: "Which blood cells fight infections?",
            options: [
                "Red blood cells",
                "White blood cells",
                "Platelets",
                "Plasma"
            ],
            answer: 1
        },
        {
            question: "What is the boiling point of water at normal pressure?",
            options: [
                "50°C",
                "75°C",
                "100°C",
                "150°C"
            ],
            answer: 2
        },
        {
            question: "Which force pulls objects toward Earth?",
            options: [
                "Friction",
                "Gravity",
                "Magnetic force",
                "Electric force"
            ],
            answer: 1
        },
        {
            question: "Which vitamin is mainly produced by sunlight exposure?",
            options: [
                "Vitamin A",
                "Vitamin B",
                "Vitamin C",
                "Vitamin D"
            ],
            answer: 3
        },
        {
            question: "Which organ filters waste from the blood?",
            options: [
                "Heart",
                "Kidney",
                "Lungs",
                "Brain"
            ],
            answer: 1
        },
        {
            question: "What is the basic unit of life?",
            options: [
                "Tissue",
                "Organ",
                "Cell",
                "Bone"
            ],
            answer: 2
        },
        {
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: [
                "Oxygen",
                "Nitrogen",
                "Carbon dioxide",
                "Hydrogen"
            ],
            answer: 1
        },
        {
            question: "What type of energy does a moving object have?",
            options: [
                "Potential energy",
                "Kinetic energy",
                "Chemical energy",
                "Solar energy"
            ],
            answer: 1
        },
        {
            question: "Which metal is liquid at room temperature?",
            options: [
                "Iron",
                "Copper",
                "Mercury",
                "Aluminium"
            ],
            answer: 2
        }
    ],


    Hard: [
        {
            question: "What is the SI unit of force?",
            options: [
                "Joule",
                "Newton",
                "Watt",
                "Pascal"
            ],
            answer: 1
        },
        {
            question: "Which organelle is called the powerhouse of the cell?",
            options: [
                "Nucleus",
                "Ribosome",
                "Mitochondria",
                "Vacuole"
            ],
            answer: 2
        },
        {
            question: "What is the chemical formula of water?",
            options: [
                "CO₂",
                "H₂O",
                "O₂",
                "H₂"
            ],
            answer: 1
        },
        {
            question: "Which law explains action and reaction?",
            options: [
                "Newton's First Law",
                "Newton's Second Law",
                "Newton's Third Law",
                "Law of Gravitation"
            ],
            answer: 2
        },
        {
            question: "What is the pH of pure water?",
            options: [
                "5",
                "6",
                "7",
                "8"
            ],
            answer: 2
        },
        {
            question: "Which particle has a negative charge?",
            options: [
                "Proton",
                "Neutron",
                "Electron",
                "Nucleus"
            ],
            answer: 2
        },
        {
            question: "Which blood group is commonly called the universal donor?",
            options: [
                "A+",
                "B+",
                "AB+",
                "O−"
            ],
            answer: 3
        },
        {
            question: "What is the approximate speed of light in vacuum?",
            options: [
                "3 × 10⁶ m/s",
                "3 × 10⁸ m/s",
                "3 × 10¹⁰ m/s",
                "3 × 10⁴ m/s"
            ],
            answer: 1
        },
        {
            question: "Which part of the brain controls balance?",
            options: [
                "Cerebrum",
                "Cerebellum",
                "Medulla",
                "Hypothalamus"
            ],
            answer: 1
        },
        {
            question: "Which type of bond involves sharing electrons?",
            options: [
                "Ionic bond",
                "Covalent bond",
                "Metallic bond",
                "Hydrogen bond"
            ],
            answer: 1
        }
    ]
};


/* =========================================================
   QUIZ VARIABLES
========================================================= */

let selectedSubject = "";
let selectedScienceLevel = "";

let currentQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;

let selectedAnswer = false;


/* =========================================================
   SELECT SUBJECT
========================================================= */

function selectSubject(subject, button) {

    selectedSubject = subject;

    document.querySelectorAll(".subject-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    if (button) {
        button.classList.add("active");
    }


    /* Science needs level selection */

    if (subject === "Science") {

        const scienceBox =
            document.getElementById("scienceLevelSelection");

        if (scienceBox) {
            scienceBox.style.display = "block";
        }

        return;
    }


    /* Other subjects start immediately */

    startQuiz(subject);
}


/* =========================================================
   SCIENCE LEVEL
========================================================= */

function selectScienceLevel(level, button) {

    selectedScienceLevel = level;

    document.querySelectorAll(".level-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    if (button) {
        button.classList.add("active");
    }

    startQuiz("Science", level);
}


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz(subject, scienceLevel = null) {

    clearQuizResult();

    currentQuestionIndex = 0;
    quizScore = 0;
    selectedAnswer = false;


    if (subject === "Science") {

        currentQuestions =
            scienceQuestions[scienceLevel];

        selectedScienceLevel = scienceLevel;

    } else {

        currentQuestions =
            quizQuestions[subject];

    }


    if (!currentQuestions ||
        currentQuestions.length === 0) {

        alert("Questions are not available yet.");
        return;
    }


    const subjectSelection =
        document.getElementById("subjectSelection");

    const quizArea =
        document.getElementById("quizArea");


    if (subjectSelection) {
        subjectSelection.style.display = "none";
    }

    if (quizArea) {
        quizArea.style.display = "block";
    }


    const quizSubject =
        document.getElementById("quizSubject");

    if (quizSubject) {

        if (subject === "Science") {

            quizSubject.innerText =
                "🔬 Science - " + scienceLevel;

        } else {

            quizSubject.innerText =
                "📚 " + subject;

        }
    }


    showQuestion();
}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

    if (currentQuestionIndex >= currentQuestions.length) {
        finishQuiz();
        return;
    }


    selectedAnswer = false;


    const q =
        currentQuestions[currentQuestionIndex];


    document.getElementById("questionNumber")
        .innerText =
        `Question ${currentQuestionIndex + 1} / ${currentQuestions.length}`;


    document.getElementById("score")
        .innerText =
        `Score: ${quizScore}`;


    document.getElementById("question")
        .innerText =
        q.question;


    const optionsBox =
        document.getElementById("options");

    optionsBox.innerHTML = "";


    q.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "option";

        button.innerText =
            option;

        button.onclick =
            function () {

                selectOption(index, button);
            };


        optionsBox.appendChild(button);

    });


    const nextBtn =
        document.getElementById("nextBtn");

    const submitBtn =
        document.getElementById("quizSubmitBtn");


    if (nextBtn) {
        nextBtn.style.display = "none";
    }


    if (submitBtn) {

        if (currentQuestionIndex ===
            currentQuestions.length - 1) {

            submitBtn.style.display = "block";

        } else {

            submitBtn.style.display = "none";
        }
    }
}


/* =========================================================
   SELECT OPTION
========================================================= */

function selectOption(index, button) {

    if (selectedAnswer) {
        return;
    }

    selectedAnswer = true;


    const question =
        currentQuestions[currentQuestionIndex];


    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(option => {
        option.disabled = true;
    });


    if (index === question.answer) {

        button.classList.add("correct");

        quizScore++;

    } else {

        button.classList.add("wrong");

        allOptions[question.answer]
            .classList.add("correct");
    }


    document.getElementById("score")
        .innerText =
        `Score: ${quizScore}`;


    if (currentQuestionIndex <
        currentQuestions.length - 1) {

        document.getElementById("nextBtn")
            .style.display = "block";

    } else {

        document.getElementById("quizSubmitBtn")
            .style.display = "block";
    }
}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

    if (!selectedAnswer) {
        return;
    }

    currentQuestionIndex++;

    showQuestion();
}


/* =========================================================
   SUBMIT QUIZ
========================================================= */

function submitQuiz() {

    if (!selectedAnswer) {

        alert("Please answer this question first.");

        return;
    }


    finishQuiz();
}


/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    const quizArea =
        document.getElementById("quizArea");


    if (!quizArea) return;


    const total =
        currentQuestions.length;


    const percentage =
        Math.round((quizScore / total) * 100);


    let message = "";


    if (percentage >= 80) {

        message = "🌟 Excellent! Great job!";

    } else if (percentage >= 60) {

        message = "👏 Good job! Keep learning!";

    } else if (percentage >= 40) {

        message = "🙂 Nice try! Practice more!";

    } else {

        message = "💪 Keep practicing! You can do it!";

    }


    quizArea.innerHTML = `

        <div class="result">

            <h2>🎉 Quiz Completed!</h2>

            <div class="result-card">

                <p>
                    📚 Subject:
                    <strong>${selectedSubject}</strong>
                </p>

                ${
                    selectedSubject === "Science"
                    ?
                    `<p>
                        🔬 Level:
                        <strong>${selectedScienceLevel}</strong>
                    </p>`
                    :
                    ""
                }

                <div class="result-score">

                    ${quizScore} / ${total}

                </div>

                <p>
                    🎯 Percentage:
                    <strong>${percentage}%</strong>
                </p>

                <p>
                    ${message}
                </p>

            </div>

            <div class="result-buttons">

                <button
                    class="btn"
                    onclick="restartQuiz()">

                    🔄 Try Again

                </button>

                <button
                    class="btn"
                    onclick="goHome()">

                    🏠 Home

                </button>

            </div>

        </div>

    `;
}


/* =========================================================
   RESTART QUIZ
========================================================= */

function restartQuiz() {

    location.reload();
}


/* =========================================================
   CLEAR QUIZ RESULT
========================================================= */

function clearQuizResult() {

    const quizBox =
        document.getElementById("quizBox");

    if (!quizBox) return;

    /*
       Nothing needed here.
       Kept as a separate function so
       future result systems can be added.
    */
}


/* =========================================================
   HOME BUTTON
========================================================= */

function goHome() {

    window.location.href = "index.html";
}


/* =========================================================
   TYPING TEST
========================================================= */


/*
   Different text for each level
*/

const typingLevels = {

    1: {
        name: "🟢 Easy",

        time: 30,

        text:
        "Learning is fun when we practice every day. " +
        "Small steps can help us improve our skills."
    },


    2: {
        name: "🟡 Basic",

        time: 30,

        text:
        "Reading books helps us learn new words and ideas. " +
        "Regular practice makes our typing faster and better."
    },


    3: {
        name: "🟠 Medium",

        time: 30,

        text:
        "Technology has changed the way students learn. " +
        "Computers and the internet provide many useful resources."
    },


    4: {
        name: "🔴 Hard",

        time: 30,

        text:
        "Good communication requires clear thinking, careful listening, " +
        "and the ability to express ideas in a simple and meaningful way."
    },


    5: {
        name: "🟣 Advanced",

        time: 30,

        text:
        "Consistent practice develops confidence and improves performance. " +
        "A student who learns from mistakes can gradually achieve better results."
    }

};


let currentTypingLevel = 1;

let typingTimer = null;

let typingTimeLeft = 30;

let typingStarted = false;

let typingFinished = false;


/* =========================================================
   SELECT TYPING LEVEL
========================================================= */

function selectLevel(level) {

    currentTypingLevel = level;


    document.querySelectorAll(".level-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (event &&
        event.target &&
        event.target.classList) {

        event.target.classList.add("active");

    }


    const levelData =
        typingLevels[level];


    const levelName =
        document.getElementById("levelName");


    if (levelName) {

        levelName.innerText =
            levelData.name;

    }


    resetTypingTest();
}


/* =========================================================
   START TYPING TEST
========================================================= */

function startTypingTest() {

    clearInterval(typingTimer);


    const levelData =
        typingLevels[currentTypingLevel];


    typingTimeLeft =
        levelData.time;


    typingStarted = true;

    typingFinished = false;


    const text =
        document.getElementById("typingText");

    const input =
        document.getElementById("typingInput");


    if (!text || !input) {
        return;
    }


    text.innerText =
        levelData.text;


    input.disabled = false;

    input.value = "";

    input.focus();


    document.getElementById("time")
        .innerText =
        typingTimeLeft;


    document.getElementById("wpm")
        .innerText =
        "0";


    document.getElementById("accuracy")
        .innerText =
        "100";


    document.getElementById("typingResult")
        .innerText =
        "";


    const submitBtn =
        document.getElementById("submitBtn");


    if (submitBtn) {

        submitBtn.style.display =
            "inline-block";

    }


    typingTimer =
        setInterval(() => {

            typingTimeLeft--;


            document.getElementById("time")
                .innerText =
                typingTimeLeft;


            updateTypingStats();


            if (typingTimeLeft <= 0) {

                clearInterval(typingTimer);

                finishTypingTest();

            }

        }, 1000);
}


/* =========================================================
   UPDATE TYPING STATS
========================================================= */

function updateTypingStats() {

    const input =
        document.getElementById("typingInput");


    if (!input) return;


    const typed =
        input.value;


    if (typed.length === 0) {

        document.getElementById("wpm")
            .innerText =
            "0";

        document.getElementById("accuracy")
            .innerText =
            "100";

        return;
    }


    const original =
        document.getElementById("typingText")
            .innerText;


    let correctCharacters = 0;


    for (
        let i = 0;
        i < typed.length;
        i++
    ) {

        if (typed[i] === original[i]) {

            correctCharacters++;

        }

    }


    const accuracy =
        Math.round(
            (correctCharacters / typed.length) * 100
        );


    const elapsedSeconds =
        typingLevels[currentTypingLevel].time
        - typingTimeLeft;


    let wpm = 0;


    if (elapsedSeconds > 0) {

        wpm =
            Math.round(
                (typed.length / 5) /
                (elapsedSeconds / 60)
            );

    }


    document.getElementById("wpm")
        .innerText =
        wpm;


    document.getElementById("accuracy")
        .innerText =
        Math.max(0, Math.min(100, accuracy));
}


/* =========================================================
   SUBMIT TYPING TEST
========================================================= */

function submitTypingTest() {

    if (!typingStarted) {

        alert("Please start the test first.");

        return;
    }


    finishTypingTest();
}


/* =========================================================
   FINISH TYPING TEST
========================================================= */

function finishTypingTest() {

    if (typingFinished) {
        return;
    }


    typingFinished = true;

    typingStarted = false;


    clearInterval(typingTimer);


    const input =
        document.getElementById("typingInput");


    if (!input) return;


    input.disabled = true;


    updateTypingStats();


    const wpm =
        document.getElementById("wpm")
            .innerText;


    const accuracy =
        document.getElementById("accuracy")
            .innerText;


    const result =
        document.getElementById("typingResult");


    if (result) {

        result.innerHTML = `

            🎉 Test Completed!

            <br>

            ⚡ Speed:
            <strong>${wpm} WPM</strong>

            <br>

            🎯 Accuracy:
            <strong>${accuracy}%</strong>

        `;

    }


    const submitBtn =
        document.getElementById("submitBtn");


    if (submitBtn) {

        submitBtn.style.display =
            "none";

    }
}


/* =========================================================
   RESET TYPING TEST
========================================================= */

function resetTypingTest() {

    clearInterval(typingTimer);


    typingStarted = false;

    typingFinished = false;


    const levelData =
        typingLevels[currentTypingLevel];


    typingTimeLeft =
        levelData.time;


    const text =
        document.getElementById("typingText");


    const input =
        document.getElementById("typingInput");


    if (!text || !input) {
        return;
    }


    text.innerText =
        "Click Start Test to begin!";


    input.value = "";

    input.disabled = true;


    document.getElementById("time")
        .innerText =
        levelData.time;


    document.getElementById("wpm")
        .innerText =
        "0";


    document.getElementById("accuracy")
        .innerText =
        "100";


    document.getElementById("typingResult")
        .innerText =
        "";


    const submitBtn =
        document.getElementById("submitBtn");


    if (submitBtn) {

        submitBtn.style.display =
            "none";

    }
}


/* =========================================================
   LIVE TYPING INPUT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const input =
        document.getElementById("typingInput");


    if (input) {

        input.addEventListener(
            "input",
            function () {

                if (!typingStarted) {
                    return;
                }

                updateTypingStats();

            }
        );

    }

});


/* =========================================================
   ENTER KEY SUPPORT FOR QUIZ
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Enter") {
        return;
    }


    const answerInput =
        document.getElementById("answer");


    if (answerInput &&
        document.activeElement === answerInput) {

        if (typeof checkAnswer === "function") {

            checkAnswer();

        }

    }

});