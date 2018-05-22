/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var randRange = exports.randRange = function randRange(start, end) {
  return start + Math.floor(Math.random() * (end - start));
};

var rangeOverlap = exports.rangeOverlap = function rangeOverlap(range1, range2) {
  if (range1[0] > range2[0]) {
    if (range1[0] < range2[1]) {
      return range2[1] - range1[0];
    }
  } else if (range1[1] > range2[0]) {
    return range2[0] - range1[1];
  }
  return 0;
};

var drawFlipped = exports.drawFlipped = function drawFlipped(ctx, image, sX, sY, sH, sW, x, y, h, w) {
  var reverse = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  if (reverse) {
    ctx.scale(-1, 1);
    ctx.translate(0, 10);
  }
  ctx.rotate(Math.PI);
  ctx.drawImage(image, sX, sY, sH, sW, -w / 2, -h / 2, h, w);
  ctx.restore();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loadSprites = exports.loadSprites = function loadSprites(cb) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(spriteLocations)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var spriteType = _step.value;

      var imageEl = document.createElement("img");
      imageEl.src = spriteLocations[spriteType].src;
      spriteLocations[spriteType].imageEl = imageEl;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  setTimeout(cb, 1000);
};

var spriteLocations = exports.spriteLocations = {
  player: {
    src: "img/player_spritesheet.png",
    locations: {
      duck: [365, 98, 69, 71],
      front: [0, 196, 66, 92],
      hurt: [438, 0, 69, 92],
      jump: [438, 93, 67, 94],
      stand: [67, 196, 66, 92],
      run: [[0, 0, 72, 97], [73, 0, 72, 97], [146, 0, 72, 97], [0, 98, 72, 97], [73, 98, 72, 97], [146, 98, 72, 97], [219, 0, 72, 97], [292, 0, 72, 97], [219, 98, 72, 97], [365, 0, 72, 97], [292, 98, 72, 97]]
    }
  },
  background: {
    src: "img/background/parallax-space-background.png"
  },
  backgroundStars: {
    src: "img/background/parallax-space-stars.png"
  },
  backgroundFarPlanets: {
    src: "img/background/parallax-space-far-planets.png"
  },
  backgroundRingPlanet: {
    src: "img/background/parallax-space-ring-planet.png"
  },
  backgroundBigPlanet: {
    src: "img/background/parallax-space-big-planet.png"
  },
  environment: {
    src: "img/tiles_spritesheet.png",
    locations: {
      box: [0, 864, 70, 70],
      boxAlt: [0, 792, 70, 70],
      boxCoin: [0, 720, 70, 70],
      boxCoinAlt: [0, 576, 70, 70],
      boxCoinAlt_disabled: [0, 504, 70, 70],
      boxCoin_disabled: [0, 648, 70, 70],
      boxEmpty: [0, 432, 70, 70],
      boxExplosive: [0, 360, 70, 70],
      boxExplosiveAlt: [0, 216, 70, 70],
      boxExplosive_disabled: [0, 288, 70, 70],
      boxItem: [0, 144, 70, 70],
      boxItemAlt: [0, 0, 70, 70],
      boxItemAlt_disabled: [432, 432, 70, 70],
      boxItem_disabled: [0, 72, 70, 70],
      boxWarning: [72, 648, 70, 70],
      brickWall: [216, 0, 70, 70],
      bridge: [216, 72, 70, 70],
      bridgeLogs: [288, 720, 70, 70],
      castle: [288, 792, 70, 70],
      castleCenter: [504, 288, 70, 70],
      castleCenter_rounded: [504, 720, 70, 70],
      castleCliffLeft: [504, 792, 70, 70],
      castleCliffLeftAlt: [648, 720, 70, 70],
      castleCliffRight: [648, 792, 70, 70],
      castleCliffRightAlt: [792, 288, 70, 70],
      castleHalf: [792, 360, 70, 70],
      castleHalfLeft: [432, 720, 70, 70],
      castleHalfMid: [648, 648, 70, 70],
      castleHalfRight: [792, 648, 70, 70],
      castleHillLeft: [648, 576, 70, 70],
      castleHillLeft2: [792, 576, 70, 70],
      castleHillRight: [792, 504, 70, 70],
      castleHillRight2: [792, 432, 70, 70],
      castleLedgeLeft: [856, 868, 5, 22],
      castleLedgeRight: [842, 868, 5, 22],
      castleLeft: [792, 216, 70, 70],
      castleMid: [792, 144, 70, 70],
      castleRight: [792, 72, 70, 70],
      dirt: [792, 0, 70, 70],
      dirtCenter: [720, 864, 70, 70],
      dirtCenter_rounded: [720, 792, 70, 70],
      dirtCliffLeft: [720, 720, 70, 70],
      dirtCliffLeftAlt: [720, 648, 70, 70],
      dirtCliffRight: [720, 576, 70, 70],
      dirtCliffRightAlt: [720, 504, 70, 70],
      dirtHalf: [720, 432, 70, 70],
      dirtHalfLeft: [720, 360, 70, 70],
      dirtHalfMid: [720, 288, 70, 70],
      dirtHalfRight: [720, 216, 70, 70],
      dirtHillLeft: [720, 144, 70, 70],
      dirtHillLeft2: [720, 72, 70, 70],
      dirtHillRight: [720, 0, 70, 70],
      dirtHillRight2: [648, 864, 70, 70],
      dirtLedgeLeft: [842, 892, 5, 18],
      dirtLedgeRight: [842, 912, 5, 18],
      dirtLeft: [504, 432, 70, 70],
      dirtMid: [504, 360, 70, 70],
      dirtRight: [648, 504, 70, 70],
      door_closedMid: [648, 432, 70, 70],
      door_closedTop: [648, 360, 70, 70],
      door_openMid: [648, 288, 70, 70],
      door_openTop: [648, 216, 70, 70],
      fence: [648, 144, 70, 70],
      fenceBroken: [648, 72, 70, 70],
      grass: [648, 0, 70, 70],
      grassCenter: [576, 864, 70, 70],
      grassCenter_rounded: [576, 792, 70, 70],
      grassCliffLeft: [576, 720, 70, 70],
      grassCliffLeftAlt: [576, 648, 70, 70],
      grassCliffRight: [576, 576, 70, 70],
      grassCliffRightAlt: [576, 504, 70, 70],
      grassHalf: [576, 432, 70, 70],
      grassHalfLeft: [576, 360, 70, 70],
      grassHalfMid: [576, 288, 70, 70],
      grassHalfRight: [576, 216, 70, 70],
      grassHillLeft: [576, 144, 70, 70],
      grassHillLeft2: [576, 72, 70, 70],
      grassHillRight: [576, 0, 70, 70],
      grassHillRight2: [504, 864, 70, 70],
      grassLedgeLeft: [849, 868, 5, 24],
      grassLedgeRight: [849, 894, 5, 24],
      grassLeft: [504, 648, 70, 70],
      grassMid: [504, 576, 70, 70],
      grassRight: [504, 504, 70, 70],
      hill_large: [842, 720, 48, 146],
      hill_largeAlt: [864, 0, 48, 146],
      hill_small: [792, 828, 48, 106],
      hill_smallAlt: [792, 720, 48, 106],
      ladder_mid: [504, 144, 70, 70],
      ladder_top: [504, 72, 70, 70],
      liquidLava: [504, 0, 70, 70],
      liquidLavaTop: [432, 864, 70, 70],
      liquidLavaTop_mid: [432, 792, 70, 70],
      liquidWater: [504, 216, 70, 70],
      liquidWaterTop: [432, 648, 70, 70],
      liquidWaterTop_mid: [432, 576, 70, 70],
      lock_blue: [432, 504, 70, 70],
      lock_green: [72, 576, 70, 70],
      lock_red: [432, 360, 70, 70],
      lock_yellow: [432, 288, 70, 70],
      rockHillLeft: [432, 216, 70, 70],
      rockHillRight: [432, 144, 70, 70],
      ropeAttached: [432, 72, 70, 70],
      ropeHorizontal: [432, 0, 70, 70],
      ropeVertical: [360, 864, 70, 70],
      sand: [360, 792, 70, 70],
      sandCenter: [576, 864, 70, 70],
      sandCenter_rounded: [576, 792, 70, 70],
      sandCliffLeft: [360, 720, 70, 70],
      sandCliffLeftAlt: [360, 648, 70, 70],
      sandCliffRight: [360, 576, 70, 70],
      sandCliffRightAlt: [360, 504, 70, 70],
      sandHalf: [360, 432, 70, 70],
      sandHalfLeft: [360, 360, 70, 70],
      sandHalfMid: [360, 288, 70, 70],
      sandHalfRight: [360, 216, 70, 70],
      sandHillLeft: [360, 144, 70, 70],
      sandHillLeft2: [360, 72, 70, 70],
      sandHillRight: [360, 0, 70, 70],
      sandHillRight2: [288, 864, 70, 70],
      sandLedgeLeft: [856, 892, 5, 18],
      sandLedgeRight: [856, 912, 5, 18],
      sandLeft: [288, 648, 70, 70],
      sandMid: [288, 576, 70, 70],
      sandRight: [288, 504, 70, 70],
      sign: [288, 432, 70, 70],
      signExit: [288, 360, 70, 70],
      signLeft: [288, 288, 70, 70],
      signRight: [288, 216, 70, 70],
      snow: [288, 144, 70, 70],
      snowCenter: [720, 864, 70, 70],
      snowCenter_rounded: [288, 72, 70, 70],
      snowCliffLeft: [288, 0, 70, 70],
      snowCliffLeftAlt: [216, 864, 70, 70],
      snowCliffRight: [216, 792, 70, 70],
      snowCliffRightAlt: [216, 720, 70, 70],
      snowHalf: [216, 648, 70, 70],
      snowHalfLeft: [216, 576, 70, 70],
      snowHalfMid: [216, 504, 70, 70],
      snowHalfRight: [216, 432, 70, 70],
      snowHillLeft: [216, 360, 70, 70],
      snowHillLeft2: [216, 288, 70, 70],
      snowHillRight: [216, 216, 70, 70],
      snowHillRight2: [216, 144, 70, 70],
      snowLedgeLeft: [863, 868, 5, 18],
      snowLedgeRight: [863, 888, 5, 18],
      snowLeft: [144, 864, 70, 70],
      snowMid: [144, 792, 70, 70],
      snowRight: [144, 720, 70, 70],
      stone: [144, 648, 70, 70],
      stoneCenter: [144, 576, 70, 70],
      stoneCenter_rounded: [144, 504, 70, 70],
      stoneCliffLeft: [144, 432, 70, 70],
      stoneCliffLeftAlt: [144, 360, 70, 70],
      stoneCliffRight: [144, 288, 70, 70],
      stoneCliffRightAlt: [144, 216, 70, 70],
      stoneHalf: [144, 144, 70, 70],
      stoneHalfLeft: [144, 72, 70, 70],
      stoneHalfMid: [144, 0, 70, 70],
      stoneHalfRight: [72, 864, 70, 70],
      stoneHillLeft2: [72, 792, 70, 70],
      stoneHillRight2: [72, 720, 70, 70],
      stoneLedgeLeft: [863, 908, 5, 24],
      stoneLedgeRight: [864, 148, 5, 24],
      stoneLeft: [72, 504, 70, 70],
      stoneMid: [72, 432, 70, 70],
      stoneRight: [72, 360, 70, 70],
      stoneWall: [72, 288, 70, 70],
      tochLit: [72, 216, 70, 70],
      tochLit2: [72, 144, 70, 70],
      torch: [72, 72, 70, 70],
      window: [72, 0, 70, 70]
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);

var mute = exports.mute = function mute() {
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
};

var unmute = exports.unmute = function unmute() {
  gainNode.gain.setValueAtTime(0.8, audioContext.currentTime);
};

var Sound = function () {
  function Sound(uri) {
    _classCallCheck(this, Sound);

    this.promise = this.loadAudio(uri);
    this.buffer = null;
  }

  _createClass(Sound, [{
    key: "loadAudio",
    value: function loadAudio(uri) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open("GET", uri, true);
        request.responseType = "arraybuffer";
        request.onload = function () {
          audioContext.decodeAudioData(request.response, function (buffer) {
            _this.buffer = buffer;
            resolve();
          }, reject);
        };
        request.onerror = reject;
        request.send();
      });
    }
  }, {
    key: "play",
    value: function play() {
      if (this.buffer === null) return;

      var source = audioContext.createBufferSource();
      source.buffer = this.buffer;
      source.connect(gainNode);
      source.start(0);

      return source;
    }
  }]);

  return Sound;
}();

