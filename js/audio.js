const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);

export const mute = () => {
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
};

export const unmute = () => {
  gainNode.gain.setValueAtTime(0.8, audioContext.currentTime);
};

class Sound {
  constructor(uri) {
    this.loadAudio(uri);
    this.buffer = null;
  }

  loadAudio(uri) {
    const request = new XMLHttpRequest();
    request.open("GET", uri, true);
    request.responseType = "arraybuffer";
    request.onload = () => {
      audioContext.decodeAudioData(
        request.response,
        buffer => {
          this.buffer = buffer;
        },
        e => {
          console.log("Audio error! ", e);
        }
      );
    };
    request.send();
  }

  play() {
    if (this.buffer === null) return;

    const source = audioContext.createBufferSource();
    source.buffer = this.buffer;
    source.connect(gainNode);
    source.start(0);

    return source;
  }
}

const sounds = {
  background: new Sound("audio/background.mp3"),
  jump: new Sound("audio/jump.mp3"),
  gravityReverse: new Sound("audio/gravity-reverse.mp3")
};

export default sounds;
