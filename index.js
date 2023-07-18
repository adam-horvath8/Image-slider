const imagesArray = document.querySelectorAll(".slide");
const dotsArray = document.querySelectorAll(".dots");
const leftButton = document.getElementById("left-button");
const rigthButton = document.getElementById("rigth-button");

let currentImg = 0;
let currentDot = 0;

function reset() {
  imagesArray.forEach((img) => {
    img.style.display = "none";
  });
}

function resetDots() {
  dotsArray.forEach((dot) => {
    dot.classList.remove("selected");
  });
}
function startSlide() {
  reset();
  resetDots();
  imagesArray[0].style.display = "block";
  dotsArray[0].classList.add("selected");
}

function slideLeft() {
  reset();
  resetDots()
  imagesArray[currentImg - 1].style.display = "block";
  currentImg--;
  dotsArray[currentDot - 1].classList.add("selected");
  currentDot--;
}

function slideRigth() {
  reset();
  resetDots()
  imagesArray[currentImg + 1].style.display = "block";
  currentImg++;
  dotsArray[currentDot + 1].classList.add("selected");
  currentDot++;
}

leftButton.addEventListener("click", function () {
  if (currentImg === 0) {
    currentImg = imagesArray.length;
  }
  if (currentDot === 0) {
    currentDot = dotsArray.length;
  }
  slideLeft();
});

rigthButton.addEventListener("click", function () {
  if (currentImg === imagesArray.length - 1) {
    currentImg = -1;
  }
  if (currentDot === dotsArray.length - 1) {
    currentDot = -1;
  }
  slideRigth();
});

startSlide();
