/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  box[0] = "";
  box[box.length - 1] = "";
  return box.join("holi").replace(/ /g, "").includes("#*#");
}
