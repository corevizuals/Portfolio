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
  'product-designers-vs-developers.mp4.png': 'product-designers-vs-developers.mp4',
  'asap-rock.jpg': 'asap-rock.mp4',
  'corgi-cafe.jpg': 'corgi-cafe.mp4'
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
  'Toronto-tech-week.mp4': 'Toronto Tech Week',
  'asap-rock.mp4': 'ASAP Rocky Recap',
  'corgi-cafe.mp4': 'Corgi Cafe'
};

const thumbnailByVideo = {
  'product-designers-vs-developers.mp4': 'DaDkTh_u3FL.jpg',
  'inhand-demo-video.mp4': 'inhand-demo-video.png',
  '4th-of-july.mp4': 'DanmgzNulTB.jpg',
  'renn-jewelry.mp4': 'DaIzAoYuklT.jpg',
  'spiderman.mp4': 'DbtDjXzOtMM.jpg',
  'dolly-hackathon-demo.mp4': 'DbVvhLrMIWG.jpg',
  'Toronto-tech-week.mp4': 'DZ23zLDxdpp.jpg',
  'Startup-week.mp4': 'Da0SbkrOvi7.jpg'
};

const sourceUrlByVideo = {
  'product-designers-vs-developers.mp4': 'https://www.instagram.com/jeboyofficial/reel/DaDkTh_u3FL/',
  '4th-of-july.mp4': 'https://www.instagram.com/jeboyofficial/reel/DanmgzNulTB/',
  'renn-jewelry.mp4': 'https://www.instagram.com/jeboyofficial/reel/DaIzAoYuklT/',
  'spiderman.mp4': 'https://www.instagram.com/jeboyofficial/reel/DbtDjXzOtMM/',
  'dolly-hackathon-demo.mp4': 'https://www.instagram.com/dollysetgo/reel/DbVvhLrMIWG/',
  'Toronto-tech-week.mp4': 'https://www.instagram.com/jeboyofficial/reel/DZ23zLDxdpp/',
  'Startup-week.mp4': 'https://www.instagram.com/jeboyofficial/reel/Da0SbkrOvi7/'
};

const feature = document.querySelector('.netflix-hero');
if (feature) {
  feature.querySelector('img').src = 'images/video-thumbs/DaDkTh_u3FL.jpg';
  feature.querySelector('img').alt = 'Product Designers vs Developers';
  feature.querySelector('h1').textContent = originalTitles['product-designers-vs-developers.mp4'];
  feature.querySelector('.netflix-hero-content > p:not(.netflix-eyebrow)').textContent = 'A native portfolio video by Jeboy Compuesto.';
  feature.querySelector('.netflix-play').href = 'videos/product-designers-vs-developers.mp4';
}

const videoRows = document.querySelectorAll('.netflix-row');
const techRow = videoRows[0];
const lifeRow = videoRows[1];
const founderRow = videoRows[2];
if (techRow) {
  techRow.insertAdjacentHTML('afterbegin', '<a class="netflix-card" href="https://www.instagram.com/jeboymotion/reel/DcU87i9xpJk/"><img src="images/video-thumbs/corgi-cafe.jpg" alt="Corgi Cafe"><span>Corgi Cafe</span></a>');
}
if (techRow && founderRow) {
  const inhandCard = techRow.children[2];
  if (inhandCard) founderRow.insertBefore(inhandCard, founderRow.children[1] || null);
}
if (lifeRow) {
  lifeRow.insertAdjacentHTML('beforeend', '<a class="netflix-card" href="videos/asap-rock.mp4"><img src="images/video-thumbs/asap-rock.jpg" alt="ASAP Rocky Recap"><span>ASAP Rocky Recap</span></a>');
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
  let nativeVideo = nativeVideoByPoster[posterName];
  if (card.classList.contains('netflix-play')) nativeVideo = 'product-designers-vs-developers.mp4';
  if (!nativeVideo) return;
  if (['inhand-demo-video.mp4', '4th-of-july.mp4', 'spiderman.mp4', 'renn-jewelry.mp4', 'Startup-week.mp4'].includes(nativeVideo)) card.classList.remove('portrait');
  if (thumbnailByVideo[nativeVideo]) image.src = `images/video-thumbs/${thumbnailByVideo[nativeVideo]}`;
  const label = card.querySelector('span');
  if (label) label.textContent = originalTitles[nativeVideo];
  card.classList.add('native-preview');
  card.addEventListener('click', event => {
    event.preventDefault();
    modalVideo.src = `videos/${nativeVideo}`;
    modalSource.href = sourceUrlByVideo[nativeVideo] || card.href;
    modal.showModal();
    modalVideo.play().catch(() => {});
  });
});

const visibleTitles = [
  'Product Designers vs Developers', 'Corgi Cafe', 'Dolly Hackathon Demo', 'Startup Week',
  '4th of July', '24 Hrs in NYC', 'Spiderman', 'Renn Jewelry', 'ASAP Rocky Recap',
  'Startup Week', 'Inhand Demo Video', 'Toronto Tech Week', 'Dolly Hackathon Demo', 'Renn Jewelry'
];

document.querySelectorAll('.netflix-card').forEach((card, index) => {
  const label = card.querySelector('span');
  if (label && visibleTitles[index]) label.textContent = visibleTitles[index];
});

if (feature) {
  const heroImage = feature.querySelector('img');
  const heroVideo = document.createElement('video');
  heroVideo.src = 'videos/product-designers-vs-developers.mp4';
  heroVideo.autoplay = true;
  heroVideo.muted = true;
  heroVideo.loop = true;
  heroVideo.playsInline = true;
  heroVideo.setAttribute('aria-label', 'Product Designers vs Developers preview');
  heroImage.replaceWith(heroVideo);
  heroVideo.play().catch(() => {});
}
