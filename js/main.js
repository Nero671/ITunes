import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');
const videoPlayer = document.querySelector('.video-player');
const audioPlayer = document.querySelector('.audio-player');


const audio = new Audio();
audio.type = 'audio/aac';




const deactivationPlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach(item => item.classList.remove('active'))
  playerBlock.forEach(item => item.classList.remove('active'))
  videoPlayer.pause();
  audioPlayer.pause();
  
}

playerBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    deactivationPlayer();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');
  });
});

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();