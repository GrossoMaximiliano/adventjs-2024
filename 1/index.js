function prepareGifts(gifts) {
  return gifts
  .filter( (g,i) => gifts.indexOf(g) === i)
  .sort((a, b) => a - b);
}
