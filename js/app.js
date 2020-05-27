const checkbox = document.querySelector("#checkbox");

console.log(window.matchMedia("(prefers-color-scheme: dark))"));

// here we detect mode dark
if (window.matchMedia("(prefers-color-scheme: dark))").matches) {
  console.log("x");
  checkbox.setAttribute("checked", true);
}
