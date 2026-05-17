// 1. LÓGICA DEL MODO CLARO / OSCURO
const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;

themeBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        themeBtn.textContent = 'MODO OSCURO';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeBtn.textContent = 'MODO CLARO';
    }
});

// 2. LÓGICA DE ANIMACIONES (FADE IN AL HACER SCROLL)
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// 3. LÓGICA DEL REPRODUCTOR DE AUDIO (EFECTO WOW)
const audioBtn = document.getElementById('play-audio-btn');
const audioSample = document.getElementById('audio-sample');

if(audioBtn && audioSample) {
    audioBtn.addEventListener('click', () => {
        if (audioSample.paused) {
            audioSample.play();
            audioBtn.textContent = '🔊 PAUSAR AUDIO';
        } else {
            audioSample.pause();
            audioBtn.textContent = '▶ ESCUCHAR EL LATIDO';
        }
    });
}
