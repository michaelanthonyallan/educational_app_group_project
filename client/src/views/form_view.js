const PubSub = require('../helpers/pub_sub.js');

const FormView = function(container) {
  this.container = container;
  this.form = null;
};

let number2 = 0;

FormView.prototype.bindEvents = function(number) {
  this.createForm(number);
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

FormView.prototype.createForm = function(number) {

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

  while (number > 0) {

    const info1label = document.createElement('label');
    this.form.appendChild(info1label);
    const infoelement = document.createElement('textarea'); // info1
    infoelement.setAttribute("type", "text");
    infoelement.setAttribute("id", "info");
    infoelement.setAttribute("autocomplete", "off");
    infoelement.setAttribute("placeholder", "Info for question");
    infoelement.required = true;
    this.form.appendChild(infoelement);

    const infobreak = document.createElement('br');
    this.form.appendChild(infobreak);
    const questionlabel = document.createElement('label'); // question1
    this.form.appendChild(questionlabel);
    const correctQuestion1element = document.createElement('textarea');
    correctQuestion1element.setAttribute("type", "text");
    correctQuestion1element.setAttribute("id", "question");
    correctQuestion1element.setAttribute("autocomplete", "off");
    correctQuestion1element.setAttribute("placeholder", "Question");

    correctQuestion1element.required = true;
    this.form.appendChild(correctQuestion1element);

    const messagebreak1 = document.createElement('br');
    this.form.appendChild(messagebreak1);
    const correctAnswerLabel = document.createElement('label'); // correct answer
    this.form.appendChild(correctAnswerLabel);
    const correctAnswerElement = document.createElement('input');
    correctAnswerElement.setAttribute("type", "text");
    correctAnswerElement.setAttribute("id", "question");
    correctAnswerElement.setAttribute("autocomplete", "off");
    correctAnswerElement.setAttribute("placeholder", "Enter Correct Answer");

    correctAnswerElement.required = true;
    this.form.appendChild(correctAnswerElement);

    const messagebreak2 = document.createElement('br');
    this.form.appendChild(messagebreak2);
    const incorrectAnswerLabel = document.createElement('label'); // incorrect answer
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

    number -= 1;
    number2 += 1;
  };

  const submitelement = document.createElement('input');
  submitelement.setAttribute("type", "submit");
  submitelement.setAttribute("value", "submit");
  this.form.appendChild(submitelement);

  const backButton = document.createElement('button');

  backButton.textContent = "Back"
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

  if (number2 === 3) {
    const newLesson = {
      topic: event.target[0].value,
      content: {
        questions: [{
            question: {
              info: event.target[1].value,
              text: event.target[2].value,
              correctAnswer: event.target[3].value,
              incorrectAnswer: event.target[4].value
            }
          },
          {
            question: {
              info: event.target[5].value,
              text: event.target[6].value,
              correctAnswer: event.target[7].value,
              incorrectAnswer: event.target[8].value
            }
          },
          {
            question: {
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
  }
  if (number2 === 4) {
    const newLesson = {
      topic: event.target[0].value,
      content: {
        questions: [{
            question: {
              info: event.target[1].value,
              text: event.target[2].value,
              correctAnswer: event.target[3].value,
              incorrectAnswer: event.target[4].value
            }
          },
          {
            question: {
              info: event.target[5].value,
              text: event.target[6].value,
              correctAnswer: event.target[7].value,
              incorrectAnswer: event.target[8].value
            }
          },
          {
            question: {
              info: event.target[9].value,
              text: event.target[10].value,
              correctAnswer: event.target[11].value,
              incorrectAnswer: event.target[12].value
            }
          },
          {
            question: {
              info: event.target[13].value,
              text: event.target[14].value,
              correctAnswer: event.target[15].value,
              incorrectAnswer: event.target[16].value
            }
          }
        ]
      }
    };
    return newLesson;
  }
  if (number2 === 5) {
    const newLesson = {
      topic: event.target[0].value,
      content: {
        questions: [{
            question: {
              info: event.target[1].value,
              text: event.target[2].value,
              correctAnswer: event.target[3].value,
              incorrectAnswer: event.target[4].value
            }
          },
          {
            question: {
              info: event.target[5].value,
              text: event.target[6].value,
              correctAnswer: event.target[7].value,
              incorrectAnswer: event.target[8].value
            }
          },
          {
            question: {
              info: event.target[9].value,
              text: event.target[10].value,
              correctAnswer: event.target[11].value,
              incorrectAnswer: event.target[12].value
            }
          },
          {
            question: {
              info: event.target[13].value,
              text: event.target[14].value,
              correctAnswer: event.target[15].value,
              incorrectAnswer: event.target[16].value
            }
          },
          {
            question: {
              info: event.target[17].value,
              text: event.target[18].value,
              correctAnswer: event.target[19].value,
              incorrectAnswer: event.target[20].value
            }
          }
        ]
      }
    };
    return newLesson;
  }
  if (number2 === 10) {
    const newLesson = {
      topic: event.target[0].value,
      content: {
        questions: [{
            question: {
              info: event.target[1].value,
              text: event.target[2].value,
              correctAnswer: event.target[3].value,
              incorrectAnswer: event.target[4].value
            }
          },
          {
            question: {
              info: event.target[5].value,
              text: event.target[6].value,
              correctAnswer: event.target[7].value,
              incorrectAnswer: event.target[8].value
            }
          },
          {
            question: {
              info: event.target[9].value,
              text: event.target[10].value,
              correctAnswer: event.target[11].value,
              incorrectAnswer: event.target[12].value
            }
          },
          {
            question: {
              info: event.target[13].value,
              text: event.target[14].value,
              correctAnswer: event.target[15].value,
              incorrectAnswer: event.target[16].value
            }
          },
          {
            question: {
              info: event.target[17].value,
              text: event.target[18].value,
              correctAnswer: event.target[19].value,
              incorrectAnswer: event.target[20].value
            }
          },
          {
            question: {
              info: event.target[21].value,
              text: event.target[22].value,
              correctAnswer: event.target[23].value,
              incorrectAnswer: event.target[24].value
            }
          },
          {
            question: {
              info: event.target[25].value,
              text: event.target[26].value,
              correctAnswer: event.target[27].value,
              incorrectAnswer: event.target[28].value
            }
          },
          {
            question: {
              info: event.target[29].value,
              text: event.target[30].value,
              correctAnswer: event.target[31].value,
              incorrectAnswer: event.target[32].value
            }
          },
          {
            question: {
              info: event.target[33].value,
              text: event.target[34].value,
              correctAnswer: event.target[35].value,
              incorrectAnswer: event.target[36].value
            }
          },
          {
            question: {
              info: event.target[37].value,
              text: event.target[38].value,
              correctAnswer: event.target[39].value,
              incorrectAnswer: event.target[40].value
            }
          }
        ]
      }
    };
    return newLesson;
  }
};

FormView.prototype.clearBox = function(elementId) {
  let div3 = document.getElementById(elementId);
  while (div3.firstChild) {
    div3.removeChild(div3.firstChild);
  };
};


module.exports = FormView;
