const planets = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.publishSelectedPlanet = function(planetIndex){
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('Planets:selected-planet-ready', selectedPlanet)
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('Planets:all-planets-ready', this.planets);
  PubSub.subscribe('FormView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishSelectedPlanet(selectedIndex);
  });
};

module.exports = SolarSystem;
