const PubSub = require('../helpers/pub_sub.js');
const QuizModel = require('../models/quiz_model.js');

const ResultsView = function(correctScore, inCorrectScore, found, questionsAsked) {
  this.correctScore = correctScore;
  this.inCorrectScore = inCorrectScore;
  this.found = found;
  this.questionsAsked = questionsAsked;
}

ResultsView.prototype.bindEvents = function(correctArray, incorrectArray, container) {
  this.displayScore(correctArray, incorrectArray, container);
};


ResultsView.prototype.displayScore = function(correctArray, incorrectArray, container) {
  const result = document.createElement('h1');
  result.textContent = this.correctScore + ' out of ' + this.questionsAsked + ' ' + this.calculateString();
  container.appendChild(result);
  this.backHome(container);
};


ResultsView.prototype.calculateString = function() {
  if (this.correctScore === 3) {
    return "great job"
  }
  if (this.correctScore === 2) {
    return "not bad"
  }
  if (this.correctScore === 1 || this.correctScore === 0) {
    return "better luck next time"
  }
};

ResultsView.prototype.backHome = function(container) {
  const homeButton = document.createElement('button');
  homeButton.textContent = "Home";
  homeButton.id = "Home";
  container.appendChild(homeButton);
  this.resetForNextQuiz(homeButton, container);
};


ResultsView.prototype.resetForNextQuiz = function (homeButton, container) {
  homeButton.addEventListener('click', (event) => {
    this.clearBox(container.id);
  });
};

ResultsView.prototype.clearBox = function(elementId) {
  let div = document.getElementById(elementId);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  };
};


module.exports = ResultsView;
