// ============================================
// 🌈 MAAHI KI FUNSHALA
// COMPLETE SCRIPT.JS
// QUIZ + TYPING TEST
// ============================================



// =====================================================
// 🧠 SUBJECT-WISE QUIZ QUESTIONS
// =====================================================

const subjectQuestions = {

    // =================================================
    // 📘 ENGLISH — ONLY GRAMMAR
    // =================================================

    English: [

        {
            question: "Which word is a noun?",
            options: ["Run", "School", "Quickly", "Beautiful"],
            answer: "School"
        },

        {
            question: "Which word is a verb?",
            options: ["Happy", "Jump", "Beautiful", "School"],
            answer: "Jump"
        },

        {
            question: "Which word is an adjective?",
            options: ["Run", "Beautiful", "Quickly", "School"],
            answer: "Beautiful"
        },

        {
            question: "Which word is an adverb?",
            options: ["Quickly", "Beautiful", "School", "Run"],
            answer: "Quickly"
        },

        {
            question: "Choose the correct article: ___ apple",
            options: ["A", "An", "The", "No article"],
            answer: "An"
        },

        {
            question: "Choose the correct article: ___ university",
            options: ["A", "An", "The", "No article"],
            answer: "A"
        },

        {
            question: "What is the plural of 'Child'?",
            options: ["Childs", "Children", "Childes", "Child"],
            answer: "Children"
        },

        {
            question: "What is the past tense of 'Go'?",
            options: ["Goed", "Gone", "Went", "Going"],
            answer: "Went"
        },

        {
            question: "Which punctuation mark is used at the end of a question?",
            options: [".", ",", "?", "!"],
            answer: "?"
        },

        {
            question: "Which sentence is grammatically correct?",
            options: [
                "She go to school.",
                "She goes to school.",
                "She going school.",
                "She gone school."
            ],
            answer: "She goes to school."
        },

        {
            question: "Choose the correct pronoun: Rahul is a boy. ___ is my friend.",
            options: ["She", "It", "He", "They"],
            answer: "He"
        },

        {
            question: "Choose the correct form: They ___ playing.",
            options: ["is", "am", "are", "was"],
            answer: "are"
        },

        {
            question: "Choose the correct form: I ___ a student.",
            options: ["is", "am", "are", "were"],
            answer: "am"
        },

        {
            question: "What is the opposite of 'Hot'?",
            options: ["Warm", "Cold", "Heat", "Hotter"],
            answer: "Cold"
        },

        {
            question: "Which sentence is in the past tense?",
            options: [
                "I play cricket.",
                "I am playing cricket.",
                "I played cricket.",
                "I will play cricket."
            ],
            answer: "I played cricket."
        }

    ],



    // =================================================
    // 🪔 HINDI
    // =================================================

    Hindi: [

        {
            question: "'सुंदर' का विलोम शब्द क्या है?",
            options: ["अच्छा", "कुरूप", "मधुर", "सरल"],
            answer: "कुरूप"
        },

        {
            question: "'जल' का पर्यायवाची शब्द क्या है?",
            options: ["आग", "पानी", "हवा", "धरती"],
            answer: "पानी"
        },

        {
            question: "'लड़का' का स्त्रीलिंग क्या है?",
            options: ["लड़की", "बालक", "बच्चा", "नारी"],
            answer: "लड़की"
        },

        {
            question: "'राम स्कूल जाता है।' इस वाक्य में क्रिया कौन सी है?",
            options: ["राम", "स्कूल", "जाता है", "है"],
            answer: "जाता है"
        },

        {
            question: "'दिन' का विलोम क्या है?",
            options: ["सुबह", "शाम", "रात", "दोपहर"],
            answer: "रात"
        },

        {
            question: "'आकाश' का पर्यायवाची क्या है?",
            options: ["गगन", "जल", "पर्वत", "धरती"],
            answer: "गगन"
        },

        {
            question: "'पुस्तक' का अर्थ क्या है?",
            options: ["किताब", "कलम", "कागज", "विद्यालय"],
            answer: "किताब"
        },

        {
            question: "'मीठा' किस प्रकार का शब्द है?",
            options: ["संज्ञा", "सर्वनाम", "विशेषण", "क्रिया"],
            answer: "विशेषण"
        },

        {
            question: "हिंदी दिवस कब मनाया जाता है?",
            options: [
                "15 अगस्त",
                "26 जनवरी",
                "14 सितंबर",
                "2 अक्टूबर"
            ],
            answer: "14 सितंबर"
        },

        {
            question: "'मैं' किस प्रकार का शब्द है?",
            options: ["संज्ञा", "सर्वनाम", "क्रिया", "विशेषण"],
            answer: "सर्वनाम"
        }

    ],



    // =================================================
    // 🔢 MATHEMATICS
    // =================================================

    Mathematics: [

        {
            question: "What is 5 + 7?",
            options: ["10", "11", "12", "13"],
            answer: "12"
        },

        {
            question: "What is 10 × 5?",
            options: ["40", "50", "60", "55"],
            answer: "50"
        },

        {
            question: "What is 100 ÷ 10?",
            options: ["5", "10", "20", "25"],
            answer: "10"
        },

        {
            question: "What is the square of 5?",
            options: ["10", "15", "20", "25"],
            answer: "25"
        },

        {
            question: "How many sides does a triangle have?",
            options: ["2", "3", "4", "5"],
            answer: "3"
        },

        {
            question: "What is 15 - 8?",
            options: ["5", "6", "7", "8"],
            answer: "7"
        },

        {
            question: "What is half of 20?",
            options: ["5", "10", "15", "20"],
            answer: "10"
        },

        {
            question: "What is 9 × 9?",
            options: ["72", "81", "90", "99"],
            answer: "81"
        },

        {
            question: "How many degrees are there in a right angle?",
            options: ["45°", "60°", "90°", "180°"],
            answer: "90°"
        },

        {
            question: "What is 25% of 100?",
            options: ["10", "20", "25", "50"],
            answer: "25"
        }

    ],



    // =================================================
    // 🔬 SCIENCE
    // =================================================

    Science: {

        Easy: [

            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Jupiter", "Venus"],
                answer: "Mars"
            },

            {
                question: "What gas do humans need to breathe?",
                options: [
                    "Carbon Dioxide",
                    "Oxygen",
                    "Nitrogen",
                    "Hydrogen"
                ],
                answer: "Oxygen"
            },

            {
                question: "How many planets are there in our Solar System?",
                options: ["7", "8", "9", "10"],
                answer: "8"
            },

            {
                question: "Which organ pumps blood through the body?",
                options: ["Brain", "Heart", "Lungs", "Kidney"],
                answer: "Heart"
            },

            {
                question: "What is the main source of energy for Earth?",
                options: ["Moon", "Sun", "Stars", "Wind"],
                answer: "Sun"
            },

            {
                question: "Which part of a plant absorbs water?",
                options: ["Leaf", "Flower", "Root", "Stem"],
                answer: "Root"
            },

            {
                question: "Which is the nearest star to Earth?",
                options: ["Moon", "Sun", "Mars", "Venus"],
                answer: "Sun"
            },

            {
                question: "What do we use to see?",
                options: ["Ears", "Eyes", "Nose", "Hands"],
                answer: "Eyes"
            },

            {
                question: "Which organ helps us to breathe?",
                options: ["Heart", "Lungs", "Brain", "Stomach"],
                answer: "Lungs"
            },

            {
                question: "What do plants need to make food?",
                options: ["Sunlight", "Plastic", "Iron", "Sand"],
                answer: "Sunlight"
            }

        ],


        Medium: [

            {
                question: "Which gas do plants take in during photosynthesis?",
                options: [
                    "Oxygen",
                    "Nitrogen",
                    "Carbon Dioxide",
                    "Hydrogen"
                ],
                answer: "Carbon Dioxide"
            },

            {
                question: "What force pulls objects toward Earth?",
                options: [
                    "Friction",
                    "Gravity",
                    "Magnetism",
                    "Pressure"
                ],
                answer: "Gravity"
            },

            {
                question: "Which organ controls most activities of the body?",
                options: ["Heart", "Brain", "Lungs", "Kidney"],
                answer: "Brain"
            },

            {
                question: "Which vitamin is mainly obtained from sunlight?",
                options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                answer: "Vitamin D"
            },

            {
                question: "Which blood cells help fight infections?",
                options: [
                    "Red blood cells",
                    "White blood cells",
                    "Platelets",
                    "Plasma"
                ],
                answer: "White blood cells"
            },

            {
                question: "Which part of the cell controls its activities?",
                options: ["Cell wall", "Nucleus", "Cytoplasm", "Membrane"],
                answer: "Nucleus"
            },

            {
                question: "Water boils at what temperature at normal pressure?",
                options: ["50°C", "75°C", "100°C", "150°C"],
                answer: "100°C"
            },

            {
                question: "Which planet is closest to the Sun?",
                options: ["Earth", "Venus", "Mercury", "Mars"],
                answer: "Mercury"
            },

            {
                question: "Which organ filters waste from blood?",
                options: ["Heart", "Kidney", "Brain", "Lungs"],
                answer: "Kidney"
            },

            {
                question: "What is H₂O commonly called?",
                options: ["Oxygen", "Water", "Hydrogen", "Salt"],
                answer: "Water"
            }

        ],


        Hard: [

            {
                question: "What is the basic unit of life?",
                options: ["Tissue", "Cell", "Organ", "Atom"],
                answer: "Cell"
            },

            {
                question: "Which process converts light energy into chemical energy in plants?",
                options: [
                    "Respiration",
                    "Photosynthesis",
                    "Digestion",
                    "Transpiration"
                ],
                answer: "Photosynthesis"
            },

            {
                question: "Which part of the brain controls balance and coordination?",
                options: [
                    "Cerebrum",
                    "Cerebellum",
                    "Medulla",
                    "Spinal cord"
                ],
                answer: "Cerebellum"
            },

            {
                question: "Which type of energy is stored in food?",
                options: [
                    "Chemical energy",
                    "Sound energy",
                    "Light energy",
                    "Nuclear energy"
                ],
                answer: "Chemical energy"
            },

            {
                question: "What is the SI unit of force?",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                answer: "Newton"
            },

            {
                question: "Which particle has a negative charge?",
                options: ["Proton", "Neutron", "Electron", "Nucleus"],
                answer: "Electron"
            },

            {
                question: "Which layer protects Earth from most harmful UV radiation?",
                options: [
                    "Ozone layer",
                    "Troposphere",
                    "Core",
                    "Mantle"
                ],
                answer: "Ozone layer"
            },

            {
                question: "What is the chemical symbol for sodium?",
                options: ["So", "Na", "S", "Sd"],
                answer: "Na"
            },

            {
                question: "Which organelle is known as the powerhouse of the cell?",
                options: [
                    "Nucleus",
                    "Mitochondria",
                    "Ribosome",
                    "Vacuole"
                ],
                answer: "Mitochondria"
            },

            {
                question: "What is the SI unit of electric current?",
                options: ["Volt", "Ohm", "Ampere", "Watt"],
                answer: "Ampere"
            }

        ]

    },



    // =================================================
    // 🌍 SOCIAL SCIENCE
    // =================================================

    "Social Science": [

        {
            question: "What is the capital of India?",
            options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
            answer: "New Delhi"
        },

        {
            question: "Who is known as the Father of the Nation in India?",
            options: [
                "Jawaharlal Nehru",
                "Mahatma Gandhi",
                "Sardar Patel",
                "Subhash Chandra Bose"
            ],
            answer: "Mahatma Gandhi"
        },

        {
            question: "How many states are there in India?",
            options: ["26", "27", "28", "29"],
            answer: "28"
        },

        {
            question: "Which is the largest state of India by area?",
            options: [
                "Uttar Pradesh",
                "Rajasthan",
                "Maharashtra",
                "Madhya Pradesh"
            ],
            answer: "Rajasthan"
        },

        {
            question: "Who was the first Prime Minister of India?",
            options: [
                "Mahatma Gandhi",
                "Jawaharlal Nehru",
                "Sardar Patel",
                "Dr. Rajendra Prasad"
            ],
            answer: "Jawaharlal Nehru"
        },

        {
            question: "Which river is one of the major rivers of India?",
            options: ["Ganga", "Nile", "Amazon", "Thames"],
            answer: "Ganga"
        },

        {
            question: "When is Independence Day celebrated in India?",
            options: [
                "26 January",
                "15 August",
                "2 October",
                "14 November"
            ],
            answer: "15 August"
        },

        {
            question: "When is Republic Day celebrated in India?",
            options: [
                "15 August",
                "26 January",
                "2 October",
                "14 November"
            ],
            answer: "26 January"
        },

        {
            question: "Which continent is India located in?",
            options: ["Europe", "Asia", "Africa", "Australia"],
            answer: "Asia"
        },

        {
            question: "Which is the largest ocean in the world?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
            ],
            answer: "Pacific Ocean"
        }

    ],



    // =================================================
    // 📚 GENERAL STUDIES
    // =================================================

    "General Studies": [

        {
            question: "How many days are there in a week?",
            options: ["5", "6", "7", "8"],
            answer: "7"
        },

        {
            question: "How many months are there in a year?",
            options: ["10", "11", "12", "13"],
            answer: "12"
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
            question: "Which is the national animal of India?",
            options: ["Lion", "Tiger", "Elephant", "Peacock"],
            answer: "Tiger"
        },

        {
            question: "Which is the national bird of India?",
            options: ["Sparrow", "Peacock", "Eagle", "Parrot"],
            answer: "Peacock"
        },

        {
            question: "What is the currency of India?",
            options: ["Dollar", "Rupee", "Pound", "Euro"],
            answer: "Rupee"
        },

        {
            question: "How many colors are there in the Indian national flag?",
            options: ["2", "3", "4", "5"],
            answer: "3"
        },

        {
            question: "Which is the largest planet in our Solar System?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Jupiter"
        },

        {
            question: "Which is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            answer: "2"
        },

        {
            question: "Which device is used to type text into a computer?",
            options: ["Monitor", "Keyboard", "Speaker", "Printer"],
            answer: "Keyboard"
        }

    ]

};



