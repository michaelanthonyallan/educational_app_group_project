const PubSub = require('../helpers/pub_sub.js');
const QuizView = require('./quiz_view.js');

const TopicView = function(contentTarget, container){
 this.contentTarget = contentTarget;
 this.container = container;
};

TopicView.prototype.renderInfo = function (found) {
  const topic = this.createElement('h1');
  this.contentTarget.appendChild(topic)
  const info = this.createElement('p');
  this.contentTarget.appendChild(info);
};

module.exports = TopicView;
