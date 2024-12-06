/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  let contador = {};
  let result = [];

  for( let shoe of shoes ){
    const {type, size} = shoe;
    const sizeS = `${size}`; 
    const talle = contador[sizeS] ?? { "I": 0, "R": 0 };
    talle[type] += 1;

    const par = type === "R" ? "I" : "R";

    if ( talle[type] > 0 && talle[par] > 0 ) {
      result.push(size);
      talle[type]--;
      talle[par]--;
    }

    contador[sizeS] = talle;
  }

  return result
}
