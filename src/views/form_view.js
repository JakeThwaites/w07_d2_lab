const PubSub = require('../helpers/pub_sub.js');

const FormView = function (element) {
  this.element = element;
};

this.element.addEventListener('change'(event) => {
  const selectedIndex = event.target.value;
  PubSub.publish('FormView:change', selectedIndex);
});

FormView.prototype.populate = function (planetData) {
  planetData.forEach((planet, index)=>{
    const option = document.createElement('option');
    option.textContent = planet.name;
    option.value = index;
    this.element.appendChild(option);
  })
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:all-planets-ready', (event) => {
    const allPlanets = event.detail;
    this.populate(allPlanets);
  });
};

module.exports = FormView;
