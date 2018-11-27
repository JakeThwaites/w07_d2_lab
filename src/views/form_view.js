const PubSub = require('../helpers/pub_sub.js');

const NavView = function (element) {
  this.element = element;
};

NavView.prototype.bindEvents = function () {
  this.element.addEventListener('click', (event) => {
    const selectedPlanetName = event.target.id;
    PubSub.publish('NavView:planet-clicked', selectedPlanetName);
  });

  PubSub.subscribe('Planets:all-planets-ready', (event) => {
    const allPlanets = event.detail;
    // this.populate(allPlanets);
  });
};

module.exports = NavView;
