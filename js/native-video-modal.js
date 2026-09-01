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
  'product-designers-vs-developers.mp4.png': 'product-designers-vs-developers.mp4',
  'asap-rock.jpg': 'asap-rock.mp4',
  'corgi-cafe.jpg': 'corgi-cafe.mp4',
  'nba-g-league.jpg': 'nba-g-league-recap.mp4'
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
  'corgi-cafe.mp4': 'Corgi Cafe',
  'nba-g-league-recap.mp4': 'NBA G League Montreal Recap'
};

const thumbnailByVideo = {
  'product-designers-vs-developers.mp4': 'DaDkTh_u3FL.jpg',
  'inhand-demo-video.mp4': 'inhand-demo-video.jpg',
  '4th-of-july.mp4': 'DanmgzNulTB.jpg',
  'renn-jewelry.mp4': 'DaIzAoYuklT.jpg',
  'spiderman.mp4': 'DbtDjXzOtMM.jpg',
  'dolly-hackathon-demo.mp4': 'DbVvhLrMIWG.jpg',
  'Toronto-tech-week.mp4': 'DZ23zLDxdpp.jpg?v=3',
  'Startup-week.mp4': 'Da0SbkrOvi7.jpg'
};

const sourceUrlByVideo = {
  'product-designers-vs-developers.mp4': 'https://www.instagram.com/jeboyofficial/reel/DaDkTh_u3FL/',
  '4th-of-july.mp4': 'https://www.instagram.com/jeboyofficial/reel/DanmgzNulTB/',
  'renn-jewelry.mp4': 'https://www.instagram.com/jeboyofficial/reel/DaIzAoYuklT/',
  'spiderman.mp4': 'https://www.instagram.com/jeboyofficial/reel/DbtDjXzOtMM/',
  'dolly-hackathon-demo.mp4': 'https://www.instagram.com/dollysetgo/reel/DbVvhLrMIWG/',
  'Toronto-tech-week.mp4': 'https://www.instagram.com/jeboyofficial/reel/DZ23zLDxdpp/',
  'Startup-week.mp4': 'https://www.instagram.com/jeboyofficial/reel/Da0SbkrOvi7/',
  'nba-g-league-recap.mp4': 'https://www.instagram.com/corevizuals/p/DW2EJN2Fg_J/'
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
const founderRow = videoRows[1];
const lifeRow = videoRows[2];
if (techRow) {
  techRow.insertAdjacentHTML('afterbegin', '<a class="netflix-card" href="https://www.instagram.com/jeboymotion/reel/DcU87i9xpJk/"><img src="images/video-thumbs/corgi-cafe.jpg" alt="Corgi Cafe"><span>Corgi Cafe</span></a>');
  techRow.insertBefore(techRow.firstElementChild, techRow.children[2]);
}
if (techRow && founderRow) {
  const inhandCard = techRow.children[2];
  if (inhandCard) founderRow.insertBefore(inhandCard, founderRow.children[2] || null);
}
if (lifeRow) {
  lifeRow.insertAdjacentHTML('beforeend', '<a class="netflix-card" href="videos/asap-rock.mp4"><img src="images/video-thumbs/asap-rock.jpg" alt="ASAP Rocky Recap"><span>ASAP Rocky Recap</span></a>');
}

const coreVizualsVideos = [
  ['1040265031', 'HSD Official Crowdfunding Trailer', 'https://i.vimeocdn.com/video/2078781356-95450ed53ca32dbb370ac13d7e9030ae6c23b0d78e84d5ca750e9b501ade10d0-d_1280x720?region=us'],
  ['1068326841', 'FUEGO FUEGO Teaser Video', 'https://i.vimeocdn.com/video/1996412262-3f2673b7ad4b877d154be7b939ca8c88e0f86907e79545c0421e127d7a6ea2ff-d_1280x720?region=us'],
  ['1089891836', 'Influence Creation 2025 Recap Video', 'https://i.vimeocdn.com/video/2022395890-7af134aa66229bbd68e1e832c8922115d4b8f95d4d251f8aa3481311372cdb2f-d_1280x720?region=us'],
  ['1089893680', 'Fuego Fuego Merch Campaign', 'https://i.vimeocdn.com/video/2022396052-fa66db2ddda95f55d446e8a3d82f4e6230fb4841e66fe7c6611095b9dc7039f3-d_1280x720?region=us'],
  ['1133307986', 'Matrix Video #1', 'https://i.vimeocdn.com/video/2077859270-ca780e43ce294374f95bb71785c3a6fe8b19abb1700ef5ec87443ddf57b4c654-d_1280x720?region=us'],
  ['1133308563', 'Matrix Video #2 (WITH MUSIC)', 'https://i.vimeocdn.com/video/2077859853-c00774fc0ef64f8b9bfe9db224658b2fd65acef28ed515890b3df6f5e7a2ba8c-d_1280x720?region=us'],
  ['1133598951', 'L’Oreal Usine Technology V2', 'https://i.vimeocdn.com/video/2078246330-1dba6e9b30a0faf77f2316fef75b823c536e4e88f36b795ea474ac5c059846fa-d_1280x720?region=us'],
  ['1142577143', "All In 2025 - L'Oreal Groupe Video Recap", 'https://i.vimeocdn.com/video/2090406015-7c24ef7e977ddc11100099be37689739e73a8d2275046d3ffb08c3b87604981a-d_1280x720?region=us'],
  ['1142578333', 'Osheaga 2025 - Interview with the Good Neighbours', 'https://i.vimeocdn.com/video/2090386727-4c08bde7c85f8b5db6576759719c4e039560665ded90b5e4015ea1c8c1c384d6-d_1280x720?region=us'],
  ['1152417787', 'Las Flores Video 2', 'https://i.vimeocdn.com/video/2103976627-cfde4e17384303304eaf3342ee81d7633a6a932b903a899c2a1ef57e66261aac-d_1280x720?region=us'],
  ['1152422800', 'Film to the Moon', 'https://i.vimeocdn.com/video/2103983725-c7b851103dd32bc1684f6f15418e47230561130630fa68511277ca3c3fc496a5-d_1280x720?region=us'],
  ['1152659530', 'Las Flores Video 1', 'https://i.vimeocdn.com/video/2104320311-29c164cc67ff628e00cac6644959f3e3112d86bf8f5aba0f14c3e8ff9a474212-d_1280x720?region=us'],
  ['1152663020', 'Las Flores Video 3', 'https://i.vimeocdn.com/video/2104323425-a4ec1a0b285403e12d3eaec30629888101715d6372c24f4d867ef73dce66275d-d_1280x720?region=us']
];

const soundversationVideos = [
  ['AxBFLMr0cEo', 'Global Club Mix | Global Currency | Soundversation 002', 'https://i.ytimg.com/vi/AxBFLMr0cEo/maxresdefault.jpg'],
  ['VFiGrJuEICw', 'Soulful Afro House Mix | Ethan Tomas | Soundversation 001', 'https://i.ytimg.com/vi/VFiGrJuEICw/maxresdefault.jpg']
];

const clientWorkRow = document.getElementById('client-work-row');
if (clientWorkRow) {
  const vimeoCards = coreVizualsVideos.map(([id, title, thumbnail]) =>
    `<a class="netflix-card vimeo-preview" data-vimeo="${id}" href="https://vimeo.com/${id}" target="_blank" rel="noopener"><img src="${thumbnail}" alt="${title}"><span>${title}</span></a>`
  ).join('');
  const youtubeCards = soundversationVideos.map(([id, title, thumbnail]) =>
    `<a class="netflix-card youtube-preview" data-youtube="${id}" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener"><img src="${thumbnail}" alt="${title}"><span>${title}</span></a>`
  ).join('');
  const nbaCard = '<a class="netflix-card" href="https://www.instagram.com/corevizuals/p/DW2EJN2Fg_J/" target="_blank" rel="noopener"><img src="images/video-thumbs/nba-g-league.jpg?v=2" alt="NBA G League Montreal Recap"><span>NBA G League Montreal Recap</span></a>';
  clientWorkRow.innerHTML = nbaCard + youtubeCards + vimeoCards;
  const asapRockyCard = lifeRow && lifeRow.querySelector('a[href="videos/asap-rock.mp4"]');
  if (asapRockyCard) clientWorkRow.prepend(asapRockyCard);
}

const modal = document.createElement('dialog');
modal.className = 'native-video-modal';
modal.innerHTML = '<button class="native-close" aria-label="Close video">×</button><video controls playsinline preload="metadata"></video><iframe class="vimeo-modal-player" title="Client video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen hidden></iframe><a class="native-source" target="_blank" rel="noopener">Open original post ↗</a>';
document.body.appendChild(modal);

const modalVideo = modal.querySelector('video');
const modalFrame = modal.querySelector('.vimeo-modal-player');
const modalSource = modal.querySelector('.native-source');
modal.querySelector('.native-close').addEventListener('click', () => modal.close());
modal.addEventListener('close', () => { modalVideo.pause(); modalVideo.removeAttribute('src'); modalVideo.load(); modalFrame.removeAttribute('src'); modalFrame.hidden = true; modalVideo.hidden = false; document.dispatchEvent(new CustomEvent('portfolio:video-close')); });
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });

