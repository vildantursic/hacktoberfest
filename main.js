function copyOnClick(el) {
  let input = document.createElement("input");
  document.body.append(input);
  input.setAttribute('value', el.childNodes[3].innerHTML);
  input.select();
  document.execCommand("copy");
  input.remove();
}
