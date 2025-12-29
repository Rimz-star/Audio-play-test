document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    let isPlaying = false;

    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    // Optional: Update button text based on audio state
    audioPlayer.addEventListener('ended', function() {
        playPauseBtn.textContent = 'Play';
        isPlaying = false;
    });
});
