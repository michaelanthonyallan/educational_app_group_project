const PubSub = require('../helpers/pub_sub.js');
const QuizView = require('../views/quiz_view.js');
const ResultsView = require('../views/results_view.js');

const QuizModel = function(container) {
  this.container = container;
}

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

QuizModel.prototype.collectScoreData = function (found) {
    scoreCorrect = correctArray.length
    scoreIncorrect = incorrectArray.length
    let ammountOfQuestionsAsked = scoreCorrect + scoreIncorrect;
    console.log('ammountOfQuestionsAsked',ammountOfQuestionsAsked);
    passToResultsView = new ResultsView(scoreCorrect, scoreIncorrect, found, ammountOfQuestionsAsked)
    passToResultsView.bindEvents(correctArray, incorrectArray);
};









module.exports = QuizModel;
