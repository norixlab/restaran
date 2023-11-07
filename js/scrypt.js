const playBtn = document.querySelector('.video__play-btn');
const video = document.querySelector('#video');
const poster = document.querySelector('.video__poster');

playBtn.addEventListener('click', () => {
    video.play();
});
video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();

    playBtn.classList.toggle('hidden');
});

video.addEventListener('ended', () => {
    playBtn.classList.remove('hidden');
    // poster.style.display = 'block';
    poster.style.opacity = '1';
    poster.style.pointerEvents = 'auto';
});

video.addEventListener('pause', () => {
    // poster.style.display = 'block';
    poster.style.opacity = '1';
    poster.style.pointerEvents = 'auto';
});

video.addEventListener('play', () => {
    playBtn.classList.add('hidden');
    // poster.style.display = 'none';
    poster.style.opacity = '0';
    poster.style.pointerEvents = 'none';
});
