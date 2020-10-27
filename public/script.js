const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionbox = document.getElementById('question-box');
const backBtn = document.getElementById('back-btn')
const questionText = document.getElementById('question');
const answerBtn = document.getElementById('answerBtns');
const result = document.getElementById('result');

// let countRightAnswers = 0; //1. let's count the right answers
// let ramdomQuestions=1;
// let  currentQuestionIndex=1;
// let currentQuestion = 1;


startBtn.addEventListener('click', ChallengeStart);

nextBtn.addEventListener('click', () => {
  document.getElementById('answerBtns');

  currentQuestionIndex++;
  NextChallenge();

  currentQuestion++;
  document.getElementById('current-question').innerHTML = currentQuestion;
})

backBtn.addEventListener('click', backpage);

function backpage() {
  window.location.href = "Discover1"
}

function ChallengeStart() {


  startBtn.classList.add('hide');
  result.classList.add('hide');
  backBtn.classList.add('hide');


  ramdomQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0;
  questionbox.classList.remove('hide');
  NextChallenge();

  currentQuestion = 1;
  document.getElementById('current-question').innerHTML = currentQuestion;

  //3.  reset the counter after the test started 
  countRightAnswers = 0;

  document.getElementById('all-questions2').innerHTML = questions.length;

}


function NextChallenge() {
  resetState();
  showQuestion(ramdomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionText.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerBtn.appendChild(button);
  });
}


function resetState() {
  nextBtn.classList.add('hide');
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerBtn.children).forEach(button => {
    TickOrCross(button, button.dataset.correct);
  })

  if (ramdomQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide');
  } else {
    result.classList.remove('hide');
    questionbox.classList.add('hide');

    startBtn.innerText = 'Repeat';
    startBtn.classList.remove('hide');


    backBtn.innerText = 'Back';
    backBtn.classList.remove('hide');




  }

  //2. if the answer is correct
  if (selectedButton.dataset = correct) {
    countRightAnswers++; //+1
  }

  //5. to show the score inside <span>
  document.getElementById('right-answers').innerHTML = countRightAnswers;
  document.getElementById('answerpct').innerHTML = ((100 * countRightAnswers) / questions.length).toFixed(0);



}


function TickOrCross(element, correct) {
  restart(element)
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong')
  }
}


function restart(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}


const questions = [
  {
    question: 'How to say "health" in Chinese?',
    answers: [
      { text: 'jiàn kāng 健康', correct: true },
      { text: 'shí wù 食物', correct: false },
      { text: 'lì shǐ 历史', correct: false },
      { text: 'xiè xiè 谢谢', correct: false },
    ]
  },

  {
    question: 'How to say "food" in Chinese??',
    answers: [
      { text: 'tiān qì 天气', correct: false },
      { text: 'gù shì 故事', correct: false },
      { text: 'chǎn pǐn 产品', correct: false },
      { text: 'shí wù 食物', correct: true },
    ]
  },

  {
    question: 'How to say "job" in Chinese??',
    answers: [
      { text: 'shù jù 数据', correct: false },
      { text: 'gōng zuò 工作', correct: true },
      { text: 'chǎn pǐn 产品', correct: false },
      { text: 'lì shǐ 历史', correct: false },
    ]
  },

  {
    question: 'How to say "data" in Chinese??',
    answers: [
      { text: 'lì shǐ 历史', correct: false },
      { text: 'xiè xiè 谢谢', correct: false },
      { text: 'gù shì 故事', correct: false },
      { text: 'shù jù 数据', correct: true },
    ]
  },

  {
    question: 'how to say "history" in Chinese??',
    answers: [
      { text: 'tiān qì 天气 ', correct: false },
      { text: 'gōng zuò 工作', correct: true },
      { text: 'lì shǐ 历史', correct: true },
      { text: 'wǎng lù 网路', correct: false },
    ]
  },
  ////////////////////////////////////////////////////////////////////////////////////////
  //japanese question
  // {
  //   question: 'how to say "film" in Japanese??',
  //   answers: [
  //     { text: ' eiga  映画 ', correct: true },
  //     { text: 'shokumotsu 食物', correct: false },
  //     { text: 'Rekishi 歷史', correct: false },
  //     { text: 'kazoku 家族 ', correct: false },
  //   ]
  // },

  // {
  //   question: 'how to say "shokumotsu" in  Japanese??',
  //   answers: [
  //     { text: ' shokumotsu 食物', correct: true },
  //     { text: 'Seihin 製品', correct: false },
  //     { text: 'Rekishi 歷史', correct: false },
  //     { text: 'kazoku 家族 ', correct: false },
  //   ]
  // },

  // {
  //   question: 'how to say "story" in  Japanese??',
  //   answers: [
  //     { text: ' shokumotsu 食物', correct: false},
  //     { text: 'Seihin 製品', correct: false },
  //     { text: 'Rekishi 歷史', correct: false },
  //     { text: 'monogatari 物语' , correct: true},


  //   ]
  // },

  // {
  //   question: 'how to say "health" in  Japanese??',
  //   answers: [
  //     { text: ' shokumotsu 食物', correct: false},
  //     { text: 'Seihin 製品', correct: false },
  //     { text: 'monogatari 物语', correct: false },
  //     { text: 'kenko 健康' , correct: true},


  //   ]
  // },

  // {
  //   question: 'how to say "weather" in  Japanese??',
  //   answers: [
  //     { text: ' shokumotsu 食物', correct: false},
  //     { text: 'Seihin 製品', correct: false },
  //     { text: 'monogatari 物语', correct: false },
  //     { text: 'tenki 天氣' , correct: true},


  //   ]
  // },
]









var times = 60;
var timeDiv = document.getElementById("time");
var timeObj = null;
function timer() {
  if (times == 0) {

    document.getElementById("frm").submit();
    window.clearInterval(timeObj);
    return;
  }
  var t = Math.floor(times / 60) + " min " + times % 60 + " sec "
  timeDiv.innerHTML = t;
  times--;
}
timeObj = window.setInterval(timer, 1000);
