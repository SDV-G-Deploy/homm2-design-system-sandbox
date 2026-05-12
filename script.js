const controls = document.querySelectorAll('[data-screen]');
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('[data-screen-panel]');

function activate(screen) {
  panels.forEach((panel) => {
    panel.classList.toggle('is-active', panel.dataset.screenPanel === screen);
  });

  controls.forEach((control) => {
    control.classList.toggle('is-active', control.dataset.screen === screen && control.classList.contains('tab'));
  });

  tabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.screen === screen);
  });
}

controls.forEach((control) => {
  control.addEventListener('click', () => activate(control.dataset.screen));
});
