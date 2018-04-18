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
