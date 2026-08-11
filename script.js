/* =========================================
   AI ROBO TEACHER
   script.js
========================================= */


/* =========================================
   QUIZ QUESTIONS
========================================= */

const quizData = {

  "বাংলা": [

    {
      question: "‘বিদ্রোহী’ কবিতার কবি কে?",
      options: [
        "কাজী নজরুল ইসলাম",
        "রবীন্দ্রনাথ ঠাকুর",
        "জীবনানন্দ দাশ",
        "জসীমউদ্দীন"
      ],
      answer: 0
    },

    {
      question: "‘সোনার তরী’ কাব্যগ্রন্থের রচয়িতা কে?",
      options: [
        "রবীন্দ্রনাথ ঠাকুর",
        "কাজী নজরুল ইসলাম",
        "সুকান্ত ভট্টাচার্য",
        "জসীমউদ্দীন"
      ],
      answer: 0
    },

    {
      question: "‘সুখ’-এর বিপরীত শব্দ কী?",
      options: [
        "আনন্দ",
        "দুঃখ",
        "হাসি",
        "শান্তি"
      ],
      answer: 1
    },

    {
      question: "‘আমি’ কোন পদ?",
      options: [
        "বিশেষ্য",
        "সর্বনাম",
        "বিশেষণ",
        "ক্রিয়া"
      ],
      answer: 1
    },

    {
      question: "‘সুন্দর’ কোন পদ?",
      options: [
        "বিশেষ্য",
        "বিশেষণ",
        "সর্বনাম",
        "ক্রিয়া"
      ],
      answer: 1
    }

  ],


  "ইংরেজি": [

    {
      question: "What is the plural of 'child'?",
      options: [
        "childs",
        "children",
        "childes",
        "childrens"
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
      question: "What is the past tense of 'go'?",
      options: [
        "goed",
        "gone",
        "went",
        "going"
      ],
      answer: 2
    },

    {
      question: "What is the opposite of 'hot'?",
      options: [
        "warm",
        "cold",
        "heat",
        "fire"
      ],
      answer: 1
    },

    {
      question: "Which one is a pronoun?",
      options: [
        "book",
        "beautiful",
        "he",
        "run"
      ],
      answer: 2
    }

  ],


  "গণিত": [

    {
      question: "12 + 18 = ?",
      options: [
        "20",
        "30",
        "32",
        "36"
      ],
      answer: 1
    },

    {
      question: "15 × 4 = ?",
      options: [
        "45",
        "50",
        "60",
        "75"
      ],
      answer: 2
    },

    {
      question: "84 ÷ 7 = ?",
      options: [
        "10",
        "11",
        "12",
        "14"
      ],
      answer: 2
    },

    {
      question: "3/4-এর দশমিক রূপ কোনটি?",
      options: [
        "0.25",
        "0.5",
        "0.75",
        "1.25"
      ],
      answer: 2
    },

    {
      question: "2³ = ?",
      options: [
        "6",
        "8",
        "9",
        "12"
      ],
      answer: 1
    }

  ],


  "বিজ্ঞান": [

    {
      question: "উদ্ভিদ খাদ্য তৈরির প্রক্রিয়ার নাম কী?",
      options: [
        "শ্বসন",
        "সালোকসংশ্লেষণ",
        "পরিপাক",
        "বাষ্পীভবন"
      ],
      answer: 1
    },

    {
      question: "মানবদেহে রক্ত পাম্প করে কোন অঙ্গ?",
      options: [
        "ফুসফুস",
        "হৃদপিণ্ড",
        "কিডনি",
        "যকৃত"
      ],
      answer: 1
    },

    {
      question: "পানির রাসায়নিক সংকেত কী?",
      options: [
        "CO₂",
        "O₂",
        "H₂O",
        "NaCl"
      ],
      answer: 2
    },

    {
      question: "সূর্য একটি কী?",
      options: [
        "গ্রহ",
        "উপগ্রহ",
        "নক্ষত্র",
        "ধূমকেতু"
      ],
      answer: 2
    },

    {
      question: "শব্দ কোন মাধ্যমে চলতে পারে না?",
      options: [
        "বায়ু",
        "পানি",
        "কঠিন পদার্থ",
        "শূন্যস্থান"
      ],
      answer: 3
    }

  ],


  "ICT": [

    {
      question: "CPU-এর পূর্ণরূপ কী?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Control Processing User"
      ],
      answer: 0
    },

    {
      question: "কম্পিউটারের মস্তিষ্ক বলা হয় কাকে?",
      options: [
        "মনিটর",
        "CPU",
        "কীবোর্ড",
        "প্রিন্টার"
      ],
      answer: 1
    },

    {
      question: "WWW-এর পূর্ণরূপ কী?",
      options: [
        "World Wide Web",
        "World Web Window",
        "Wide World Wire",
        "Web World Work"
      ],
      answer: 0
    },

    {
      question: "কীবোর্ড কোন ধরনের ডিভাইস?",
      options: [
        "Input",
        "Output",
        "Storage",
        "Network"
      ],
      answer: 0
    },

    {
      question: "মনিটর কোন ধরনের ডিভাইস?",
      options: [
        "Input",
        "Output",
        "Storage",
        "Processing"
      ],
      answer: 1
    }

  ],


  "বাংলাদেশ ও বিশ্বপরিচয়": [

    {
      question: "বাংলাদেশের রাজধানী কী?",
      options: [
        "চট্টগ্রাম",
        "ঢাকা",
        "খুলনা",
        "রাজশাহী"
      ],
      answer: 1
    },

    {
      question: "বাংলাদেশের জাতীয় ফুল কী?",
      options: [
        "গোলাপ",
        "শাপলা",
        "জবা",
        "বেলি"
      ],
      answer: 1
    },

    {
      question: "বাংলাদেশের স্বাধীনতা দিবস কবে?",
      options: [
        "২১ ফেব্রুয়ারি",
        "২৬ মার্চ",
        "১৬ ডিসেম্বর",
        "১৪ এপ্রিল"
      ],
      answer: 1
    },

    {
      question: "বিজয় দিবস কবে?",
      options: [
        "২৬ মার্চ",
        "২১ ফেব্রুয়ারি",
        "১৬ ডিসেম্বর",
        "১৫ আগস্ট"
      ],
      answer: 2
    },

    {
      question: "বাংলাদেশের জাতীয় কবি কে?",
      options: [
        "রবীন্দ্রনাথ ঠাকুর",
        "কাজী নজরুল ইসলাম",
        "জসীমউদ্দীন",
        "সুকান্ত ভট্টাচার্য"
      ],
      answer: 1
    }

  ]

};


