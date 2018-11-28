const PubSub = require('../helpers/pub_sub.js');
const FormView = require('./form_view.js');
const LessonView = require('./lesson_view.js');
const QuizModel = require('../models/quiz_model');

let view = null;
let createButton = null;

const HomeView = function(container, contentTarget, topOfThePageDiv) {
  this.container = container;
  this.contentTarget = contentTarget;
  this.topOfThePageDiv = topOfThePageDiv;
};

HomeView.prototype.bindEvents = function() {
  this.renderCreateButton(this.topOfThePageDiv);
  this.renderWelcomeMessage();
};

HomeView.prototype.bindEvents2 = function(selectElement) {
  this.renderViewButton(this.topOfThePageDiv, selectElement);
};

HomeView.prototype.renderCreateButton = function(container) {
  createButton = document.createElement('button');
  view = document.createElement('select');
  view.id = "dropDown";
  container.appendChild(view);
  createButton.textContent = "Create"
  createButton.id = 'create-button'
  createButton.class = 'animate'
  container.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    //view.id = 'dropDownInvisible'
    createButton.id = 'create-button-invisible'
    const resetArray = new QuizModel();
    resetArray.wipeArray();
    this.clearBox(this.container.id)
    this.clearBox(this.contentTarget.id)
    const formView = new FormView(this.container);
    formView.bindEvents();
  })
};

HomeView.prototype.renderViewButton = function(container, selectElement) {
  target = selectElement;
  const optionBlank = document.createElement('option');
  optionBlank.textContent = "Select A Topic"
  target.appendChild(optionBlank);

  PubSub.subscribe('LessonsModel:data-loaded', (lessons) => {
    l = lessons.detail

    for (lesson of l) {

      const option = document.createElement('option'); // renders the topic into the pulldown
      option.id = lesson.topic;
      option.textContent = lesson.topic;
      target.appendChild(option);
    };

    view.addEventListener('change', (event) => {
      view.id = 'dropDownInvisible'
      createButton.id = 'create-button-invisible'
      const resetArray = new QuizModel();
      resetArray.wipeArray();
      const lessonView = new LessonView(this.contentTarget, this.container);
      lessonView.bindEvents(event, l); // takes in the event + full dataset
    })
  });
};

HomeView.prototype.renderWelcomeMessage = function () {
  const welcome = document.createElement('h1');
  welcome.id = 'welcome'
  welcome.textContent = 'Welcome to Quiz Creator, click create to generate your own quiz. Or have a go at existing quizzes' ;
  this.contentTarget.appendChild(welcome);
};

HomeView.prototype.clearBox = function(elementId) {
  let div = document.getElementById(elementId);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  };
};


module.exports = HomeView;
