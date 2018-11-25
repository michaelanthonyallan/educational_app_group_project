PubSub = require('../helpers/pub_sub.js');

QuizView = function(container, contentTarget) {
  this.container = container;
  this.contentTarget = contentTarget;
};


QuizView.prototype.bindEvents = function(found) {
  this.createQuiz(found);
};

QuizView.prototype.createQuiz = function(found) {
  this.showData(found);
};

QuizView.prototype.showData = function(found) {

  const question1 = this.createElement('h2', found.content.questions.question1.text);
  this.contentTarget.appendChild(question1);

  const answer1 = this.renderFirstAnswerButton(this.contentTarget, found);
  const answer2 = this.renderSecondAnswerButton(this.contentTarget, found);

 this.renderNextButton(this.contentTarget, found);
};

QuizView.prototype.createElement = function(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  element.id = text;
  element.name = text;

  return element;
};

QuizView.prototype.renderFirstAnswerButton = function (target, found){
  const createAnsButton = document.createElement('button');
  createAnsButton.textContent = `${found.content.questions.question1.correctAnswer}`
  target.appendChild(createAnsButton);
  createAnsButton.addEventListener('click', (event) => {
    this.clearBox(this.container.id)
    this.clearBox(this.contentTarget.id)
})
};

QuizView.prototype.renderSecondAnswerButton = function (target, found){
  const createAns2Button = document.createElement('button');
  createAns2Button.textContent = `${found.content.questions.question1.incorrectAnswer}`
  target.appendChild(createAns2Button);
  createAns2Button.addEventListener('click', (event) => {
    this.clearBox(this.container.id)
    this.clearBox(this.contentTarget.id)
})
};

QuizView.prototype.renderNextButton = function (target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = "Next Question"
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    this.clearBox(this.container.id)
    this.clearBox(this.contentTarget.id)
    // const quizView = new QuizView(this.container, this.contentTarget);
    // quizView.bindEvents(found);
  })
};

QuizView.prototype.clearBox = function(elementId) {
    let div = document.getElementById(elementId);
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    };
};



module.exports = QuizView;
