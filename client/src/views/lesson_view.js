const PubSub = require('../helpers/pub_sub.js');
const QuizView = require('./quiz_view.js');

const LessonView = function(contentTarget, container) {
  this.contentTarget = contentTarget;
  this.container = container;
}

LessonView.prototype.bindEvents = function(selectedTopic, lessons) {
  this.matchData(selectedTopic, lessons)
};

LessonView.prototype.matchData = function(selectedTopic, lessons) {
  const contentTargetName = selectedTopic.target.value;
  let found = lessons.find(function(lesson) {
    return lesson.topic === contentTargetName;
  });
  this.showFirstInfo(found);
};


// LessonView.prototype.nextButton = function (target, found) {
//   const createButton = document.createElement('button');
//   createButton.textContent = "Next"
//   createButton.addEventListener('click', (event) => {
//     this.clearBox(this.container.id)
//     this.clearBox(this.contentTarget.id)
//
//   }
// };


LessonView.prototype.showFirstInfo = function(found) {
  this.clearBox(this.contentTarget.id);
  this.clearBox(this.container.id);
  const topic = this.createElement('h2', found.topic);
  this.contentTarget.appendChild(topic);
  const info = this.createElement('p', found.content.questions.question1.info);
  this.contentTarget.appendChild(info);
  this.renderQ2Info(this.contentTarget, found)
};


LessonView.prototype.renderQ2Info = function (target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = "Show Part Two"
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    const info = this.createElement('p', found.content.questions.question2.info);
    this.contentTarget.appendChild(info);
    this.renderQ3Info(this.contentTarget, found)
  });
};

LessonView.prototype.renderQ3Info = function (target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = "Show Part Three"
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    const info = this.createElement('p', found.content.questions.question3.info);
    this.contentTarget.appendChild(info);
    this.renderToQuizButton(this.contentTarget, found)
  });
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


LessonView.prototype.renderToQuizButton = function (target, found) {
  const createButton = document.createElement('button');
  createButton.textContent = "Go To Quiz"
  target.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    this.clearBox(this.container.id)
    this.clearBox(this.contentTarget.id)
    const quizView = new QuizView(this.container, this.contentTarget);
    quizView.bindEvents(found);
  })
};

module.exports = LessonView;
