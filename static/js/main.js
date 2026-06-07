// main.js — Spendly landing interactions

(function () {
    const VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1';

    const modal  = document.getElementById('videoModal');
    const frame  = document.getElementById('videoFrame');
    const opener = document.getElementById('howItWorksBtn');

    if (!modal || !frame || !opener) return;

    const open = () => {
        frame.src = VIDEO_URL;        // start playback
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
    };

    const close = () => {
        frame.src = '';               // stop playback + kill audio
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    };

    opener.addEventListener('click', (e) => {
        e.preventDefault();
        open();
    });

    modal.addEventListener('click', (e) => {
        if (e.target.matches('[data-close]')) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
    });
})();
