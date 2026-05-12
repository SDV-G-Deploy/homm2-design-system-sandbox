const screenControls = document.querySelectorAll('[data-screen]');
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('[data-screen-panel]');
const modeControls = document.querySelectorAll('[data-mode]');
const body = document.body;

function activateScreen(screen) {
  panels.forEach((panel) => {
    panel.classList.toggle('is-active', panel.dataset.screenPanel === screen);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.screen === screen);
  });
}

function activateMode(mode) {
  body.dataset.mode = mode;
  modeControls.forEach((control) => {
    control.classList.toggle('is-active', control.dataset.mode === mode);
  });
}

screenControls.forEach((control) => {
  control.addEventListener('click', () => activateScreen(control.dataset.screen));
});

modeControls.forEach((control) => {
  control.addEventListener('click', () => activateMode(control.dataset.mode));
});
