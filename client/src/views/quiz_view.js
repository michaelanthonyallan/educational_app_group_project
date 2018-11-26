PubSub = require('../helpers/pub_sub.js');

QuizView = function(container, contentTarget) {
  this.container = container;
  this.contentTarget = contentTarget;
};


QuizView.prototype.bindEvents = function(found) {
this.q1(found);
};

QuizView.prototype.q1 = function(found){
  const topic = this.createElement('h2', found.topic);
  this.contentTarget.appendChild(topic);
  const q1 = this.createElement('h1', found.content.questions.question1.text);
  this.contentTarget.appendChild(q1);
  this.q1CorrectAnswer(this.contentTarget, found);
  this.q1IncorrectAnswer(this.contentTarget, found);
};

QuizView.prototype.q1CorrectAnswer = function(target, found){
  const createButton = document.createElement('button');
  createButton.textContent = `${found.content.questions.question1.correctAnswer}`;
  target.appendChild(createButton);
};

QuizView.prototype.q1IncorrectAnswer = function(target, found){
  const createButton = document.createElement('button');
  createButton.textContent = `${found.content.questions.question1.incorrectAnswer}`;
  target.appendChild(createButton);
};

QuizView.prototype.q2 = function(found){
  const topic = this.createElement('h2', found.topic);
  this.contentTarget.appendChild(topic);
  const q2 = this.createElement('h1', found.content.questions.question2.text);
  this.contentTarget.appendChild(q2);
  this.q1CorrectAnswer(this.contentTarget, found);
  this.q1IncorrectAnswer(this.contentTarget, found);
};

QuizView.prototype.q2CorrectAnswer = function(target, found){
  const createButton = document.createElement('button');
  createButton.textContent = `${found.content.questions.question2.correctAnswer}`;
  target.appendChild(createButton);
};

QuizView.prototype.q2IncorrectAnswer = function(target, found){
  const createButton = document.createElement('button');
  createButton.textContent = `${found.content.questions.question2.incorrectAnswer}`;
  target.appendChild(createButton);
};

QuizView.prototype.createElement = function(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  element.id = text;
  element.name = text;

  return element;
};


QuizView.prototype.clearBox = function(elementId) {
    let div = document.getElementById(elementId);
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    };
};



module.exports = QuizView;