var sounds = {
  background: new Sound("audio/background.mp3"),
  jump: new Sound("audio/jump.mp3"),
  gravityReverse: new Sound("audio/gravity-reverse.mp3")
};

exports.default = sounds;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _terrain = __webpack_require__(7);

var _terrain2 = _interopRequireDefault(_terrain);

var _player = __webpack_require__(5);

var _player2 = _interopRequireDefault(_player);

var _sprites = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(ctx, input, onGameOver, sounds) {
    _classCallCheck(this, Game);

    (0, _sprites.loadSprites)(function () {});
    this.ctx = ctx;
    this.input = input;
    this.newFrame = this.newFrame.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.onGameOver = onGameOver;
    this.sounds = sounds;
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.currentlyPlaying = this.sounds.background.play();
      this.playing = true;
      this.player = new _player2.default([200, 200], this);
      var terrain = new _terrain2.default([100, 400], 700, 100);
      this.terrainObjects = [terrain];
      this.speed = Game.INITIAL_SPEED;
      this.distance = 0;
      this.lastTime = 0;
      this.difficulty = 0;
      this.gravity = Game.INITIAL_GRAVITY;
      this.input.attachHandlers();
      requestAnimationFrame(this.newFrame);
    }
  }, {
    key: "newFrame",
    value: function newFrame(time) {
      var scaledDelta = 0;
      if (this.lastTime !== 0) {
        scaledDelta = (time - this.lastTime) / 16;
      }
      if (this.difficulty < 0.4) {
        this.difficulty += scaledDelta * Game.DIFFICULTY_RATING_GROWTH;
      }
      this.gravity += scaledDelta * Game.GRAVITY_GROWTH_RATE;
      this.distance += scaledDelta * this.speed;
      this.speed += scaledDelta * Game.ACCELERATION;
      this.lastTime = time;
      this.nextState(scaledDelta);
      this.drawFrame();
      if (this.playing) {
        requestAnimationFrame(this.newFrame);
      }
    }
  }, {
    key: "nextState",
    value: function nextState(delta) {
      this.updateTerrainState(delta);
      this.updatePlayerState(delta);
      this.destroyOldObjects();
      this.createNewObjects();
    }
  }, {
    key: "updateTerrainState",
    value: function updateTerrainState(delta) {
      var _this = this;

      this.terrainObjects.forEach(function (obj) {
        return obj.nextState(_this.speed, delta);
      });
    }
  }, {
    key: "updatePlayerState",
    value: function updatePlayerState(delta) {
      this.player.nextState(this.input, delta);
      this.player.boundBy(this.terrainObjects);
      if (this.player.pos[1] > Game.HEIGHT || this.player.pos[1] < 0) {
        this.gameOver();
      }
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      var _this2 = this;

      this.drawBackground();
      this.terrainObjects.forEach(function (obj) {
        return obj.draw(_this2.ctx);
      });
      this.player.draw(this.ctx, this.distance);
    }
  }, {
    key: "drawBackground",
    value: function drawBackground() {
      this.ctx.drawImage(_sprites.spriteLocations.background.imageEl, 0, 0, Game.WIDTH, Game.HEIGHT);
      var start = -(this.distance / 80 % Game.WIDTH);
      this.ctx.drawImage(_sprites.spriteLocations.backgroundStars.imageEl, start, 0, Game.WIDTH, Game.HEIGHT);
      this.ctx.drawImage(_sprites.spriteLocations.backgroundStars.imageEl, start + Game.WIDTH, 0, Game.WIDTH, Game.HEIGHT);
      start = -(this.distance / 40 % (Game.WIDTH + 700));
      this.ctx.drawImage(_sprites.spriteLocations.backgroundFarPlanets.imageEl, start, 0, Game.WIDTH, Game.HEIGHT);
      this.ctx.drawImage(_sprites.spriteLocations.backgroundFarPlanets.imageEl, start + Game.WIDTH + 700, 0, Game.WIDTH, Game.HEIGHT);
      start = -(this.distance / 25 % (Game.WIDTH + 300));
      this.ctx.drawImage(_sprites.spriteLocations.backgroundRingPlanet.imageEl, start, 200, 153, 345);
      this.ctx.drawImage(_sprites.spriteLocations.backgroundRingPlanet.imageEl, start + Game.WIDTH + 300, 200, 153, 345);
    }
  }, {
    key: "destroyOldObjects",
    value: function destroyOldObjects() {
      if (this.terrainObjects[0].getRight() < 0) {
        this.terrainObjects.splice(0, 1);
      }
    }
  }, {
    key: "createNewObjects",
    value: function createNewObjects() {
      var lastTerrain = this.terrainObjects[this.terrainObjects.length - 1];
      if (lastTerrain.getRight() < Game.WIDTH) {
        this.terrainObjects.push(_terrain2.default.fromLastTerrain(lastTerrain, this.speed, this.difficulty));
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.onGameOver(Math.floor(this.distance / 40));
      this.playing = false;
      this.currentlyPlaying.stop();
    }
  }]);

  return Game;
}();

