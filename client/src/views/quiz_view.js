const PubSub = require('../helpers/pub_sub.js');
const QuizModel = require('../models/quiz_model.js');

QuizView = function(container, contentTarget) {
  this.container = container;
  this.contentTarget = contentTarget;
};

QuizView.prototype.bindEvents = function(found) {
  this.q1(found);
};

QuizView.prototype.q1 = function(found) {
  const topic = this.createElement('h2', found.topic);
  this.contentTarget.appendChild(topic);
  const q1 = this.createElement('h1', found.content.questions[0].question1.text);
  this.contentTarget.appendChild(q1);
  this.q1CorrectAnswer(this.contentTarget, found);
  this.q1IncorrectAnswer(this.contentTarget, found);
};

QuizView.prototype.q1CorrectAnswer = function(target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = 'question 1 correct button';
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    PubSub.publish('correctAnswer', found.content.questions[0].question1.text)
    this.clearBox(this.contentTarget.id);
    this.clearBox(this.container.id);
    this.q2(target, found);
  });
};

QuizView.prototype.q1IncorrectAnswer = function(target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = 'question 1 incorrect button';
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    PubSub.publish('incorrectAnswer', found.content.questions[0].question1.text)
    this.clearBox(this.contentTarget.id);
    this.clearBox(this.container.id);
    this.q2(target, found);
  });
};

QuizView.prototype.q2 = function(target, found) {
  const q2 = this.createElement('h1', found.content.questions[1].question2.text);
  this.contentTarget.appendChild(q2);
  this.q2CorrectAnswer(this.contentTarget, found);
  this.q2IncorrectAnswer(this.contentTarget, found);
};

QuizView.prototype.q2CorrectAnswer = function(target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = "question 2 correct button";
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    PubSub.publish('correctAnswer', found.content.questions[1].question2.text)
    this.clearBox(this.contentTarget.id);
    this.clearBox(this.container.id);
    this.q3(target, found);
  });
};

QuizView.prototype.q2IncorrectAnswer = function(target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = "question 2 incorrect button";
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    PubSub.publish('incorrectAnswer', found.content.questions[1].question2.text)
    this.clearBox(this.contentTarget.id);
    this.clearBox(this.container.id);
    this.q3(target, found);
  });
};

QuizView.prototype.q3 = function(target, found) {
  const q2 = this.createElement('h1', found.content.questions[2].question3.text);
  this.contentTarget.appendChild(q2);
  this.q3CorrectAnswer(this.contentTarget, found);
  this.q3IncorrectAnswer(this.contentTarget, found);
};

QuizView.prototype.q3CorrectAnswer = function(target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = "question 3 correct button";
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    PubSub.publish('correctAnswer', found.content.questions[2].question3.text)
    this.clearBox(this.contentTarget.id);
    this.clearBox(this.container.id);
    this.endOfQuiz(target, found);
  });
};

QuizView.prototype.q3IncorrectAnswer = function(target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = "question 3 incorrect button";
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    PubSub.publish('incorrectAnswer', found.content.questions[2].question3.text)
    this.clearBox(this.contentTarget.id);
    this.clearBox(this.container.id);
    this.endOfQuiz(target, found);
  });
};

QuizView.prototype.endOfQuiz = function(target, found) {
  const topic = this.createElement('h2', "Quiz Completed you scored");
  this.contentTarget.appendChild(topic);
  const quiz_model = new QuizModel(target);
  quiz_model.bindEvents(found)
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
