const PubSub = require('../helpers/pub_sub.js');

const FormView = function(container) {
  this.container = container;
  this.form = null;
};
FormView.prototype.bindEvents = function() {
  this.createForm();
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event)
  })
};
FormView.prototype.handleSubmit = function(event) {
  event.preventDefault();
  const newLesson = this.createLesson(event);
  PubSub.publish('FormView:lesson-submitted', newLesson);
  event.target.reset();
};
FormView.prototype.createForm = function() {
  this.form = document.createElement('FORM');
  this.container.appendChild(this.form);
  heading = document.createElement('h2');
  heading.innerHTML = "Your Topic Form ";
  this.form.appendChild(heading);
  var line = document.createElement('hr');
  this.form.appendChild(line);
  var linebreak1 = document.createElement('br');
  this.form.appendChild(linebreak1);
  var topiclabel = document.createElement('label');
  topiclabel.innerHTML = "Topic : ";
  this.form.appendChild(topiclabel);
  var topicInput = document.createElement('input'); // topic
  topicInput.setAttribute("type", "text");
  topicInput.setAttribute("id", "topic");
  topicInput.required = true;
  this.form.appendChild(topicInput);
  var linebreak2 = document.createElement('br');
  this.form.appendChild(linebreak2);
  var linebreak3 = document.createElement('br');
  this.form.appendChild(linebreak3);

  var info1label = document.createElement('label');
  info1label.innerHTML = "Info : ";
  this.form.appendChild(info1label);
  var infoelement = document.createElement('textarea'); // info1
  infoelement.setAttribute("type", "text");
  infoelement.setAttribute("id", "info");
  infoelement.required = true;
  this.form.appendChild(infoelement);

  var infobreak = document.createElement('br');
  this.form.appendChild(infobreak);
  var questionlabel = document.createElement('label'); // question1
  questionlabel.innerHTML = "Question : ";
  this.form.appendChild(questionlabel);
  var correctQuestion1element = document.createElement('textarea');
  correctQuestion1element.setAttribute("type", "text");
  correctQuestion1element.setAttribute("id", "question1");
  correctQuestion1element.required = true;
  this.form.appendChild(correctQuestion1element);

  var messagebreak1 = document.createElement('br');
  this.form.appendChild(messagebreak1);
  var correctAnswerLabel = document.createElement('label'); // correct answer
  correctAnswerLabel.innerHTML = "Correct Answer : ";
  this.form.appendChild(correctAnswerLabel);
  var correctAnswerElement = document.createElement('textarea');
  correctAnswerElement.setAttribute("type", "text");
  correctAnswerElement.setAttribute("id", "question1");
  correctAnswerElement.required = true;
  this.form.appendChild(correctAnswerElement);

  var messagebreak2 = document.createElement('br');
  this.form.appendChild(messagebreak2);
  var incorrectAnswerLabel = document.createElement('label'); // incorrect answer
  incorrectAnswerLabel.innerHTML = "Incorrect Answer : ";
  this.form.appendChild(incorrectAnswerLabel);
  var incorrectAnswerElement = document.createElement('textarea');
  incorrectAnswerElement.setAttribute("type", "text");
  incorrectAnswerElement.setAttribute("id", "question1");
  incorrectAnswerElement.required = true;
  this.form.appendChild(incorrectAnswerElement);

  var messagebreak3 = document.createElement('br');
  this.form.appendChild(messagebreak3);
  var messagebreak4 = document.createElement('br');
  this.form.appendChild(messagebreak4);
  var messagebreak5 = document.createElement('br');
  this.form.appendChild(messagebreak5);
  var messagebreak6 = document.createElement('br');
  this.form.appendChild(messagebreak6);

  var info2label = document.createElement('label');
  info2label.innerHTML = "Info : ";
  this.form.appendChild(info2label);
  var info2element = document.createElement('textarea'); // info2
  info2element.setAttribute("type", "text");
  info2element.setAttribute("id", "info");
  info2element.required = true;
  this.form.appendChild(info2element);

  var info2break = document.createElement('br');
  this.form.appendChild(info2break);

  var question2label = document.createElement('label'); // // question2
  question2label.innerHTML = "Question : ";
  this.form.appendChild(question2label);
  var question2Element = document.createElement('textarea');
  question2Element.setAttribute("type", "text");
  question2Element.setAttribute("id", "question1");
  question2Element.required = true;
  this.form.appendChild(question2Element);

  var messagebreak7 = document.createElement('br');
  this.form.appendChild(messagebreak7);

  var correctAnswer2Label = document.createElement('label'); // correct answer 2
  correctAnswer2Label.innerHTML = "Correct Answer : ";
  this.form.appendChild(correctAnswer2Label);
  var correctAnswer2Element = document.createElement('textarea');
  correctAnswer2Element.setAttribute("type", "text");
  correctAnswer2Element.setAttribute("id", "question1");
  correctAnswer2Element.required = true;
  this.form.appendChild(correctAnswer2Element);

  var messagebreak8 = document.createElement('br');
  this.form.appendChild(messagebreak8);

  var incorrectAnswer2Label = document.createElement('label'); // incorrect answer 2
  incorrectAnswer2Label.innerHTML = "Incorrect Answer : ";
  this.form.appendChild(incorrectAnswer2Label);
  var incorrectAnswer2Element = document.createElement('textarea');
  incorrectAnswer2Element.setAttribute("type", "text");
  incorrectAnswer2Element.setAttribute("id", "question1");
  incorrectAnswer2Element.required = true;
  this.form.appendChild(incorrectAnswer2Element);

  var messagebreak9 = document.createElement('br');
  this.form.appendChild(messagebreak9);
  var messagebreak10 = document.createElement('br');
  this.form.appendChild(messagebreak10);
  var messagebreak11 = document.createElement('br');
  this.form.appendChild(messagebreak11);
  var messagebreak12 = document.createElement('br');
  this.form.appendChild(messagebreak12);

  var info3label = document.createElement('label');
  info3label.innerHTML = "Info : ";
  this.form.appendChild(info3label);
  var info3element = document.createElement('textarea'); // info 3
  info3element.setAttribute("type", "text");
  info3element.setAttribute("id", "info");
  info3element.required = true;
  this.form.appendChild(info3element);

  var info3break = document.createElement('br');
  this.form.appendChild(info3break);

  var question3label = document.createElement('label'); // question 3
  question3label.innerHTML = "Question : ";
  this.form.appendChild(question3label);
  var question3Element = document.createElement('textarea');
  question3Element.setAttribute("type", "text");
  question3Element.setAttribute("id", "question1");
  question3Element.required = true;
  this.form.appendChild(question3Element);

  var messagebreak13 = document.createElement('br');
  this.form.appendChild(messagebreak13);

  var correctAnswer3Label = document.createElement('label'); // correct answer 3
  correctAnswer3Label.innerHTML = "Correct Answer : ";
  this.form.appendChild(correctAnswer3Label);
  var correctAnswer3Element = document.createElement('textarea');
  correctAnswer3Element.setAttribute("type", "text");
  correctAnswer3Element.setAttribute("id", "question1");
  correctAnswer3Element.required = true;
  this.form.appendChild(correctAnswer3Element);

  var messagebreak14 = document.createElement('br');
  this.form.appendChild(messagebreak14);

  var incorrectAnswer3Label = document.createElement('label'); // incorrect answer 3
  incorrectAnswer3Label.innerHTML = "Incorrect Answer : ";
  this.form.appendChild(incorrectAnswer3Label);
  var incorrectAnswer3Element = document.createElement('textarea');
  incorrectAnswer3Element.setAttribute("type", "text");
  incorrectAnswer3Element.setAttribute("id", "question1");
  incorrectAnswer3Element.required = true;
  this.form.appendChild(incorrectAnswer3Element);

  var messagebreak = document.createElement('br');
  this.form.appendChild(messagebreak);
  var messagebreak = document.createElement('br');
  this.form.appendChild(messagebreak);
  var messagebreak = document.createElement('br');
  this.form.appendChild(messagebreak);
  var messagebreak = document.createElement('br');
  this.form.appendChild(messagebreak);
  var submitelement = document.createElement('input');
  submitelement.setAttribute("type", "submit");
  submitelement.setAttribute("value", "submit");
  this.form.appendChild(submitelement);
  console.log('createform calling with form', this.form);
  this.form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("submit sent", event);
  })
  return this.form;
};
FormView.prototype.createLesson = function(event) {
  const newLesson = {
    topic: event.target[0].value,
    content: {
      questions: {
        question1: {
          info: event.target[1].value,
          text: event.target[2].value,
          correctAnswer: event.target[3].value,
          incorrectAnswer: event.target[4].value
        },
        question2: {
          info: event.target[5].value,
          text: event.target[6].value,
          correctAnswer: event.target[7].value,
          incorrectAnswer: event.target[8].value
        },
        question3: {
          info: event.target[9].value,
          text: event.target[10].value,
          correctAnswer: event.target[11].value,
          incorrectAnswer: event.target[12].value
        }
      }
    }
  };
  return newLesson;
};
module.exports = FormView;