Game.INITIAL_GRAVITY = 0.6;
Game.GRAVITY_GROWTH_RATE = 0;
Game.INITIAL_SPEED = 5;
Game.ACCELERATION = 1 / 600;
Game.DIFFICULTY_RATING_GROWTH = 1 / 5000;
Game.WIDTH = 1000;
Game.HEIGHT = 600;

exports.default = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = function () {
  function GameObject(pos, width, height) {
    _classCallCheck(this, GameObject);

    this.pos = pos;
    this.width = width;
    this.height = height;
  }

  _createClass(GameObject, [{
    key: "collision",
    value: function collision(other) {
      // Value returned in the form [x, y] represents how for this object wouild
      // have to move in the x or y direction to no longer overlap with other
      var horizontalOverlap = (0, _utils.rangeOverlap)(this.getHorizontalRange(), other.getHorizontalRange());
      var verticalOverlap = (0, _utils.rangeOverlap)(this.getVerticalRange(), other.getVerticalRange());
      return [horizontalOverlap, verticalOverlap];
    }
  }, {
    key: "getHorizontalRange",
    value: function getHorizontalRange() {
      return [this.getLeft(), this.getRight()];
    }
  }, {
    key: "getVerticalRange",
    value: function getVerticalRange() {
      return [this.getTop(), this.getBottom()];
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.pos[1];
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.pos[0] + this.width;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.pos[1] + this.height;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.pos[0];
    }
  }]);

  return GameObject;
}();

