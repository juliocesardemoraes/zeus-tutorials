import { data } from "/questions.js";
const questionTitle = document.getElementById("question__title");
const questions__container = document.getElementById("questions__container");
const progress__bar = document.getElementById("progress-value");
console.log(data);
let actualQuestion = 0;
let arrayChosenQuestions = [];
let rightQuestions = [];
const progressIncrement = 100 / data.length;

const renderQuestion = () => {
  questionTitle.innerText = data[actualQuestion].title;
  question__h1.innerText = `Questão ${actualQuestion + 1}`;
  questions__container.innerHTML = "";

  for (let i = 0; i < data[actualQuestion].answers.length; i++) {
    questions__container.innerHTML += `
        <div id="question__${i}" class="question-box br-1" onclick='chooseQuestion("${data[actualQuestion].answers[i]}",${actualQuestion},${i})'>
          <p>
            ${data[actualQuestion].answers[i]}
          </p>
        </div>
    `;
  }
};

const checkAnswers = () => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].correct_answer === arrayChosenQuestions[i]) {
      rightQuestions.push(arrayChosenQuestions[i]);
    }
  }
  console.log("ACERTOU", rightQuestions.length);
};

const nextQuestion = () => {
  if (actualQuestion + 1 > data.length - 1) {
    console.log("arrayChosen", arrayChosenQuestions);
    checkAnswers();
    return;
  }

  console.log(progressIncrement * (actualQuestion + 1));

  actualQuestion++;
  progress__bar.style.width = `${progressIncrement * (actualQuestion + 1)}%`;
  renderQuestion();
};

const giveUp = () => {
  actualQuestion = 0;
  arrayChosenQuestions = [];
};

const chooseQuestion = (chosenQuestion, index, actualPos) => {
  arrayChosenQuestions[index] = chosenQuestion;

  const isAnySelected = document.getElementsByClassName(
    "question-box__selected"
  )[0];

  if (isAnySelected) isAnySelected.classList.remove("question-box__selected");

  console.log(`question__${index}`);
  let chosenQuestionDom = document.getElementById(`question__${actualPos}`);
  console.log("Chosen", chosenQuestionDom);
  chosenQuestionDom.classList.add("question-box__selected");
  console.log("array", arrayChosenQuestions);
};

const renderFirstQuestion = () => {
  renderQuestion();
  console.log(progressIncrement * (actualQuestion + 1));
  progress__bar.style.width = `${progressIncrement * (actualQuestion + 1)}%`;
};

window.nextQuestion = nextQuestion;
window.giveUp = giveUp;
window.renderFirstQuestion = renderFirstQuestion;
window.chooseQuestion = chooseQuestion;
