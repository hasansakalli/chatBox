const container = document.querySelector(".container");
const icon = document.getElementById("icon");
const inputText = document.getElementById("inputText");
const message = document.querySelector(".message");

function openBox() {
  container.classList.toggle("containerActive");
  icon.style.display = "none";
}

function closeBox() {
  container.classList.toggle("containerActive");
  icon.style.display = "block";
}

function send() {
  if (inputText.value !== "") {
    const newLi = document.createElement("li");
    message.appendChild(newLi);
    newLi.classList.add("newLi");
    newLi.innerHTML = inputText.value;
  }
  inputText.value = "";
}
