PubSub = require('../helpers/pub_sub.js');
 FormView = function(container) {
   this.container = container;
   this.form = null;
 };
 FormView.prototype.bindEvents = function() {
   this.createForm();
   this.form.addEventListener('submit', (event) =>{
     this.handleSubmit(event)
     console.log('FormView bindEvents calling with the event', event);
   })
 };
 FormView.prototype.handleSubmit = function (event) {
   event.preventDefault();
   const newLesson = this.createLesson(event);
   PubSub.publish('FormView:lesson-submitted', newLesson);
   console.log('HandleSubmit calling with new Lesson!', newLesson);
   event.target.reset();
 };
 FormView.prototype.createForm = function() {
   this.form = document.createElement('FORM');
   this.container.appendChild(this.form);
   heading = document.createElement('h2'); // Heading of Form
   heading.innerHTML = "Your Topic Form ";
   this.form.appendChild(heading);
   var line = document.createElement('hr'); // Giving Horizontal Row After Heading
   this.form.appendChild(line);
   var linebreak = document.createElement('br');
   this.form.appendChild(linebreak);
   var topiclabel = document.createElement('label'); // Create Label for Name Field
   topiclabel.innerHTML = "Topic : "; // Set Field Labels
   this.form.appendChild(topiclabel);
   var inputelement = document.createElement('input'); // Create Input Field for Name
   inputelement.setAttribute("type", "text");
   inputelement.setAttribute("id", "topic");
   this.form.appendChild(inputelement);
   var linebreak = document.createElement('br');
   this.form.appendChild(linebreak);
   var infolabel = document.createElement('label'); // Create Label for E-mail Field
   infolabel.innerHTML = "Info : ";
   this.form.appendChild(infolabel);
   var infoelement = document.createElement('textarea'); // Create Input Field for E-mail
   infoelement.setAttribute("type", "text");
   infoelement.setAttribute("id", "info");
   this.form.appendChild(infoelement);
   var infobreak = document.createElement('br');
   this.form.appendChild(infobreak);
   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Question : ";
   this.form.appendChild(questionlabel);
   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   this.form.appendChild(texareaelement);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Correct Answer : ";
   this.form.appendChild(questionlabel);
   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   this.form.appendChild(texareaelement);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var messagelabel = document.createElement('label'); // Append Textarea
   messagelabel.innerHTML = "Incorrect Answer : ";
   this.form.appendChild(messagelabel);
   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   this.form.appendChild(texareaelement);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var infolabel = document.createElement('label'); // Create Label for E-mail Field
   infolabel.innerHTML = "Info : ";
   this.form.appendChild(infolabel);
   var infoelement = document.createElement('textarea'); // Create Input Field for E-mail
   infoelement.setAttribute("type", "text");
   infoelement.setAttribute("id", "info");
   this.form.appendChild(infoelement);
   var infobreak = document.createElement('br');
   this.form.appendChild(infobreak);
   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Question : ";
   this.form.appendChild(questionlabel);
   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   this.form.appendChild(texareaelement);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Correct Answer : ";
   this.form.appendChild(questionlabel);
   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   this.form.appendChild(texareaelement);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var messagelabel = document.createElement('label'); // Append Textarea
   messagelabel.innerHTML = "Incorrect Answer : ";
   this.form.appendChild(messagelabel);
   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   this.form.appendChild(texareaelement);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var infolabel = document.createElement('label'); // Create Label for E-mail Field
   infolabel.innerHTML = "Info : ";
   this.form.appendChild(infolabel);
   var infoelement = document.createElement('textarea'); // Create Input Field for E-mail
   infoelement.setAttribute("type", "text");
   infoelement.setAttribute("id", "info");
   this.form.appendChild(infoelement);
   var infobreak = document.createElement('br');
   this.form.appendChild(infobreak);
   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Question : ";
   this.form.appendChild(questionlabel);
   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   this.form.appendChild(texareaelement);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var questionlabel = document.createElement('label'); // Append Textarea
   questionlabel.innerHTML = "Correct Answer : ";
   this.form.appendChild(questionlabel);
   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   this.form.appendChild(texareaelement);
   var messagebreak = document.createElement('br');
   this.form.appendChild(messagebreak);
   var messagelabel = document.createElement('label'); // Append Textarea
   messagelabel.innerHTML = "Incorrect Answer : ";
   this.form.appendChild(messagelabel);
   var texareaelement = document.createElement('textarea');
   // texareaelement.setAttribute("name", "dmessage");
   this.form.appendChild(texareaelement);
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
 FormView.prototype.createLesson = function (event) {
   const newLesson = {
     topic:event.target[0].value,
     content:{
       questions:{
         question1:{
           info:event.target[1].value,
           text:event.target[2].value,
           correctAnswer:event.target[3].value,
           incorrectAnswer:event.target[4].value
         },
         question2:{
           info:event.target[5].value,
           text:event.target[6].value,
           correctAnswer:event.target[7].value,
           incorrectAnswer:event.target[8].value
         },
         question3:{
           info:event.target[9].value,
           text:event.target[10].value,
           correctAnswer:event.target[11].value,
           incorrectAnswer:event.target[12].value
         }
       }
     }
   };
   return newLesson;
 };
 module.exports = FormView;
