const audioContext = new (window.AudioContext || window.webkitAudioContext)();

class Sound {
  constructor(buffer) {
    this.buffer = buffer;
  }

  play() {
    const source = audioContext.createBufferSource();
    source.buffer = this.buffer;
    source.connect(audioContext.destination);
    source.start(0);
    return source;
  }
}

const SOUND_URIS = {
  background: "audio/background.mp3",
  jump: "audio/jump.mp3",
  gravityReverse: "audio/gravity-reverse.mp3"
};

const sounds = {};

// Create an AudioContext instance for this sound
// Create a buffer for the incoming sound content
// Create the XHR which will grab the audio contents
const loadAudio = (key, uri) => {
  const request = new XMLHttpRequest();
  // Set the audio file src here
  request.open("GET", uri, true);
  // Setting the responseType to arraybuffer sets up the audio decoding
  request.responseType = "arraybuffer";
  request.onload = function() {
    // Decode the audio once the require is complete
    audioContext.decodeAudioData(
      request.response,
      function(buffer) {
        sounds[key] = new Sound(buffer);
      },
      function(e) {
        console.log("Audio error! ", e);
      }
    );
  };
  // Send the request which kicks off
  request.send();
};

for (const key of Object.keys(SOUND_URIS)) {
  loadAudio(key, SOUND_URIS[key]);
}

export default sounds;
