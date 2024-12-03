function createFrame(names) {
  let length = 0;
  for ( let name of names ) {
    if (name.length > length) length = name.length;
  }

  let response = "*".repeat(length + 4) + "\n";
  for ( let name of names ) {
    response += `* ${name.padEnd(length)} *\n`;
  }
  response += "*".repeat(length + 4);
  return response
}
