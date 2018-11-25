const PubSub = require('../helpers/pub_sub.js');
const FormView = require('./form_view.js');
const LessonView = require('./lesson_view.js');
const LessonModel = require('../models/lesson_model.js');

let view = null;

const HomeView = function(container, contentTarget, topOfThePageDiv) {
  this.container = container;
  this.contentTarget = contentTarget;
  this.topOfThePageDiv = topOfThePageDiv;
};

HomeView.prototype.bindEvents = function() {
  this.renderCreateButton(this.container);
};

HomeView.prototype.bindEvents2 = function(selectElement) {
  this.renderViewButton(this.container, selectElement);
};

HomeView.prototype.renderCreateButton = function(container) {
  const createButton = document.createElement('button');
  view = document.createElement('select');
  view.id = "dropDown";
  container.appendChild(view);
  createButton.textContent = "Create"
  container.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    this.clearBox(this.container.id)
    this.clearBox(this.contentTarget.id)
    const formView = new FormView(this.container);
    formView.bindEvents();
  })
};

HomeView.prototype.renderViewButton = function(container, selectElement) {
  target = selectElement;
  const optionBlank = document.createElement('option');
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
      const lessonView = new LessonView(this.contentTarget, this.container);
      lessonView.bindEvents(event, l);  // takes in the event + full dataset
    })
  });
};

HomeView.prototype.clearBox = function(elementId) {
    let div = document.getElementById(elementId);
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    };
};


module.exports = HomeView;
