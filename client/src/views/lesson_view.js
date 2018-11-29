const PubSub = require('../helpers/pub_sub.js');
const QuizView = require('./quiz_view.js');

const LessonView = function(contentTarget, container) {
  this.contentTarget = contentTarget;
  this.container = container;
};

LessonView.prototype.bindEvents = function(selectedTopic, lessons) {
  this.matchData(selectedTopic, lessons)
};

LessonView.prototype.matchData = function(selectedTopic, lessons) {

  const contentTargetName = selectedTopic.target.value;

  let found = lessons.find(function(lesson) {
    return lesson.topic === contentTargetName;
  });

  this.renderQ1Info(found);
};

let counter = 0

LessonView.prototype.renderQ1Info = function(found) {
  let lessonNumber = counter + 1;
  let lessonNumberAddOne = lessonNumber + 1;
  let numberOfLessons = found.content.questions.length;

  this.clearBox(this.contentTarget.id);
  this.clearBox(this.container.id);

  const info = this.createElement('p', found.content.questions[counter].question.info);
  this.contentTarget.appendChild(info);
  const createButton = document.createElement('button');

  if (numberOfLessons !== lessonNumber) {
    createButton.textContent = "Show Fact " + lessonNumberAddOne;
    createButton.class = 'animate';
    this.contentTarget.appendChild(createButton);
    this.renderQ2Info(createButton, found, numberOfLessons)
  }
  if (numberOfLessons === lessonNumber) {
    createButton.textContent = "Go To Quiz";
    createButton.class = 'animate';
    this.contentTarget.appendChild(createButton);
    this.renderQ2Info(createButton, found, numberOfLessons)
  }
};

LessonView.prototype.renderQ2Info = function(createButton, found, numberOfLessons) {
  createButton.addEventListener('click', (event) => {
    counter += 1;
    if (counter < numberOfLessons) {
      this.renderQ1Info(found);
    }
    if (counter === numberOfLessons) {
      this.renderQuiz(found);
    }
  });
};

LessonView.prototype.renderQuiz = function(found) {
  this.clearBox(this.container.id)
  this.clearBox(this.contentTarget.id)
  const quizView = new QuizView(this.container, this.contentTarget);
  quizView.bindEvents(found);
};


LessonView.prototype.createElement = function(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  element.id = text;
  element.name = text;

  return element;
};

LessonView.prototype.clearBox = function(elementId) {
  let div = document.getElementById(elementId);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  };
};







module.exports = LessonView;