exports.default = GameObject;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprites = __webpack_require__(1);

var _gameObject = __webpack_require__(4);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _utils = __webpack_require__(0);

var _audio = __webpack_require__(2);

var _audio2 = _interopRequireDefault(_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_GameObject) {
  _inherits(Player, _GameObject);

  function Player(pos, game) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, pos, Player.WIDTH, Player.HEIGHT));

    _this.game = game;
    _this.sprites = _sprites.spriteLocations.player;
    _this.velocity = [0, 0];
    _this.onGround = false;
    _this.gravityMultiplier = 1;
    return _this;
  }

  _createClass(Player, [{
    key: "getSpeed",
    value: function getSpeed() {
      return this.velocity[0];
    }
  }, {
    key: "draw",
    value: function draw(ctx, distance) {
      var drawArgs = [this.sprites.imageEl].concat(_toConsumableArray(this.sprites.locations.run[Math.floor(distance / 10) % this.sprites.locations.run.length]), [this.pos[0], this.pos[1], Player.WIDTH, Player.HEIGHT]);
      if (this.gravityMultiplier < 0) {
        _utils.drawFlipped.apply(undefined, [ctx].concat(_toConsumableArray(drawArgs), [true]));
      } else {
        ctx.drawImage.apply(ctx, _toConsumableArray(drawArgs));
      }
    }
  }, {
    key: "nextState",
    value: function nextState(input, delta) {
      if (this.onGround && input.isPressed.g) {
        _audio2.default.gravityReverse.play();
        this.gravityMultiplier *= -1;
      }
      if (input.isPressed.space && this.onGround) {
        _audio2.default.jump.play();
        this.velocity[1] = Player.JUMP_VELOCITY * this.gravityMultiplier;
      }
      this.velocity[1] += this.game.gravity * this.gravityMultiplier;
      this.pos[1] += this.velocity[1];
    }
  }, {
    key: "currentAcceleration",
    value: function currentAcceleration() {
      return this.onGround ? Player.ACCELERATION : Player.DIRECTIONAL_INFLUENCE;
    }
  }, {
    key: "boundBy",
    value: function boundBy(terrainObjects) {
      var _this2 = this;

      this.onGround = false;
      terrainObjects.forEach(function (terrain) {
        var collision = _this2.collision(terrain);
        if (collision[0] !== 0 && collision[1] !== 0) {
          _this2.hitTerrain(collision);
        }
      });
    }
  }, {
    key: "hitTerrain",
    value: function hitTerrain(collision) {
      if (Math.abs(collision[0]) > Math.abs(collision[1]) - 10 || collision[0] > 0) {
        this.pos[1] += collision[1];
        if (collision[1] < 0 !== this.gravityMultiplier < 0) {
          this.onGround = true;
          this.velocity[1] = 0;
        }
      } else {
        this.game.gameOver();
      }
    }
  }]);

  return Player;
}(_gameObject2.default);

