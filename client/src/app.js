const LessonModel = require('./models/lesson_model.js');
const FormView = require('./views/form_view.js');
const SelectView = require('./views/select_view.js');
const HomeView = require('./views/home_view.js');
const LessonView = require('./views/lesson_view.js');

document.addEventListener('DOMContentLoaded', () => {
console.log("Hello");
const homeButtonDiv = document.querySelector('#home-buttons');
const contentTargetDiv = document.querySelector('#content');
const homeView = new HomeView(homeButtonDiv, contentTargetDiv);
homeView.bindEvents();

// const contentTargetDiv = document.querySelector('#content');

const url = 'http://localhost:3000/api/lessons';
const lesson_model = new LessonModel(url);
lesson_model.bindEvents();
lesson_model.getData();
});

// const activitiesContainer = document.querySelector('div#activities');
// const activitiesListView = new ListView(activitiesContainer);
// activitiesListView.bindEvents();
//
// const url = 'http://localhost:3000/api/activities';
// const activities = new Activity(url);
// activities.bindEvents();
// activities.getData();
