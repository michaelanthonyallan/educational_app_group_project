const PubSub = require('../helpers/pub_sub.js');
const NoOfQuestionsModel = require('../models/noOfQuestions_model.js');
const FormView = require('./form_view.js');


const NoOfQuestions = function(container) {
  this.container = container
};

NoOfQuestions.prototype.questionDropDown = function() {
  const contentTargetDiv = document.querySelector('#content');
  const questionNumber = document.createElement('h1');
  questionNumber.id = 'questionNumber'
  questionNumber.textContent = 'How many questions would you like to ask';
  contentTargetDiv.appendChild(questionNumber);
  const questionNumberDropDown = document.createElement("select");
  questionNumberDropDown.textContent = "Select Number Of Questions";
  const optionBlank = document.createElement("option");
  optionBlank.textContent = "Click here, and pick a number";
  contentTargetDiv.appendChild(optionBlank);
  const questionNumberDropDownOption1 = document.createElement("option");
  const questionNumberDropDownOption2 = document.createElement("option");
  const questionNumberDropDownOption3 = document.createElement("option");
  const questionNumberDropDownOption4 = document.createElement("option");
  questionNumberDropDownOption1.textContent = 3;
  questionNumberDropDownOption2.textContent = 4;
  questionNumberDropDownOption3.textContent = 5;
  questionNumberDropDownOption4.textContent = 10;
  questionNumberDropDownOption1.id = "3";
  questionNumberDropDownOption2.id = "4";
  questionNumberDropDownOption3.id = "5";
  questionNumberDropDownOption4.id = "10";
  contentTargetDiv.appendChild(questionNumberDropDown);
  questionNumberDropDown.appendChild(optionBlank);
  questionNumberDropDown.appendChild(questionNumberDropDownOption1);
  questionNumberDropDown.appendChild(questionNumberDropDownOption2);
  questionNumberDropDown.appendChild(questionNumberDropDownOption3);
  questionNumberDropDown.appendChild(questionNumberDropDownOption4);

  questionNumberDropDown.addEventListener('change', (event) => {
    const noOfQuestionsModel = new NoOfQuestionsModel(this.container);
    noOfQuestionsModel.calculate(event);
  });

   this.onClick(contentTargetDiv)
};

NoOfQuestions.prototype.onClick = function(contentTargetDiv) {
    this.launchForm(contentTargetDiv);
};

NoOfQuestions.prototype.launchForm = function(contentTargetDiv) {
  const formView = new FormView(this.container);
  PubSub.subscribe('numberSelected', (numberSelected) => {
    formView.bindEvents(numberSelected.detail.numberOfQuestions);
    this.clearBox(contentTargetDiv.id);
  });
};

NoOfQuestions.prototype.clearBox = function(elementId) {
  let div = document.getElementById(elementId);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  };
};




module.exports = NoOfQuestions;
