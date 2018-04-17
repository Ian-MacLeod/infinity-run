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

export const loadSprites = cb => {
  for (const spriteType of Object.keys(spriteLocations)) {
    const imageEl = document.createElement("img");
    imageEl.src = spriteLocations[spriteType].src;
    spriteLocations[spriteType].imageEl = imageEl;
  }
  setTimeout(cb, 1000);
};
