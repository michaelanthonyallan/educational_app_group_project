const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const NoOfQuestionsModel = function(container) {
  this.container = container;
}

NoOfQuestionsModel.prototype.calculate = function(event) {
  const selectedFromDropdown = {
    numberOfQuestions: event.target.value
  };
  PubSub.publish('numberSelected', selectedFromDropdown);
};



module.exports = NoOfQuestionsModel;