// =====================================================
// 🧠 QUIZ VARIABLES
// =====================================================

let quizQuestions = [];

let currentQuestion = 0;

let score = 0;

let selectedSubject = "";

let selectedScienceLevel = "";

const totalQuestions = 10;



// =====================================================
// 🔀 SHUFFLE
// =====================================================

function shuffle(array) {

    let result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        let j = Math.floor(
            Math.random() * (i + 1)
        );

        [result[i], result[j]] =
        [result[j], result[i]];

    }

    return result;
}



// =====================================================
// 📚 SELECT SUBJECT
// =====================================================

function selectSubject(subject, button) {

    selectedSubject = subject;

    selectedScienceLevel = "";

    document
        .querySelectorAll(".subject-btn")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });

    button.classList.add("active");


    // Science levels show only for Science

    let scienceLevels =
        document.getElementById("scienceLevels");

    if (scienceLevels) {

        if (subject === "Science") {

            scienceLevels.style.display = "flex";

        }

        else {

            scienceLevels.style.display = "none";

        }

    }

}



// =====================================================
// 🔬 SELECT SCIENCE LEVEL
// =====================================================

function selectScienceLevel(level, button) {

    selectedScienceLevel = level;

    document
        .querySelectorAll(".science-level-btn")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });

    button.classList.add("active");

}



