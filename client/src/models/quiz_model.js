const PubSub = require('../helpers/pub_sub.js');
const ResultsView = require('../views/results_view.js');

const QuizModel = function(container, numberOfLessons) {
  this.container = container;
  this.numberOfLessons = numberOfLessons;
};

let correctArray = [];
let incorrectArray = [];

PubSub.subscribe('correctAnswer', (correctAnswers) => {
  correctArray.push(correctAnswers.detail);
});
PubSub.subscribe('incorrectAnswer', (incorrectAnswers) => {
  incorrectArray.push(incorrectAnswers.detail);
});

QuizModel.prototype.bindEvents = function(found) {
  this.collectScoreData(found);
};

QuizModel.prototype.wipeArray = function() {
  correctArray = [];
  incorrectArray = [];
};

QuizModel.prototype.collectScoreData = function(found) {
  scoreCorrect = correctArray.length;
  scoreIncorrect = incorrectArray.length;
  let ammountOfQuestionsAsked = scoreCorrect + scoreIncorrect;
  passToResultsView = new ResultsView(scoreCorrect, scoreIncorrect, found, ammountOfQuestionsAsked, this.numberOfLessons)
  passToResultsView.bindEvents(correctArray, incorrectArray, this.container);
};


module.exports = QuizModel;