/* =========================================
   VARIABLES
========================================= */

let selectedSubject = "";

let questions = [];

let currentQuestion = 0;

let score = 0;

let quizLocked = false;


/* =========================================
   SUBJECT SELECT
========================================= */

function selectSubject(subject) {

  selectedSubject = subject;

  document.getElementById("selectedSubject").innerText =
    subject;

  document.getElementById("home")
    .classList.add("hidden");

  document.getElementById("setup")
    .classList.remove("hidden");

}


/* =========================================
   GO HOME
========================================= */

function goHome() {

  document.getElementById("home")
    .classList.remove("hidden");

  document.getElementById("setup")
    .classList.add("hidden");

  document.getElementById("quiz")
    .classList.add("hidden");

  document.getElementById("result")
    .classList.add("hidden");

}


/* =========================================
   SHUFFLE
========================================= */

function shuffle(array) {

  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [
      array[i],
      array[j]
    ] =
    [
      array[j],
      array[i]
    ];

  }

  return array;

}


/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

  const count =
    Number(
      document.getElementById(
        "questionCount"
      ).value
    );


  let bank =
    quizData[selectedSubject];


  /*
    Random প্রশ্ন
  */

  bank =
    shuffle([...bank]);


  /*
    যতগুলো প্রশ্ন নির্বাচন করা হয়েছে
  */

  questions =
    bank.slice(
      0,
      Math.min(count, bank.length)
    );


  currentQuestion = 0;

  score = 0;

  quizLocked = false;


  document.getElementById("setup")
    .classList.add("hidden");

  document.getElementById("quiz")
    .classList.remove("hidden");


  showQuestion();

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

  quizLocked = false;


  const q =
    questions[currentQuestion];


  document.getElementById(
    "questionNumber"
  ).innerText =
    `প্রশ্ন ${currentQuestion + 1} / ${questions.length}`;


  document.getElementById(
    "score"
  ).innerText =
    `Score: ${score}`;


  document.getElementById(
    "question"
  ).innerText =
    q.question;


  document.getElementById(
    "feedback"
  ).innerText = "";


  /*
    Progress
  */

  const progress =
    (
      currentQuestion /
      questions.length
    ) * 100;


  document.getElementById(
    "progressBar"
  ).style.width =
    progress + "%";


  /*
    Options
  */

  const optionsBox =
    document.getElementById(
      "options"
    );


  optionsBox.innerHTML = "";


  q.options.forEach(
    (option, index) => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "option";


      button.innerText =
        `${String.fromCharCode(65 + index)}. ${option}`;


      button.onclick =
        function () {

          checkAnswer(
            index,
            button
          );

        };


      optionsBox.appendChild(
        button
      );

    }
  );

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(
  selected,
  button
) {

  if (quizLocked)
    return;


  quizLocked = true;


  const q =
    questions[currentQuestion];


  const buttons =
    document.querySelectorAll(
      ".option"
    );


  buttons.forEach(
    btn => btn.disabled = true
  );


  if (
    selected === q.answer
  ) {

    score++;


    button.classList.add(
      "correct"
    );


    document.getElementById(
      "feedback"
    ).innerText =
      "✅ সঠিক উত্তর! খুব ভালো!";


    speak(
      "সঠিক উত্তর! খুব ভালো!"
    );

  }

  else {

    button.classList.add(
      "wrong"
    );


    buttons[
      q.answer
    ].classList.add(
      "correct"
    );


    document.getElementById(
      "feedback"
    ).innerText =
      `❌ ভুল। সঠিক উত্তর: ${q.options[q.answer]}`;


    speak(
      "উত্তরটি সঠিক নয়।"
    );

  }


  /*
    পরের প্রশ্ন
  */

  setTimeout(
    () => {

      currentQuestion++;


      if (
        currentQuestion <
        questions.length
      ) {

        showQuestion();

      }

      else {

        finishQuiz();

      }

    },
    900
  );

}


