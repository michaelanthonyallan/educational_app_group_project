const PubSub = require('../helpers/pub_sub.js');
const QuizModel = require('../models/quiz_model.js');

QuizView = function(container, contentTarget) {
  this.container = container;
  this.contentTarget = contentTarget;
};

QuizView.prototype.bindEvents = function(found) {
  this.q1(found);
};

let counter = 0;

QuizView.prototype.q1 = function(found) {

  let lessonNumber = counter + 1;
  let numberOfLessons = found.content.questions.length;

  if (counter === numberOfLessons) {
    this.clearBox(this.contentTarget.id);
    this.clearBox(this.container.id);
    this.endOfQuiz(this.contentTarget, found, numberOfLessons);
  }

  if (counter !== numberOfLessons) {

    const q1 = this.createElement('h1', found.content.questions[counter].question.text);
    this.contentTarget.appendChild(q1);

    const createButton1 = document.createElement('button');
    createButton1.textContent = found.content.questions[counter].question.correctAnswer;
    this.contentTarget.appendChild(createButton1);

    const createButton2 = document.createElement('button');
    createButton2.textContent = found.content.questions[counter].question.incorrectAnswer;
    this.contentTarget.appendChild(createButton2);

    this.q1CorrectAnswer(createButton1, found, numberOfLessons);
    this.q1IncorrectAnswer(createButton2, found, numberOfLessons);
  };
};

QuizView.prototype.q1CorrectAnswer = function(createButton1, found, numberOfLessons) {
  createButton1.addEventListener('click', (event) => {
    PubSub.publish('correctAnswer', found.content.questions[counter].question.text)
    if (counter !== numberOfLessons) {
      this.clearBox(this.contentTarget.id);
      this.clearBox(this.container.id);
      counter += 1;
      this.q1(found);
    }
  });
};

QuizView.prototype.q1IncorrectAnswer = function(createButton2, found, numberOfLessons) {
  createButton2.addEventListener('click', (event) => {
    PubSub.publish('incorrectAnswer', found.content.questions[counter].question.text)
    if (counter !== numberOfLessons) {
      this.clearBox(this.contentTarget.id);
      this.clearBox(this.container.id);
      counter += 1;
      this.q1(found);
    }
  });
};

QuizView.prototype.endOfQuiz = function(target, found, numberOfLessons) {
  const topic = this.createElement('h2', "Quiz Completed you scored");
  this.contentTarget.appendChild(topic);
  const quiz_model = new QuizModel(target, numberOfLessons);
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
