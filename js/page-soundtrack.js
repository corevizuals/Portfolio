const soundtrack = new Audio('audio/steve-lacy-the-feeling.mp3');
soundtrack.loop = true;
soundtrack.preload = 'auto';
soundtrack.volume = 0.55;

const soundtrackToggle = document.createElement('button');
soundtrackToggle.className = 'soundtrack-toggle';
soundtrackToggle.type = 'button';
document.body.appendChild(soundtrackToggle);

let manuallyPaused = false;
let resumeAfterVideo = false;

const updateSoundtrackToggle = () => {
  const isPlaying = !soundtrack.paused;
  soundtrackToggle.textContent = isPlaying ? '♫ The Feeling · Pause' : '♫ The Feeling · Play';
  soundtrackToggle.setAttribute('aria-label', isPlaying ? 'Pause The Feeling by Steve Lacy' : 'Play The Feeling by Steve Lacy');
  soundtrackToggle.setAttribute('aria-pressed', String(isPlaying));
};

const playSoundtrack = async () => {
  try {
    await soundtrack.play();
    manuallyPaused = false;
  } catch (_) {
    // Browsers commonly require the visitor's first interaction before audio.
  }
  updateSoundtrackToggle();
};

soundtrackToggle.addEventListener('click', () => {
  if (soundtrack.paused) {
    playSoundtrack();
  } else {
    manuallyPaused = true;
    soundtrack.pause();
    updateSoundtrackToggle();
  }
});

const unlockSoundtrack = event => {
  if (event.target.closest('.soundtrack-toggle')) return;
  document.removeEventListener('pointerdown', unlockSoundtrack, true);
  document.removeEventListener('keydown', unlockSoundtrack, true);
  if (!manuallyPaused && soundtrack.paused) playSoundtrack();
};

window.addEventListener('load', playSoundtrack, { once: true });
document.addEventListener('pointerdown', unlockSoundtrack, true);
document.addEventListener('keydown', unlockSoundtrack, true);

document.addEventListener('portfolio:video-open', () => {
  resumeAfterVideo = !soundtrack.paused;
  if (resumeAfterVideo) soundtrack.pause();
  updateSoundtrackToggle();
});

document.addEventListener('portfolio:video-close', () => {
  if (resumeAfterVideo && !manuallyPaused) playSoundtrack();
  resumeAfterVideo = false;
});

updateSoundtrackToggle();
