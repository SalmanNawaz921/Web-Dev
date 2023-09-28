let upperCase = document.querySelector("#uppCase");
let lowerCase = document.querySelector("#lowCase");
let input = document.querySelector("#inpText");
let charCount = document.querySelector("#characterCount");
let wordCount = document.querySelector("#wordCount");
let removeSpaces = document.querySelector("#removeSpaces");
let removeLines = document.querySelector("#removeLines");

function toLowerCase() {
  input.value = input.value.toLowerCase();
}
function toUpperCase() {
  input.value = input.value.toUpperCase();
}
function removeExtraSpaces() {
  input.value = input.value.replace(/\s+/g, " ").trim();
}
function removeExtraLines() {
  input.value = input.value.replace(/\n+/g, "\n").trim();
}

input.addEventListener("input", () => {
  console.log("changes");
  const inputValueWithoutSpaces = input.value.replace(/\s+/g, ""); // remove spaces
  charCount.innerText = inputValueWithoutSpaces.length;
  wordCount.innerText = input.value.trim().split(" ").length;
});
