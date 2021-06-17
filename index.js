const quiz = [
  {
    question:"漫画「HELLSING」において、主人公アーカード専用装備「対化物戦闘用13mm拳銃 ジャッカル」を届けたウォルターからその性能の説明を受けたアーカードが放った一言は次の内どれ",
    answers:[
      "想像以上だウォルター",
      "大したものだウォルター",
      "パーフェクトだウォルター",
      "流石だウォルター",
    ],
    correct:"パーフェクトだウォルター"
  }, {
    question:"ゲーム「バイオハザード2」の主人公の一人レオン・S・ケネディは警察学校卒業後にラクーンシティ警察署に配属になったが、配属初日に大遅刻。その理由は次のうちどれ",
    answers:[
      "ゾンビに襲われたから",
      "道に迷ったから",
      "車がエンストしたから",
      "恋人と大喧嘩を経て別れることとなり、自棄酒をあおって眠り込んだため"
    ],
    correct:"恋人と大喧嘩を経て別れることとなり、自棄酒をあおって眠り込んだため"
  }, {
    question:"漫画「ジョジョの奇妙な冒険」第三部の主人公、空条承太郎がDIOに肉の芽を埋め込まれて洗脳されていた花京院に膝を切られて階段で転んだ時の擬音は次の内どれ",
    answers:[
      "ズバッ",
      "グッパオン",
      "ザンっ",
      "サクッ"
    ],
    correct:"グッパオン"
  }
];


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length - 1;
let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

// 問題文・選択肢の書き換えをするコード
const setupQuiz = () =>{
  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

// ボタンクリックで正誤判定
const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else{
    window.alert("不正解！");
  }
  quizIndex++;

  // クイズがまだあるかどうか
  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert(`終了！あなたのスコアは${score}/${quizLength}です。`);
    restart();
  }
}
// 任意のボタンを押したときに関数clickHandler(正誤判定)の処理を行う。
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) =>{
    // クリックされていないボタン番号のとき、関数はスルーされる。
    clickHandler(e);
  });
  handlerIndex++;
}

// リスタートボタン
$button[buttonLength].textContent = "1問目からリスタート";
$button[buttonLength].addEventListener("click", () => {
  restart();
});
  // 1問目のクイズからリスタートおよびスコアのリセット
const restart = () => {
    quizIndex = 0;
    score = 0;
    setupQuiz();
};
