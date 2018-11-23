const PubSub = require('../helpers/pub_sub.js');
//const FormView = require('./form_view.js');

const LessonView = function(target){
  this.target = target;
}

PubSub.subscribe('LessonsModel:data-loaded', (lessons) => {
     l = lessons.detail
});


LessonView.prototype.bindEvents = function () {
   this.showData(l[0])
};

LessonView.prototype.showData = function (lessons) {
     const title = this.createElement('h2', lessons.Topic);
     this.target.appendChild(title);
};

LessonView.prototype.createElement = function(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = "Topic: " + text;
  element.id = text;
  element.name = text;

  return element;
};









module.exports = LessonView;
