const container = document.querySelector('.container');
const text = document.querySelector('.text');
// const container = document.querySelector('.container')

const totalTime = 7500;

const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
  text.textContent = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.textContent = 'Hold';

    setTimeout(() => {
      text.textContent = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

breathAnimation();
