const PubSub = require('../helpers/pub_sub.js');
const QuizModel = require('../models/quiz_model.js');
const HomeView = require('./home_view.js');

const ResultsView = function(correctScore, inCorrectScore, found, questionsAsked, numberOfLessons) {
  this.correctScore = correctScore;
  this.inCorrectScore = inCorrectScore;
  this.found = found;
  this.questionsAsked = questionsAsked;
  this.numberOfLessons = numberOfLessons;
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

const percentage = (Math.floor((this.correctScore / this.numberOfLessons) * 100));

  if (percentage > 80) {
    return "great job"
  }
  if (percentage > 50) {
    return "not bad"
  }
  if (percentage < 51) {
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

ResultsView.prototype.resetForNextQuiz = function(homeButton, container) {
  homeButton.addEventListener('click', (event) => {
    this.clearBox(container.id);
    let div = document.getElementById('create-button-invisible');
    div.id = 'create-button'
    let div2 = document.getElementById('dropDownInvisible');
    div2.id = 'dropDown'
    location.reload();

  });
};

ResultsView.prototype.clearBox = function(elementId) {
  let div = document.getElementById(elementId);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  };
};



module.exports = ResultsView;
