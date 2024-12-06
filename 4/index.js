function createXmasTree(height, ornament) {
  let arbol = [];
  const vacioXlado = height - 1;

  for(let i = 0; i < height; i++){
    const lado = ornament.repeat(i);
    const vacio = "_".repeat(vacioXlado - lado.length) 

    arbol.push(`${vacio}${lado}${ornament}${lado}${vacio}`);
  }
  
  const troncoVacio = "_".repeat(vacioXlado);
  arbol.push( troncoVacio + "#" +  troncoVacio );
  arbol.push( troncoVacio + "#" +  troncoVacio );

  return arbol.join("\n")
}
