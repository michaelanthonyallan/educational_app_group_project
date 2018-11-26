const PubSub = require('../helpers/pub_sub.js');
const QuizModel = require('../models/quiz_model.js');

const ResultsView = function(correctScore, inCorrectScore, found, questionsAsked) {
  this.correctScore = correctScore;
  this.inCorrectScore = inCorrectScore;
  this.found = found;
  this.questionsAsked = questionsAsked;
}

ResultsView.prototype.bindEvents = function (correctArray, incorrectArray) {
   this.displayScore(correctArray, incorrectArray);
};

ResultsView.prototype.displayScore = function (correctArray, incorrectArray) {
    
};







module.exports = ResultsView;
