const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
// const FormView = require('./views/form_view.js');
// const ListView = require('./views/list_view.js');

const LessonModel = function(url){
  this.url = url;
  this.request = new Request(this.url);
}

LessonModel.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:lesson-submitted', (event) => {
    this.postLesson(event.detail);
  })
};

LessonModel.prototype.postLesson = function (lesson) {
  const request = new Request(this.url);
  request.post(lesson)
    .then((lessons) => {
      PubSub.publish('LessonsModel:data-loaded', lessons);
      console.log('PostLesson sending lesson to DB!');
    })
    .catch(console.error);
};

LessonModel.prototype.getData = function () {
  this.request.get()
  .then((lessons) =>{
    PubSub.publish('LessonsModel:data-loaded', lessons);
  })
  .catch(console.error);
};


module.exports = LessonModel
