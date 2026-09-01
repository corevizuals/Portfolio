const nativeVideoByPoster = {
  'Da0SbkrOvi7.jpg': 'product-designers-vs-developers.mp4',
  'DZ23zLDxdpp.jpg': 'inhand-demo-video.mp4',
  'DaDkTh_u3FL.jpg': 'dolly-hackathon-demo.mp4',
  'DbVvhLrMIWG.jpg': 'Startup-week.mp4',
  'DcU87i9xpJk.jpg': '4th-of-july.mp4',
  'DZpw2imOyVN.jpg': '24-hrs-in-nyc.mp4',
  'DanmgzNulTB.jpg': 'spiderman.mp4',
  'DbtDjXzOtMM.jpg': 'renn-jewelry.mp4',
  'CBC-backend-photo.JPG': 'Toronto-tech-week.mp4',
  'core-vizuals-showcase-image.jpg': 'renn-jewelry.mp4'
};

const modal = document.createElement('dialog');
modal.className = 'native-video-modal';
modal.innerHTML = '<button class="native-close" aria-label="Close video">×</button><video controls playsinline preload="metadata"></video><a class="native-source" target="_blank" rel="noopener">Open original post ↗</a>';
document.body.appendChild(modal);

const modalVideo = modal.querySelector('video');
const modalSource = modal.querySelector('.native-source');
modal.querySelector('.native-close').addEventListener('click', () => modal.close());
modal.addEventListener('close', () => { modalVideo.pause(); modalVideo.removeAttribute('src'); modalVideo.load(); });
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });

document.querySelectorAll('.netflix-card, .netflix-play').forEach(card => {
  const image = card.querySelector('img') || document.querySelector('.netflix-hero > img');
  const posterName = image && image.getAttribute('src').split('/').pop();
  const nativeVideo = nativeVideoByPoster[posterName];
  if (!nativeVideo) return;
  card.classList.add('native-preview');
  card.addEventListener('click', event => {
    event.preventDefault();
    modalVideo.src = `videos/${nativeVideo}`;
    modalSource.href = card.href;
    modal.showModal();
    modalVideo.play().catch(() => {});
  });
});
