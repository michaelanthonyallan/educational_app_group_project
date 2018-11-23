const PubSub = require('../helpers/pub_sub.js');

const FormView = function(container) {
  this.container = container;
};

FormView.prototype.bindEvents = function() {
  this.createForm();
};



FormView.prototype.createForm = function() {
  const form = document.createElement('FORM');
  this.container.appendChild(form);
  const heading = document.createElement('h2'); // Heading of Form
  heading.innerHTML = "Contact Form ";
  form.appendChild(heading);

  var line = document.createElement('hr'); // Giving Horizontal Row After Heading
  form.appendChild(line);

  var linebreak = document.createElement('br');
  form.appendChild(linebreak);

  var namelabel = document.createElement('label'); // Create Label for Name Field
  namelabel.innerHTML = "Your Name : "; // Set Field Labels
  form.appendChild(namelabel);

  var inputelement = document.createElement('input'); // Create Input Field for Name
  inputelement.setAttribute("type", "text");
  inputelement.setAttribute("name", "dname");
  form.appendChild(inputelement);

  var linebreak = document.createElement('br');
  form.appendChild(linebreak);

  var emaillabel = document.createElement('label'); // Create Label for E-mail Field
  emaillabel.innerHTML = "Your Email : ";
  form.appendChild(emaillabel);

  var emailelement = document.createElement('input'); // Create Input Field for E-mail
  emailelement.setAttribute("type", "text");
  emailelement.setAttribute("name", "demail");
  form.appendChild(emailelement);

  var emailbreak = document.createElement('br');
  form.appendChild(emailbreak);

  var messagelabel = document.createElement('label'); // Append Textarea
  messagelabel.innerHTML = "Your Message : ";
  form.appendChild(messagelabel);

  var texareaelement = document.createElement('textarea');
  texareaelement.setAttribute("name", "dmessage");
  form.appendChild(texareaelement);

  var messagebreak = document.createElement('br');
  form.appendChild(messagebreak);

  var submitelement = document.createElement('input'); // Append Submit Button
  submitelement.setAttribute("type", "submit");
  submitelement.setAttribute("name", "dsubmit");
  submitelement.setAttribute("value", "Submit");
  form.appendChild(submitelement);
  // const titleLabel = document.createElement('label');
  // titleLabel.innerHtml = "topic title:";
  //
  // form.appendChild(titleLabel);
};





module.exports = FormView;
