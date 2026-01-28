// ==========================================
// GESTION DE LA PLAYLIST MUSICALE
// ==========================================

let currentSongIndex = 0;

// Éléments du lecteur
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playerToggle = document.getElementById('playerToggle');
const playerContent = document.getElementById('playerContent');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');
const progress = document.getElementById('progress');
const playlistContainer = document.getElementById('playlistContainer');

// Initialiser la playlist
function initPlaylist() {
    // Définir le volume à 100% et mute pour éviter les restrictions du navigateur
    audioPlayer.volume = 1;
    audioPlayer.muted = true;
    
    playlistContainer.innerHTML = '';
    playlist.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.className = 'playlist-item';
        if (index === currentSongIndex) {
            songElement.classList.add('active');
        }
        songElement.innerHTML = `
            <span class="song-info">
                <span class="song-title">${song.title}</span>
                <span class="song-artist">${song.artist}</span>
            </span>
        `;
        songElement.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(index);
            audioPlayer.currentTime = 0; // Redémarrer depuis le début
            audioPlayer.muted = false; // Activer le son
            audioPlayer.play();
            updatePlayBtn();
        });
        playlistContainer.appendChild(songElement);
    });
}

// Charger une chanson
function loadSong(index) {
    if (playlist[index]) {
        const song = playlist[index];
        audioPlayer.src = song.url;
        nowPlayingTitle.textContent = song.title;
        nowPlayingArtist.textContent = song.artist;
        updatePlaylistUI();
        
        // Afficher les erreurs de chargement
        audioPlayer.addEventListener('error', () => {
            console.error('Erreur de chargement audio:', song.url);
            console.error('Code d\'erreur:', audioPlayer.error);
        }, { once: true });
    }
}

// Mettre à jour l'interface de la playlist
function updatePlaylistUI() {
    const items = document.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentSongIndex) {
            item.classList.add('active');
        }
    });
}

// Mettre à jour le bouton play/pause
function updatePlayBtn() {
    if (audioPlayer.paused) {
        playBtn.textContent = '▶';
    } else {
        playBtn.textContent = '⏸';
    }
}

// Contrôle: Play/Pause
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.muted = false; // Activer le son au play
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    updatePlayBtn();
});

// Contrôle: Chanson précédente
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    audioPlayer.currentTime = 0; // Redémarrer depuis le début
    audioPlayer.muted = false; // Activer le son
    audioPlayer.play();
    updatePlayBtn();
});

// Contrôle: Chanson suivante
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    audioPlayer.currentTime = 0; // Redémarrer depuis le début
    audioPlayer.muted = false; // Activer le son
    audioPlayer.play();
    updatePlayBtn();
});

// Basculer la visibilité du lecteur
playerToggle.addEventListener('click', () => {
    playerContent.classList.toggle('hidden');
    playerToggle.textContent = playerContent.classList.contains('hidden') ? '+' : '−';
});

// Mise à jour de la barre de progression
audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = percent + '%';
    }
});

// Passer à la chanson suivante à la fin
audioPlayer.addEventListener('ended', () => {
    nextBtn.click();
});

// Initialiser la playlist au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    initPlaylist();
});
