const clientVideos = [
  ['vimeo', '1040265031', 'HSD Official Crowdfunding Trailer'],
  ['vimeo', '1068326841', 'FUEGO FUEGO Teaser Video'],
  ['vimeo', '1089891836', 'Influence Creation 2025 Recap Video'],
  ['vimeo', '1089893680', 'Fuego Fuego Merch Campaign'],
  ['vimeo', '1133307986', 'Matrix Video #1'],
  ['vimeo', '1133308563', 'Matrix Video #2 (WITH MUSIC)'],
  ['vimeo', '1133598951', 'L’Oreal Usine Technology V2'],
  ['vimeo', '1142577143', "All In 2025 - L'Oreal Groupe Video Recap"],
  ['vimeo', '1142578333', 'Osheaga 2025 - Interview with the Good Neighbours'],
  ['vimeo', '1152417787', 'Las Flores Video 2'],
  ['vimeo', '1152422800', 'Film to the Moon'],
  ['vimeo', '1152659530', 'Las Flores Video 1'],
  ['vimeo', '1152663020', 'Las Flores Video 3']
];

const clientGrid = document.getElementById('client-video-grid');
if (clientGrid) {
  const youtubePlayer = id => location.protocol === 'file:'
    ? `https://jeboycompuesto.github.io/Portfolio/youtube-player.html?video=${id}`
    : `youtube-player.html?video=${id}`;

  const featuredWork = `
    <article class="collection-item reveal show"><div class="collection-video"><video controls playsinline preload="metadata" poster="images/video-thumbs/asap-rock.jpg" src="videos/asap-rock.mp4"></video></div><div class="collection-body"><h2>ASAP Rocky Recap</h2><p>Event recap and culture coverage.</p></div></article>
    <article class="collection-item reveal show"><div class="collection-video"><video controls playsinline preload="metadata" poster="images/video-thumbs/nba-g-league.jpg?v=2" src="videos/nba-g-league-recap.mp4"></video></div><div class="collection-body"><h2>NBA G League Montreal Recap</h2><p>Five moments from the NBA G League in Montreal.</p></div></article>
    <article class="collection-item reveal show"><div class="collection-video"><iframe src="${youtubePlayer('AxBFLMr0cEo')}" title="Global Club Mix | Global Currency | Soundversation 002" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div><div class="collection-body"><h2>Global Club Mix | Global Currency | Soundversation 002</h2><p>Soundversation music production.</p></div></article>
    <article class="collection-item reveal show"><div class="collection-video"><iframe src="${youtubePlayer('VFiGrJuEICw')}" title="Soulful Afro House Mix | Ethan Tomas | Soundversation 001" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div><div class="collection-body"><h2>Soulful Afro House Mix | Ethan Tomas | Soundversation 001</h2><p>Soundversation music production.</p></div></article>`;

  const vimeoWork = clientVideos.map(([provider, id, title]) => `
    <article class="collection-item reveal show">
      <div class="collection-video"><iframe src="https://player.vimeo.com/video/${id}?dnt=1&title=0&byline=0&portrait=0" title="${title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
      <div class="collection-body"><h2>${title}</h2><p>Core Vizuals client production.</p></div>
    </article>`).join('');

  clientGrid.innerHTML = featuredWork + vimeoWork;
}
