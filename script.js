// Müzik çalma kontrolü
const playButton = document.getElementById('playButton');
const musicPlayer = document.getElementById('musicPlayer');

playButton.addEventListener('click', () => {
    if (musicPlayer.paused) {
        musicPlayer.play();
        playButton.textContent = 'Müziği Durdur ✋';
    } else {
        musicPlayer.pause();
        playButton.textContent = 'Şarkımızı Dinle 🎶';
    }
});
