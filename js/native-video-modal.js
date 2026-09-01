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
  'core-vizuals-showcase-image.jpg': 'renn-jewelry.mp4',
  'product-designers-vs-developers.mp4.png': 'product-designers-vs-developers.mp4'
};

const originalTitles = {
  '4th-of-july.mp4': '4th of July',
  '24-hrs-in-nyc.mp4': '24 Hrs in NYC',
  'dolly-hackathon-demo.mp4': 'Dolly Hackathon Demo',
  'inhand-demo-video.mp4': 'Inhand Demo Video',
  'product-designers-vs-developers.mp4': 'Product Designers vs Developers',
  'renn-jewelry.mp4': 'Renn Jewelry',
  'spiderman.mp4': 'Spiderman',
  'Startup-week.mp4': 'Startup Week',
  'Toronto-tech-week.mp4': 'Toronto Tech Week'
};

const feature = document.querySelector('.netflix-hero');
if (feature) {
  feature.querySelector('img').src = 'images/video-posters/product-designers-vs-developers.mp4.png';
  feature.querySelector('img').alt = 'Product Designers vs Developers';
  feature.querySelector('h1').textContent = originalTitles['product-designers-vs-developers.mp4'];
  feature.querySelector('.netflix-hero-content > p:not(.netflix-eyebrow)').textContent = 'A native portfolio video by Jeboy Compuesto.';
  feature.querySelector('.netflix-play').href = 'videos/product-designers-vs-developers.mp4';
}

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
  image.src = `images/video-posters/${nativeVideo}.png`;
  const label = card.querySelector('span');
  if (label) label.textContent = originalTitles[nativeVideo];
  card.classList.add('native-preview');
  card.addEventListener('click', event => {
    event.preventDefault();
    modalVideo.src = `videos/${nativeVideo}`;
    modalSource.href = card.href;
    modal.showModal();
    modalVideo.play().catch(() => {});
  });
});
