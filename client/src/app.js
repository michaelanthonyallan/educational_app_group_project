const LessonModel = require('./models/lesson_model.js');
const HomeView = require('./views/home_view.js');

document.addEventListener('DOMContentLoaded', () => {

  console.log("Hello");

  const topOfThePageDiv = document.querySelector('#top-of-the-page');
  const homeButtonDiv = document.querySelector('#home-buttons');
  const contentTargetDiv = document.querySelector('#content');
  const homeView = new HomeView(homeButtonDiv, contentTargetDiv, topOfThePageDiv);
  homeView.bindEvents();


  const url = 'http://localhost:3000/api/lessons';
  const lesson_model = new LessonModel(url);
  lesson_model.bindEvents();
  lesson_model.getData();


  const selectElement = document.querySelector('#dropDown');

  const homeView2 = new HomeView();
  homeView.bindEvents2(selectElement);
});
