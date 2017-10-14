/* This function takes a git command, makes an fake input field
 * and then copy it to the clipboard for use.
 */
function copyOnClick(el) {
  let input = document.createElement("input");
  document.body.append(input);
  input.setAttribute('value', el.childNodes[3].innerHTML);
  input.select();
  var copy = document.execCommand("copy");
  input.remove();

  //If is sucesfully copied to clipboard, alert "Copied!"
  if(copy != ""){
    alert("Copied!");
  }
}
