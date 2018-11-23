const PubSub = require('../helpers/pub_sub.js');
const FormView = require('./form_view.js');
const LessonView = require('./lesson_view.js');


const HomeView = function(container, contentTarget) {
  this.container = container;
  this.contentTarget = contentTarget;
};


HomeView.prototype.bindEvents = function() {
  this.renderCreateButton(this.container);
  this.renderViewButton(this.container);
};


HomeView.prototype.renderCreateButton = function(container) {
  const createButton = document.createElement('button');
  createButton.textContent = "Create"
  container.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    const formView = new FormView(this.container);
    formView.bindEvents();
  })
};

HomeView.prototype.renderViewButton = function(container) {
  const viewButton = document.createElement('button');
  viewButton.textContent = "View"
  container.appendChild(viewButton);
  viewButton.addEventListener('click', (event) => {
    const lessonView = new LessonView(this.contentTarget);
    lessonView.bindEvents();
  })
};



module.exports = HomeView;
