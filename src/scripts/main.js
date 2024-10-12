'use strict';

const inputsEl = [...document.querySelectorAll('.field-text')];

inputsEl.forEach((el) => {
  const labelEl = document.createElement('label');

  labelEl.className = 'field-label';
  labelEl.htmlFor = el.id;
  labelEl.textContent = el.name;
  el.parentNode.appendChild(labelEl);
  el.placeholder = el.name;
});
