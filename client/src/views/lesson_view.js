const PubSub = require('../helpers/pub_sub.js');

const LessonView = function(target) {
  this.target = target;
}

LessonView.prototype.bindEvents = function(selectedTopic, lessons) {
  this.matchData(selectedTopic, lessons)
};

LessonView.prototype.matchData = function(selectedTopic, lessons) {

  const targetName = selectedTopic.target.value;

    let found = lessons.find(function(lesson) {
      return lesson.topic === targetName;
    });

    this.showData(found);
};

LessonView.prototype.showData = function(found) {
console.log(found.content.questions.question1.info);

    const title = this.createElement('h2', found.topic);
    this.target.appendChild(title);

    const info = this.createElement('h2', found.content.questions.question1.info);
    this.target.appendChild(info);
};

LessonView.prototype.createElement = function(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = "Topic: " + text;
  element.id = text;
  element.name = text;

  return element;
};









module.exports = LessonView;
