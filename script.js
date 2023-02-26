var block = document.getElementById("block");
var game = document.getElementById("game");
// var bg-village = document.getElementById("bg-village");

function moveLeft() {
  var left = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (left > 0) {
    block.style.left = left - 10 + "px";
  }
}

function moveRight() {
  var left = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (left < window.innerWidth - block.offsetWidth) {
    block.style.left = left + 10 + "px";
  }
}

function moveUp() {
  var top = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  if (top > 0) {
    block.style.top = top - 10 + "px";
  }
}

function moveDown() {
  var top = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  if (top < window.innerHeight - block.offsetHeight) {
    block.style.top = top + 10 + "px";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    moveLeft();
  } else if (event.code === "ArrowRight") {
    moveRight();
  } else if (event.code === "ArrowUp") {
    moveUp();
  } else if (event.code === "ArrowDown") {
    moveDown();
  }
});
