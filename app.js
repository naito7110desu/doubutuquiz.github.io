const quiz = [
  {
    question: 'ネコ科で群れを作る動物は次のうちどれ？',
    answers: [ 'トラ', 'チーター', 'ライオン', 'ネコ'],
    correct: 'ライオン'
  }, {
    question: 'シルバーバックと呼ばれるオス１頭と数頭のメスで集団を作るのは次のうちどれ？',
    answers: [ 'ゴリラ', 'チンパンジー', 'サル', 'オランウータン'],
    correct: 'ゴリラ'
  }, {
    question: 'オカピは何科の動物か？',
    answers: [ 'シカ科', 'ウマ科', 'クマ科', 'キリン科'],
    correct: 'キリン科'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
  <a href="xx.htm"><img src="raion.png" width=500 height=500 alt="raion"></a>
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