// =====================================================
// 🚀 START SELECTED QUIZ
// =====================================================

function beginSelectedQuiz() {

    if (selectedSubject === "") {

        alert(
            "Please select a subject first! 📚"
        );

        return;

    }


    // Science needs level

    if (
        selectedSubject === "Science" &&
        selectedScienceLevel === ""
    ) {

        alert(
            "Please select a Science level! 🔬"
        );

        return;

    }


    let subjectData;


    if (selectedSubject === "Science") {

        subjectData =
            subjectQuestions.Science[
                selectedScienceLevel
            ];

    }

    else {

        subjectData =
            subjectQuestions[selectedSubject];

    }


    quizQuestions =
        shuffle(subjectData)
        .slice(0, totalQuestions);


    currentQuestion = 0;

    score = 0;


    document.getElementById(
        "subjectSelection"
    ).style.display = "none";


    document.getElementById(
        "quizArea"
    ).style.display = "block";


    document.getElementById(
        "score"
    ).innerText = "Score: 0";


    showQuestion();

}



// =====================================================
// 📝 SHOW QUESTION
// =====================================================

function showQuestion() {

    let current =
        quizQuestions[currentQuestion];


    if (!current) return;


    document.getElementById(
        "questionNumber"
    ).innerText =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        totalQuestions;


    document.getElementById(
        "question"
    ).innerText =
        current.question;


    let options =
        document.getElementById("options");


    options.innerHTML = "";


    current.options.forEach(
        function(option) {

            let button =
                document.createElement("button");


            button.className = "option";

            button.innerText = option;


            button.onclick = function() {

                checkAnswer(
                    button,
                    option
                );

            };


            options.appendChild(button);

        }
    );


    let nextBtn =
        document.getElementById("nextBtn");


    if (nextBtn) {

        nextBtn.style.display = "none";

    }


    let submitBtn =
        document.getElementById("submitBtn");


    if (submitBtn) {

        submitBtn.style.display = "none";

    }

}