document.querySelectorAll('.netflix-card, .netflix-play').forEach(card => {
  const vimeoId = card.dataset.vimeo;
  const youtubeId = card.dataset.youtube;
  if (vimeoId || youtubeId) {
    card.addEventListener('click', event => {
      event.preventDefault();
      modalVideo.hidden = true;
      modalFrame.hidden = false;
      modalFrame.src = vimeoId
        ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`
        : window.location.protocol === 'file:'
          ? `https://jeboycompuesto.github.io/Portfolio/youtube-player.html?video=${youtubeId}`
          : `youtube-player.html?video=${youtubeId}`;
      modalSource.href = card.href;
      modalSource.textContent = vimeoId ? 'Open on Vimeo ↗' : 'Open on YouTube ↗';
      document.dispatchEvent(new CustomEvent('portfolio:video-open'));
      modal.showModal();
    });
    return;
  }
  const image = card.querySelector('img') || document.querySelector('.netflix-hero > img');
  const posterName = image && image.getAttribute('src').split('/').pop().split('?')[0];
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
    modalVideo.hidden = false;
    modalFrame.hidden = true;
    modalSource.href = sourceUrlByVideo[nativeVideo] || card.href;
    modalSource.textContent = 'Open original post ↗';
    document.dispatchEvent(new CustomEvent('portfolio:video-open'));
    modal.showModal();
    modalVideo.play().catch(() => {});
  });
});

if (feature) {
  const heroImage = feature.querySelector('img');
  const heroVideo = document.createElement('video');
  heroVideo.src = 'videos/product-designers-vs-developers.mp4';
  heroVideo.autoplay = true;
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.loop = true;
  heroVideo.playsInline = true;
  heroVideo.preload = 'auto';
  heroVideo.setAttribute('autoplay', '');
  heroVideo.setAttribute('muted', '');
  heroVideo.setAttribute('playsinline', '');
  heroVideo.setAttribute('webkit-playsinline', '');
  heroVideo.setAttribute('aria-label', 'Product Designers vs Developers preview');
  heroImage.replaceWith(heroVideo);
  const playHeroPreview = () => heroVideo.play().catch(() => {});
  heroVideo.addEventListener('canplay', playHeroPreview, { once: true });
  document.addEventListener('touchstart', playHeroPreview, { once: true, passive: true });
  document.addEventListener('pointerdown', playHeroPreview, { once: true, passive: true });
  playHeroPreview();
}
