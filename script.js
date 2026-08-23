(() => {
  const intro = document.querySelector('.intro');
  const trigger = document.querySelector('.envelope-trigger');
  const hint = document.querySelector('.open-hint');
  const closedFrame = document.querySelector('.envelope-closed-frame');
  const openFrame = document.querySelector('.envelope-open-frame');
  let opened = false;

  function openEnvelope() {
    if (opened) return;
    opened = true;
    intro.classList.add('is-open');
    trigger.disabled = true;

    window.setTimeout(() => {
      closedFrame.classList.remove('active');
      openFrame.classList.add('active');
    }, 420);

    window.setTimeout(() => {
      document.getElementById('welcome').scrollIntoView({ behavior: 'smooth' });
    }, 1350);
  }

  trigger.addEventListener('click', openEnvelope);
  hint.addEventListener('click', openEnvelope);
})();
