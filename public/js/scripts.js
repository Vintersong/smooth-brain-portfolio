// Minimal JS to inject iframe src on modal open (click-to-play) and remove on close
document.addEventListener('DOMContentLoaded', function(){
  // Random word pool for vaporwave street effect
  const streetWords = [
    'frontend-dev', 'synergy-architect', 'blockchain-evangelist', 'agile-whisperer',
    'disruption-catalyst', 'thought-leader', 'pivot-specialist', 'stakeholder-alignment-guru',
    'paradigm-shifter', 'circle-back-coordinator', 'chief-vibes-officer', 'innovation-ninja',
    'culture-fit-assessor', 'meeting-about-meetings-lead', 'actionable-insights-generator',
    'low-hanging-fruit-picker', 'deep-dive-facilitator', 'bandwidth-allocator',
    'synergy-maximizer', 'deliverables-optimizer', 'professional-nodder', 'reply-all-survivor',
    'linkedin-influencer', 'corporate-retreat-enthusiast', 'mandatory-fun-coordinator'
  ];
  
  // Function to get random word from array
  function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Create vaporwave street effect - words getting smaller
  const streetContainer = document.querySelector('.hero-street');
  if (streetContainer) {
    const numLines = 8; // Number of lines to create
    const startSize = 1; // Starting font size in rem
    const sizeDecrement = 0.12; // How much smaller each line gets
    
    for (let i = 0; i < numLines; i++) {
      const line = document.createElement('div');
      line.className = 'street-line';
      const fontSize = startSize - (i * sizeDecrement);
      line.style.fontSize = fontSize + 'rem';
      line.style.marginBottom = '0.15rem';
      line.style.opacity = Math.max(0.3, 1 - (i * 0.1)); // Fade out as they get smaller
      line.textContent = '.' + getRandomWord(streetWords);
      streetContainer.appendChild(line);
    }
  }

  // Find all modals
  const videoIframes = document.querySelectorAll('.video-embed');
  const modals = document.querySelectorAll('.modal');

  modals.forEach(modalEl => {
    modalEl.addEventListener('show.bs.modal', function (event) {
      // On show, set iframe src from data-src
      modalEl.querySelectorAll('.video-embed').forEach(iframe => {
        const src = iframe.getAttribute('data-src');
        if (src) iframe.setAttribute('src', src);
      });
    });

    modalEl.addEventListener('hide.bs.modal', function (event) {
      // On hide, remove src so playback stops
      modalEl.querySelectorAll('.video-embed').forEach(iframe => {
        iframe.removeAttribute('src');
      });
    });
  });

  // Optional: smooth scroll for internal nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Only for same-page anchors
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

});
