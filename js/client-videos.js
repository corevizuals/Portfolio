const clientVideoIds = [
  '1040265031', '1068326841', '1089891836', '1089893680', '1133307986',
  '1133308563', '1133598951', '1142577143', '1142578333', '1152417207',
  '1152417329', '1152417382', '1152417787', '1152422800', '1152659530',
  '1152663020', '827679214', '838898372', '881138947', '882350750'
];

const clientGrid = document.getElementById('client-video-grid');
if (clientGrid) {
  clientGrid.innerHTML = clientVideoIds.map((id, index) => `
    <article class="collection-item reveal show">
      <div class="collection-video">
        <iframe src="https://player.vimeo.com/video/${id}?dnt=1&title=0&byline=0&portrait=0"
          title="Core Vizuals client video ${index + 1}"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="collection-body">
        <h2>Client production ${String(index + 1).padStart(2, '0')}</h2>
        <p>Watch here, or explore the full Core Vizuals production library.</p>
      </div>
    </article>`).join('');
}