// =====================================================
// ✅ CHECK ANSWER
// =====================================================

function checkAnswer(
    button,
    selectedAnswer
) {

    let current =
        quizQuestions[currentQuestion];


    let allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(
        function(option) {

            option.disabled = true;

        }
    );


    if (
        selectedAnswer ===
        current.answer
    ) {

        button.classList.add("correct");

        score++;

        document.getElementById(
            "score"
        ).innerText =
            "Score: " + score;

    }

    else {

        button.classList.add("wrong");


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


    // Last question

    if (
        currentQuestion ===
        totalQuestions - 1
    ) {

        showSubmitButton();

    }

    else {

        document.getElementById(
            "nextBtn"
        ).style.display =
            "inline-block";

    }

}



// =====================================================
// ➡️ NEXT QUESTION
// =====================================================

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion <
        totalQuestions
    ) {

        showQuestion();

    }

}



// =====================================================
// ✅ SUBMIT BUTTON
// =====================================================

function showSubmitButton() {

    let submitBtn =
        document.getElementById("submitBtn");


    if (!submitBtn) {

        submitBtn =
            document.createElement("button");

        submitBtn.id = "submitBtn";

        submitBtn.className = "btn";

        submitBtn.innerText =
            "✅ Submit Quiz";

        submitBtn.onclick =
            submitQuiz;


        document.getElementById(
            "quizArea"
        ).appendChild(submitBtn);

    }


    submitBtn.style.display =
        "inline-block";

}



