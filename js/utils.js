export const randRange = (start, end) =>
  start + Math.floor(Math.random() * (end - start));

export const rangeOverlap = (range1, range2) => {
  if (range1[0] > range2[0]) {
    if (range1[0] < range2[1]) {
      return range2[1] - range1[0];
    }
  } else if (range1[1] > range2[0]) {
    return range2[0] - range1[1];
  }
  return 0;
};

export const drawFlipped = (
  ctx,
  image,
  sX,
  sY,
  sH,
  sW,
  x,
  y,
  h,
  w,
  reverse = false
) => {
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
