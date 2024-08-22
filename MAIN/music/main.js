document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('your-audio-file.mp3'); // Musiqi faylınızın yolunu qeyd edin
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const progress = document.getElementById('progress');

    playButton.addEventListener('click', () => {
        audio.play();
        playButton.classList.add('hidden');
        pauseButton.classList.remove('hidden');
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
        playButton.classList.remove('hidden');
        pauseButton.classList.add('hidden');
    });

    prevButton.addEventListener('click', () => {
        // Previous track logic here
    });

    nextButton.addEventListener('click', () => {
        // Next track logic here
    });

    audio.addEventListener('timeupdate', () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });

    progress.addEventListener('input', () => {
        const time = (progress.value / 100) * audio.duration;
        audio.currentTime = time;
    });
});