 PubSub = require('../helpers/pub_sub.js');

 FormView = function(container) {
   this.container = container;
 };


 FormView.prototype.bindEvents = function() {
   this.createForm();
 };

 FormView.prototype.clearBox = function(elementId) {
     const div = document.getElementById(elementId);
     while (div.firstChild) {
       div.removeChild(div.firstChild);
     };
};

 FormView.prototype.createForm = function() {
   form = document.createElement('FORM');

   this.container.appendChild(form);


   heading = document.createElement('h2'); // Heading of Form
   heading.innerHTML = "Your Topic Form ";
   form.appendChild(heading);

   var line = document.createElement('hr'); // Giving Horizontal Row After Heading
   form.appendChild(line);

   var linebreak = document.createElement('br');
   form.appendChild(linebreak);

   var topiclabel = document.createElement('label'); // Create Label for Name Field
   topiclabel.innerHTML = "Topic : "; // Set Field Labels
   form.appendChild(topiclabel);

   var inputelement = document.createElement('input'); // Create Input Field for Name
   inputelement.setAttribute("type", "text");
   inputelement.setAttribute("id", "topic");
   form.appendChild(inputelement);

   var linebreak = document.createElement('br');
   form.appendChild(linebreak);

   var infolabel = document.createElement('label'); // Create Label for E-mail Field
   infolabel.innerHTML = "Info : ";
   form.appendChild(infolabel);

   var infoelement = document.createElement('textarea'); // Create Input Field for E-mail
   infoelement.setAttribute("type", "text");
   infoelement.setAttribute("id", "info");
   form.appendChild(infoelement);

   var infobreak = document.createElement('br');
   form.appendChild(infobreak);

   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Question : ";
   form.appendChild(questionlabel);

   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   form.appendChild(texareaelement);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Correct Answer : ";
   form.appendChild(questionlabel);

   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   form.appendChild(texareaelement);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagelabel = document.createElement('label'); // Append Textarea
   messagelabel.innerHTML = "Incorrect Answer : ";
   form.appendChild(messagelabel);

   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   form.appendChild(texareaelement);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);
   var infolabel = document.createElement('label'); // Create Label for E-mail Field
   infolabel.innerHTML = "Info : ";
   form.appendChild(infolabel);

   var infoelement = document.createElement('textarea'); // Create Input Field for E-mail
   infoelement.setAttribute("type", "text");
   infoelement.setAttribute("id", "info");
   form.appendChild(infoelement);

   var infobreak = document.createElement('br');
   form.appendChild(infobreak);

   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Question : ";
   form.appendChild(questionlabel);

   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   form.appendChild(texareaelement);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Correct Answer : ";
   form.appendChild(questionlabel);

   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   form.appendChild(texareaelement);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagelabel = document.createElement('label'); // Append Textarea
   messagelabel.innerHTML = "Incorrect Answer : ";
   form.appendChild(messagelabel);

   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   form.appendChild(texareaelement);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);
   var infolabel = document.createElement('label'); // Create Label for E-mail Field
   infolabel.innerHTML = "Info : ";
   form.appendChild(infolabel);

   var infoelement = document.createElement('textarea'); // Create Input Field for E-mail
   infoelement.setAttribute("type", "text");
   infoelement.setAttribute("id", "info");
   form.appendChild(infoelement);

   var infobreak = document.createElement('br');
   form.appendChild(infobreak);

   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Question : ";
   form.appendChild(questionlabel);

   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   form.appendChild(texareaelement);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Correct Answer : ";
   form.appendChild(questionlabel);

   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   form.appendChild(texareaelement);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagelabel = document.createElement('label'); // Append Textarea
   messagelabel.innerHTML = "Incorrect Answer : ";
   form.appendChild(messagelabel);

   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   form.appendChild(texareaelement);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var messagebreak = document.createElement('br');
   form.appendChild(messagebreak);

   var submitelement = document.createElement('input');
   submitelement.setAttribute("type", "submit");
   submitelement.setAttribute("value", "submit");
   form.appendChild(submitelement);

   form.addEventListener('submit', (event) => {
     event.preventDefault()

   })


 };





     module.exports = FormView;
