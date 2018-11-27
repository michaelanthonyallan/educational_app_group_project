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
  const line = document.createElement('br');
  this.form.appendChild(line);
  const linebreak1 = document.createElement('br');
  this.form.appendChild(linebreak1);
  const topiclabel = document.createElement('label');
  //topiclabel.innerHTML = "Topic : ";
  this.form.appendChild(topiclabel);
  const topicInput = document.createElement('input'); // topic
  topicInput.setAttribute("type", "text");
  topicInput.setAttribute("id", "topic");
  topicInput.setAttribute("placeholder", "Topic");
  topicInput.setAttribute("autocomplete", "off");
  topicInput.required = true;
  this.form.appendChild(topicInput);
  const linebreak2 = document.createElement('br');
  this.form.appendChild(linebreak2);
  const linebreak3 = document.createElement('br');
  this.form.appendChild(linebreak3);

  const info1label = document.createElement('label');
  //info1label.innerHTML = "Info : ";
  this.form.appendChild(info1label);
  const infoelement = document.createElement('textarea'); // info1
  infoelement.setAttribute("type", "text");
  infoelement.setAttribute("id", "info");
  infoelement.setAttribute("autocomplete", "off");
  infoelement.setAttribute("placeholder", "Info for question 1");
  infoelement.required = true;
  this.form.appendChild(infoelement);

  const infobreak = document.createElement('br');
  this.form.appendChild(infobreak);
  const questionlabel = document.createElement('label'); // question1
  //questionlabel.innerHTML = "Question : ";
  this.form.appendChild(questionlabel);
  const correctQuestion1element = document.createElement('textarea');
  correctQuestion1element.setAttribute("type", "text");
  correctQuestion1element.setAttribute("id", "question1");
  correctQuestion1element.setAttribute("autocomplete", "off");
  correctQuestion1element.setAttribute("placeholder", "Question 1");

  correctQuestion1element.required = true;
  this.form.appendChild(correctQuestion1element);

  const messagebreak1 = document.createElement('br');
  this.form.appendChild(messagebreak1);
  const correctAnswerLabel = document.createElement('label'); // correct answer
  //correctAnswerLabel.innerHTML = "Correct Answer : ";
  this.form.appendChild(correctAnswerLabel);
  const correctAnswerElement = document.createElement('input');
  correctAnswerElement.setAttribute("type", "text");
  correctAnswerElement.setAttribute("id", "question1");
  correctAnswerElement.setAttribute("autocomplete", "off");
  correctAnswerElement.setAttribute("placeholder", "Enter Correct Answer");


  correctAnswerElement.required = true;
  this.form.appendChild(correctAnswerElement);

  const messagebreak2 = document.createElement('br');
  this.form.appendChild(messagebreak2);
  const incorrectAnswerLabel = document.createElement('label'); // incorrect answer
  //incorrectAnswerLabel.innerHTML = "Incorrect Answer : ";
  this.form.appendChild(incorrectAnswerLabel);
  const incorrectAnswerElement = document.createElement('input');
  incorrectAnswerElement.setAttribute("type", "text");
  incorrectAnswerElement.setAttribute("id", "question1");
  incorrectAnswerElement.setAttribute("autocomplete", "off");
  incorrectAnswerElement.setAttribute("placeholder", "Enter Incorrect Answer");

  incorrectAnswerElement.required = true;
  this.form.appendChild(incorrectAnswerElement);

  const messagebreak3 = document.createElement('br');
  this.form.appendChild(messagebreak3);
  const messagebreak4 = document.createElement('br');
  this.form.appendChild(messagebreak4);
  const messagebreak5 = document.createElement('br');
  this.form.appendChild(messagebreak5);
  const messagebreak6 = document.createElement('br');
  this.form.appendChild(messagebreak6);

  const info2label = document.createElement('label');
  //info2label.innerHTML = "Info : ";
  this.form.appendChild(info2label);
  const info2element = document.createElement('textarea'); // info2
  info2element.setAttribute("type", "text");
  info2element.setAttribute("id", "info");
  info2element.setAttribute("placeholder", "Info for question 2");
  info2element.required = true;
  this.form.appendChild(info2element);

  const info2break = document.createElement('br');
  this.form.appendChild(info2break);

  const question2label = document.createElement('label'); // // question2
  //question2label.innerHTML = "Question : ";
  this.form.appendChild(question2label);
  const question2Element = document.createElement('textarea');
  question2Element.setAttribute("type", "text");
  question2Element.setAttribute("id", "question1");
  question2Element.setAttribute("autocomplete", "off");
  question2Element.setAttribute("placeholder", "Question 2");

  question2Element.required = true;
  this.form.appendChild(question2Element);

  const messagebreak7 = document.createElement('br');
  this.form.appendChild(messagebreak7);

  const correctAnswer2Label = document.createElement('label'); // correct answer 2
  //correctAnswer2Label.innerHTML = "Correct Answer : ";
  this.form.appendChild(correctAnswer2Label);
  const correctAnswer2Element = document.createElement('input');
  correctAnswer2Element.setAttribute("type", "text");
  correctAnswer2Element.setAttribute("id", "question1");
  correctAnswer2Element.setAttribute("autocomplete", "off");
  correctAnswer2Element.setAttribute("placeholder", "Enter correct answer");
  correctAnswer2Element.required = true;
  this.form.appendChild(correctAnswer2Element);

  const messagebreak8 = document.createElement('br');
  this.form.appendChild(messagebreak8);

  const incorrectAnswer2Label = document.createElement('label'); // incorrect answer 2
  //incorrectAnswer2Label.innerHTML = "Incorrect Answer : ";
  this.form.appendChild(incorrectAnswer2Label);
  const incorrectAnswer2Element = document.createElement('input');
  incorrectAnswer2Element.setAttribute("type", "text");
  incorrectAnswer2Element.setAttribute("id", "question1");
  incorrectAnswer2Element.setAttribute("autocomplete", "off");
  incorrectAnswer2Element.setAttribute("placeholder", "Enter incorrect answer");

  incorrectAnswer2Element.required = true;
  this.form.appendChild(incorrectAnswer2Element);

  const messagebreak9 = document.createElement('br');
  this.form.appendChild(messagebreak9);
  const messagebreak10 = document.createElement('br');
  this.form.appendChild(messagebreak10);
  const messagebreak11 = document.createElement('br');
  this.form.appendChild(messagebreak11);
  const messagebreak12 = document.createElement('br');
  this.form.appendChild(messagebreak12);

  const info3label = document.createElement('label');
  //info3label.innerHTML = "Info : ";
  this.form.appendChild(info3label);
  const info3element = document.createElement('textarea'); // info 3
  info3element.setAttribute("type", "text");
  info3element.setAttribute("id", "info");
  info3element.setAttribute("autocomplete", "off");
  info3element.setAttribute("placeholder", "Info for question 3");

  info3element.required = true;
  this.form.appendChild(info3element);

  const info3break = document.createElement('br');
  this.form.appendChild(info3break);

  const question3label = document.createElement('label'); // question 3
  //question3label.innerHTML = "Question : ";
  this.form.appendChild(question3label);
  const question3Element = document.createElement('textarea');
  question3Element.setAttribute("type", "text");
  question3Element.setAttribute("id", "question1");
  question3Element.setAttribute("autocomplete", "off");
  question3Element.setAttribute("placeholder", "Question 3");

  question3Element.required = true;
  this.form.appendChild(question3Element);

  const messagebreak13 = document.createElement('br');
  this.form.appendChild(messagebreak13);

  const correctAnswer3Label = document.createElement('label'); // correct answer 3
  //correctAnswer3Label.innerHTML = "Correct Answer : ";
  this.form.appendChild(correctAnswer3Label);
  const correctAnswer3Element = document.createElement('input');
  correctAnswer3Element.setAttribute("type", "text");
  correctAnswer3Element.setAttribute("id", "question1");
  correctAnswer3Element.setAttribute("autocomplete", "off");
  correctAnswer3Element.setAttribute("placeholder", "Enter correct answer");

  correctAnswer3Element.required = true;
  this.form.appendChild(correctAnswer3Element);

  const messagebreak14 = document.createElement('br');
  this.form.appendChild(messagebreak14);

  const incorrectAnswer3Label = document.createElement('label'); // incorrect answer 3
  //incorrectAnswer3Label.innerHTML = "Incorrect Answer : ";
  this.form.appendChild(incorrectAnswer3Label);
  const incorrectAnswer3Element = document.createElement('input');
  incorrectAnswer3Element.setAttribute("type", "text");
  incorrectAnswer3Element.setAttribute("id", "question1");
  incorrectAnswer3Element.setAttribute("autocomplete", "off");
  incorrectAnswer3Element.setAttribute("placeholder", "Enter incorrect answer");
  incorrectAnswer3Element.required = true;
  this.form.appendChild(incorrectAnswer3Element);

  const messagebreak15 = document.createElement('br');
  this.form.appendChild(messagebreak15);
  const messagebreak16 = document.createElement('br');
  this.form.appendChild(messagebreak16);
  const messagebreak17 = document.createElement('br');
  this.form.appendChild(messagebreak17);
  const messagebreak18 = document.createElement('br');
  this.form.appendChild(messagebreak18);
  const submitelement = document.createElement('input');
  submitelement.setAttribute("type", "submit");
  submitelement.setAttribute("value", "submit");
  this.form.appendChild(submitelement);

  const backButton = document.createElement('p');
  backButton.textContent = "<Back>"
  backButton.setAttribute("type", "text");
  backButton.setAttribute("value", "text");
  this.form.appendChild(backButton);
  
  backButton.addEventListener('click', (event) => {
    location.reload();
  });

  this.form.addEventListener('submit', (event) => {
    let div = document.getElementById('create-button-invisible');
    div.id = 'create-button'
    let div2 = document.getElementById('dropDownInvisible');
    div2.id = 'dropDown'
    this.clearBox(this.container.id)
    event.preventDefault()
    document.getElementById('dropDown').innerText = null
  })
  return this.form;

};

FormView.prototype.createLesson = function(event) {
  const newLesson = {
    topic: event.target[0].value,
    content: {
      questions: [{
          question1: {
            info: event.target[1].value,
            text: event.target[2].value,
            correctAnswer: event.target[3].value,
            incorrectAnswer: event.target[4].value
          }
        },
        {
          question2: {
            info: event.target[5].value,
            text: event.target[6].value,
            correctAnswer: event.target[7].value,
            incorrectAnswer: event.target[8].value
          }
        },
        {
          question3: {
            info: event.target[9].value,
            text: event.target[10].value,
            correctAnswer: event.target[11].value,
            incorrectAnswer: event.target[12].value
          }
        }
      ]
    }
  };
  return newLesson;
};

FormView.prototype.clearBox = function(elementId) {
  let div3 = document.getElementById(elementId);
  while (div3.firstChild) {
    div3.removeChild(div3.firstChild);
  };
};


module.exports = FormView;
