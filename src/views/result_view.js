const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:all-planets-ready', (event) => {
    const planet = event.detail;
    this.render(planet);
    console.log(planet);
  });
}

ResultView.prototype.render = function (planet) {

  const infoParagraph = document.createElement('ul');

  const planetName = document.createElement('li');
  planetName.textContent = planet.name;

  const planetOrbit = document.createElement('li');
  planetOrbit.textContent = `Orbit: ${planet.orbit} Earth Days`;

  const planetDay = document.createElement('li');
  planetDay.textContent = `Day: ${planet.day} Earth Days`;

  const planetSurfaceArea = document.createElement('li');
  planetSurfaceArea.textContent = `Surface Area: ${planet.surfaceArea} Earths`;

  const planetVolume = document.createElement('li');
  planetVolume.textContent = `Volume: ${planet.volume} Earths`;

  const planetGravity = document.createElement('li');
  planetGravity.textContent = `Gravity: ${planet.gravity} g`;

  const planetMoons = document.createElement('li');
  planetMoons.textContent = `Moons: ${planet.moons}`;

  // const planetImage = document.createElement('img');
  // planetImage.setAttribute('src', `../${planet.image}`);

  infoParagraph.appendChild(planetName);
  infoParagraph.appendChild(planetOrbit);
  infoParagraph.appendChild(planetDay);
  infoParagraph.appendChild(planetSurfaceArea);
  infoParagraph.appendChild(planetVolume);
  infoParagraph.appendChild(planetGravity);
  infoParagraph.appendChild(planetMoons);

  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = ResultView;
