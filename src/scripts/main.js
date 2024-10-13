'use strict';

document.querySelectorAll('form').forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');
    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = input.name.replace(/([A-Z])/g, ' $1').trim();

    if (!input.placeholder) {
      input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
    }

    input.parentNode.insertBefore(label, input);
  });
});
