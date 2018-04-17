export const spriteLocations = {
  player: {
    src: "img/player_spritesheet.png",
    locations: {
      duck: [365, 98, 69, 71],
      front: [0, 196, 66, 92],
      hurt: [438, 0, 69, 92],
      jump: [438, 93, 67, 94],
      stand: [67, 196, 66, 92],
      run: [
        [0, 0, 72, 97],
        [73, 0, 72, 97],
        [146, 0, 72, 97],
        [0, 98, 72, 97],
        [73, 98, 72, 97],
        [146, 98, 72, 97],
        [219, 0, 72, 97],
        [292, 0, 72, 97],
        [219, 98, 72, 97],
        [365, 0, 72, 97],
        [292, 98, 72, 97]
      ]
    }
  }
};

export const loadSprites = cb => {
  for (const spriteType of Object.keys(spriteLocations)) {
    const imageEl = document.createElement("img");
    imageEl.src = spriteLocations[spriteType].src;
    spriteLocations[spriteType].imageEl = imageEl;
  }
  setTimeout(cb, 1000);
};