/* =========================================
   FINISH QUIZ
========================================= */

function finishQuiz() {

  document.getElementById(
    "quiz"
  ).classList.add("hidden");


  document.getElementById(
    "result"
  ).classList.remove("hidden");


  const percentage =
    Math.round(
      (score / questions.length) *
      100
    );


  document.getElementById(
    "percentage"
  ).innerText =
    percentage + "%";


  document.getElementById(
    "resultText"
  ).innerText =
    `সঠিক উত্তর: ${score}টি
     • ভুল উত্তর: ${questions.length - score}টি
     • মোট প্রশ্ন: ${questions.length}টি`;


  if (percentage >= 80) {

    speak(
      "দারুণ! তুমি অসাধারণ ফলাফল করেছো!"
    );

  }

  else if (percentage >= 50) {

    speak(
      "খুব ভালো! আরও একটু অনুশীলন করো।"
    );

  }

  else {

    speak(
      "চেষ্টা চালিয়ে যাও। তুমি আরও ভালো করতে পারবে।"
    );

  }

}


/* =========================================
   RESTART
========================================= */

function restartQuiz() {

  document.getElementById(
    "result"
  ).classList.add("hidden");

  document.getElementById(
    "quiz"
  ).classList.remove("hidden");


  startQuiz();

}


/* =========================================
   ROBOT VOICE
========================================= */

function speak(text) {

  if (
    !("speechSynthesis" in window)
  ) {

    return;

  }


  speechSynthesis.cancel();


  const voice =
    new SpeechSynthesisUtterance(
      text
    );


  voice.lang =
    "bn-BD";


  voice.rate =
    0.9;


  voice.pitch =
    1;


  voice.volume =
    1;


  const voices =
    speechSynthesis.getVoices();


  const banglaVoice =
    voices.find(
      v =>
        v.lang &&
        v.lang
          .toLowerCase()
          .startsWith("bn")
    );


  if (banglaVoice) {

    voice.voice =
      banglaVoice;

  }


  speechSynthesis.speak(
    voice
  );

}


/* =========================================
   LOAD VOICES
========================================= */

if (
  "speechSynthesis" in window
) {

  speechSynthesis.onvoiceschanged =
    function () {

      speechSynthesis
        .getVoices();

    };

        }
