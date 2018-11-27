const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {


  const planets = document.querySelector(".planets-menu");
  const navView = new NavView(planets);
  navView.bindEvents();

  const infoDiv = document.querySelector(".planet-details");
  const planetInfoDisplay = new ResultView(infoDiv);
  planetInfoDisplay.bindEvents();

  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
});