Player.WIDTH = 36;
Player.HEIGHT = 48;
Player.MAX_SPEED = 10;
Player.ACCELERATION = 2;
Player.DIRECTIONAL_INFLUENCE = 0.5;
Player.JUMP_VELOCITY = -15;
Player.GRAVITY = 0.6;

exports.default = Player;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(3);

var _game2 = _interopRequireDefault(_game);

var _input = __webpack_require__(8);

var _input2 = _interopRequireDefault(_input);

var _audio = __webpack_require__(2);

var _audio2 = _interopRequireDefault(_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("game");
  canvasEl.width = _game2.default.WIDTH;
  canvasEl.height = _game2.default.HEIGHT;

  var muteEl = document.querySelector(".sound-toggle");

  (0, _audio.mute)();
  muteEl.addEventListener("click", function () {
    if (muteEl.classList.contains("muted")) {
      (0, _audio.unmute)();
    } else {
      (0, _audio.mute)();
    }
    muteEl.classList.toggle("muted");
  });

  var startEls = document.querySelectorAll(".start-game-button");
  var homeStartEl = document.querySelector(".start-game-button.home");
  var gameOverEl = document.getElementById("game-over");
  var resultEl = document.querySelector("p.result");
  var instructionsEl = document.querySelector(".instructions");
  var howToPlayEl = document.querySelector(".how-to-play");
  var highScoreEl = document.querySelector(".high-score");
  var scoreEl = document.querySelector(".score");

  Promise.all(Object.values(_audio2.default).map(function (sound) {
    return sound.promise;
  })).then(function () {
    startEls.forEach(function (el) {
      return el.classList.remove("hide");
    });
  });

  howToPlayEl.addEventListener("click", function () {
    return instructionsEl.classList.toggle("hide");
  });

  var onStartGame = function onStartGame() {
    instructionsEl.classList.add("hide");
    gameOverEl.classList.add("hide");
    homeStartEl.classList.add("hide");
    game.start();
  };

  var onGameEnd = function onGameEnd(result) {
    gameOverEl.classList.remove("hide");
    resultEl.textContent = "You ran for " + result + " meters.";
    var oldScore = parseInt(scoreEl.textContent);
    scoreEl.textContent = Math.max(oldScore, result).toString();
    highScoreEl.classList.remove("hide");
  };

  var ctx = canvasEl.getContext("2d");
  var input = new _input2.default();
  var game = new _game2.default(ctx, input, onGameEnd, _audio2.default);

  startEls.forEach(function (el) {
    return el.addEventListener("click", onStartGame);
  });
  startEls[0].addEventListener("click", onStartGame);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _sprites = __webpack_require__(1);

var _gameObject = __webpack_require__(4);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _game = __webpack_require__(3);

var _game2 = _interopRequireDefault(_game);

var _player = __webpack_require__(5);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Terrain = function (_GameObject) {
  _inherits(Terrain, _GameObject);

  function Terrain(pos, width, height) {
    _classCallCheck(this, Terrain);

    var _this = _possibleConstructorReturn(this, (Terrain.__proto__ || Object.getPrototypeOf(Terrain)).call(this, pos, width, height));

    _this.sprites = _sprites.spriteLocations.environment;
    return _this;
  }

  _createClass(Terrain, [{
    key: "flipped",
    value: function flipped() {
      return new Terrain([this.pos[0], _game2.default.HEIGHT - (this.pos[1] + this.height)], this.width, this.height);
    }
  }, {
    key: "isTop",
    value: function isTop() {
      return this.pos[1] <= 0;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = "#756";
      for (var col = 0; col < this.getBlockWidth(); col++) {
        for (var row = 0; row < this.getBlockHeight(); row++) {
          var tile = "stoneCenter";
          if (row === 0) {
            tile = "stoneMid";
          }
          if (row >= this.getBlockHeight() - 1) {
            tile = "stoneMid";
            _utils.drawFlipped.apply(undefined, [ctx, this.sprites.imageEl].concat(_toConsumableArray(this.sprites.locations[tile]), [Math.floor(this.pos[0] + col * Terrain.BLOCK_WIDTH), this.pos[1] + row * Terrain.BLOCK_HEIGHT, Terrain.BLOCK_WIDTH, Terrain.BLOCK_HEIGHT]));
          } else {
            ctx.drawImage.apply(ctx, [this.sprites.imageEl].concat(_toConsumableArray(this.sprites.locations[tile]), [Math.floor(this.pos[0] + col * Terrain.BLOCK_WIDTH), this.pos[1] + row * Terrain.BLOCK_HEIGHT, Terrain.BLOCK_WIDTH, Terrain.BLOCK_HEIGHT]));
          }
        }
      }
    }
  }, {
    key: "getBlockHeight",
    value: function getBlockHeight() {
      return this.height / Terrain.BLOCK_HEIGHT;
    }
  }, {
    key: "getBlockWidth",
    value: function getBlockWidth() {
      return this.width / Terrain.BLOCK_WIDTH;
    }
  }, {
    key: "nextState",
    value: function nextState(playerSpeed, delta) {
      this.pos[0] -= playerSpeed * delta;
    }
  }], [{
    key: "fromLastTerrain",
    value: function fromLastTerrain(lastTerrain, speed, difficulty) {
      var shouldFlip = false;
      if (lastTerrain.isTop()) {
        lastTerrain = lastTerrain.flipped();
        shouldFlip = true;
      }

      var newTerrain = void 0;
      if ((0, _utils.randRange)(0, 2) === 0) {
        newTerrain = this.newFlippedTerrain(lastTerrain, speed, difficulty);
      } else {
        newTerrain = this.newTerrain(lastTerrain, speed, difficulty);
      }

      if (shouldFlip) {
        newTerrain = newTerrain.flipped();
      }
      return newTerrain;
    }
  }, {
    key: "newFlippedTerrain",
    value: function newFlippedTerrain(lastTerrain, speed, difficulty) {
      var bottom = (0, _utils.randRange)(1, 3) * Terrain.BLOCK_HEIGHT;
      var maxGap = this.maxJumpableGap(speed, lastTerrain.getTop() - bottom, 0);
      var left = lastTerrain.getRight() + (0, _utils.randRange)((-0.2 + difficulty * 1.7) * maxGap, (0.2 + difficulty * 1.7) * maxGap);
      var width = (0, _utils.randRange)(4, 15) * Terrain.BLOCK_HEIGHT;

      return new Terrain([left, bottom - Terrain.HEIGHT], width, Terrain.HEIGHT);
    }
  }, {
    key: "newTerrain",
    value: function newTerrain(lastTerrain, speed, difficulty) {
      var top = _game2.default.HEIGHT - (0, _utils.randRange)(1, 3) * Terrain.BLOCK_HEIGHT;
      var maxGap = this.maxJumpableGap(speed, top - lastTerrain.getTop(), _player2.default.JUMP_VELOCITY);
      var left = lastTerrain.getRight() + (0, _utils.randRange)((0.2 + difficulty) * maxGap, (0.5 + difficulty) * maxGap);
      var width = (0, _utils.randRange)(6, 14) * Terrain.BLOCK_HEIGHT;

      return new Terrain([left, top], width, Terrain.HEIGHT);
    }
  }, {
    key: "maxJumpableGap",
    value: function maxJumpableGap(speed, dy, v0) {
      var g = _player2.default.GRAVITY;
      var jumpTime = (-v0 + Math.pow(Math.pow(v0, 2) + 2 * g * dy, 0.5)) / g;
      var gap = jumpTime * speed;

      return gap;
    }
  }]);

  return Terrain;
}(_gameObject2.default);

Terrain.BLOCK_HEIGHT = 70;
Terrain.BLOCK_WIDTH = 70;
Terrain.HEIGHT = 4 * Terrain.BLOCK_HEIGHT;

exports.default = Terrain;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyCodes = __webpack_require__(9);

var keyCodes = _interopRequireWildcard(_keyCodes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
  function Input() {
    _classCallCheck(this, Input);

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.isPressed = {
      right: false,
      left: false,
      space: false
    };
  }

  _createClass(Input, [{
    key: "attachHandlers",
    value: function attachHandlers() {
      document.addEventListener("keydown", this.keyDownHandler, false);
      document.addEventListener("keyup", this.keyUpHandler, false);
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(e) {
      switch (e.keyCode) {
        case keyCodes.RIGHT:
          this.isPressed.right = true;
          break;
        case keyCodes.LEFT:
          this.isPressed.left = true;
          break;
        case keyCodes.SPACE:
          e.preventDefault();
          this.isPressed.space = true;
          break;
        case keyCodes.G:
          this.isPressed.g = true;
          break;
      }
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(e) {
      switch (e.keyCode) {
        case keyCodes.RIGHT:
          this.isPressed.right = false;
          break;
        case keyCodes.LEFT:
          this.isPressed.left = false;
          break;
        case keyCodes.SPACE:
          this.isPressed.space = false;
          break;
        case keyCodes.G:
          this.isPressed.g = false;
          break;
      }
    }
  }, {
    key: "removeHandlers",
    value: function removeHandlers() {
      document.removeEventListener("keydown", this.keyDownHandler);
      document.removeEventListener("keyup", this.keyUpHandler);
    }
  }]);

  return Input;
}();

exports.default = Input;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RIGHT = exports.RIGHT = 39;
var LEFT = exports.LEFT = 37;
var SPACE = exports.SPACE = 32;
var G = exports.G = 71;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map