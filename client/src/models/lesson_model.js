const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const LessonModel = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
}

LessonModel.prototype.bindEvents = function () {

};

LessonModel.prototype.getData = function () {
  this.request.get()
  .then((lessons) =>{
    PubSub.publish('LessonsModel:data-loaded', lessons);
  })
  .catch(console.error);
};



module.exports = LessonModel