// =====================================================
// 📤 SUBMIT QUIZ
// =====================================================

function submitQuiz() {

    showResult();

}



// =====================================================
// 🏆 RESULT
// =====================================================

function showResult() {

    let percentage =
        Math.round(
            (score / totalQuestions) * 100
        );


    let levelText = "";


    if (
        selectedSubject === "Science" &&
        selectedScienceLevel !== ""
    ) {

        levelText =
            `<p>🔬 Level: ${selectedScienceLevel}</p>`;

    }


    document.getElementById(
        "quizBox"
    ).innerHTML = `

        <div class="result">

            <h2>🎉 Quiz Completed!</h2>

            <h2>${selectedSubject}</h2>

            ${levelText}

            <h2>
                ${score} / ${totalQuestions}
            </h2>

            <p>
                Your Score: ${percentage}%
            </p>

            <br>

            <button
                class="btn"
                onclick="location.reload()">

                🔄 Play Again

            </button>

        </div>

    `;

}



// =====================================================
// ⌨️ TYPING TEST
// =====================================================

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


let typingTimer = null;

let typingTime = 30;

let selectedLevel = 1;

let totalLevelTime = 30;

let typingStarted = false;



// =====================================================
// ⌨️ SELECT TYPING LEVEL
// =====================================================

function selectLevel(level) {

    clearInterval(typingTimer);

    typingStarted = false;

    selectedLevel = level;


    let data =
        typingLevels[level];


    totalLevelTime =
        data.time;

    typingTime =
        data.time;


    let levelName =
        document.getElementById("levelName");

    if (levelName)
        levelName.innerText =
            data.name;


    let time =
        document.getElementById("time");

    if (time)
        time.innerText =
            data.time;


    let wpm =
        document.getElementById("wpm");

    if (wpm)
        wpm.innerText = "0";


    let accuracy =
        document.getElementById("accuracy");

    if (accuracy)
        accuracy.innerText = "100";


    let text =
        document.getElementById("typingText");

    if (text)
        text.innerText =
            "Click Start Test to begin!";


    let input =
        document.getElementById("typingInput");

    if (input) {

        input.value = "";

        input.disabled = true;

    }


    let result =
        document.getElementById("typingResult");

    if (result)
        result.innerHTML = "";


    hideSubmitButton();


    document
        .querySelectorAll(".level-btn")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });


    if (
        document.querySelectorAll(
            ".level-btn"
        )[level - 1]
    ) {

        document.querySelectorAll(
            ".level-btn"
        )[level - 1]
            .classList.add("active");

    }

}



