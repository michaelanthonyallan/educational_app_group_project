const PubSub = require('../helpers/pub_sub.js');
const FormView = require('./form_view.js');


const HomeView = function(container) {
  this.container = container;
};


HomeView.prototype.bindEvents = function() {
  this.render(this.container);
};


HomeView.prototype.render = function(container) {
  const createButton = document.createElement('button');
  const viewButton = document.createElement('button');
  createButton.textContent = "Create"
  viewButton.textContent = "View"
  container.appendChild(createButton);
  container.appendChild(viewButton);
  createButton.addEventListener('click', (event) => {
    console.log('click sent', event);
    formView = new FormView(this.container);
    formView.bindEvents();
  })
};


module.exports = HomeView;







module.exports = HomeView;
