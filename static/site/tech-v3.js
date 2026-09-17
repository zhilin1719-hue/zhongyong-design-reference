(() => {
  'use strict';
  const consoleElement = document.querySelector('.city-lab-console');
  if (!consoleElement) return;

  const buttons = [...consoleElement.querySelectorAll('[data-lens-button]')];
  const setLens = (lens) => {
    if (!buttons.some(button => button.dataset.lensButton === lens)) return;
    consoleElement.dataset.lens = lens;
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lensButton === lens));
    });
  };

  buttons.forEach(button => button.addEventListener('click', () => setLens(button.dataset.lensButton)));
})();
