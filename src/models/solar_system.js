const planets = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.publishSelectedPlanet = function(planetName){
  const planetIndex = this.findPlanetByName(planetName);
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('Planets:selected-planet-ready', selectedPlanet)
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('Planets:all-planets-ready', this.planets);
  PubSub.subscribe('NavView:planet-clicked', (event) => {
    const planetName = event.detail;
    this.publishSelectedPlanet(planetName);
  });
};

SolarSystem.prototype.findPlanetByName = function (planetName) {
    for (planet of this.planets) {
      if (planet.name === planetName) {
        return planet.index;
      };
    };
};

module.exports = SolarSystem;
