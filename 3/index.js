function organizeInventory(inventory) {
  let response = {};
  
  for(const item of inventory){
    const {category, name, quantity} = item;

    if ( response[category] ) {
      const cantidad = response[category][name];

      if ( cantidad ) response[category][name] += quantity;
      else response[category][name] = quantity;
      continue;
    }

    response[category] = {[name]: quantity};
  }

  return response;
}