// =====================================================
// 🚀 START TYPING TEST
// =====================================================

function startTypingTest() {

    clearInterval(typingTimer);

    typingStarted = true;


    let data =
        typingLevels[selectedLevel];


    totalLevelTime =
        data.time;

    typingTime =
        data.time;


    document.getElementById("time")
        .innerText =
        typingTime;


    document.getElementById("wpm")
        .innerText = "0";


    document.getElementById("accuracy")
        .innerText = "100";


    document.getElementById("typingResult")
        .innerHTML = "";


    let randomIndex =
        Math.floor(
            Math.random() *
            data.texts.length
        );


    document.getElementById(
        "typingText"
    ).innerText =
        data.texts[randomIndex];


    let input =
        document.getElementById(
            "typingInput"
        );


    input.value = "";

    input.disabled = false;

    input.focus();


    let submitBtn =
        document.getElementById(
            "submitBtn"
        );


    if (submitBtn)
        submitBtn.style.display =
            "inline-block";


    typingTimer =
        setInterval(function() {

            typingTime--;


            document.getElementById(
                "time"
            ).innerText =
                typingTime;


            calculateTyping();


            if (typingTime <= 0) {

                finishTypingTest();

            }

        }, 1000);

}



// =====================================================
// 📊 CALCULATE TYPING
// =====================================================

function calculateTyping() {

    let input =
        document.getElementById(
            "typingInput"
        );


    if (!input) return;


    let typedText =
        input.value;


    let originalText =
        document.getElementById(
            "typingText"
        ).innerText;


    if (typedText.length === 0) {

        document.getElementById(
            "wpm"
        ).innerText = "0";

        return;

    }


    let words =
        typedText
            .trim()
            .split(/\s+/)
            .filter(function(word) {

                return word.length > 0;

            });


    let elapsedSeconds =
        totalLevelTime -
        typingTime;


    if (elapsedSeconds <= 0)
        return;


    let minutes =
        elapsedSeconds / 60;


    let wpm =
        Math.round(
            words.length / minutes
        );


    document.getElementById(
        "wpm"
    ).innerText = wpm;


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



// =====================================================
// ✅ SUBMIT TYPING TEST
// =====================================================

function submitTypingTest() {

    if (!typingStarted)
        return;


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



// =====================================================
// 📊 FINAL TYPING RESULT
// =====================================================

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
        ).innerText = "0";


        document.getElementById(
            "accuracy"
        ).innerText = "0";


        return;

    }


    let words =
        typedText
            .trim()
            .split(/\s+/)
            .filter(function(word) {

                return word.length > 0;

            });


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


    let wpm =
        Math.round(
            words.length / minutes
        );


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
    ).innerText = wpm;


    document.getElementById(
        "accuracy"
    ).innerText =
        accuracy;

}



// =====================================================
// ⏰ TIME UP
// =====================================================

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



// =====================================================
// 🔄 RESET TYPING TEST
// =====================================================

function resetTypingTest() {

    clearInterval(typingTimer);

    typingStarted = false;


    let data =
        typingLevels[selectedLevel];


    typingTime =
        data.time;


    totalLevelTime =
        data.time;


    document.getElementById(
        "time"
    ).innerText =
        data.time;


    document.getElementById(
        "wpm"
    ).innerText = "0";


    document.getElementById(
        "accuracy"
    ).innerText = "100";


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



// =====================================================
// 🙈 HIDE SUBMIT BUTTON
// =====================================================

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