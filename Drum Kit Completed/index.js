var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "b":
      var tom1 = new Audio("sounds/assets_B.mp3");
      tom1.play();
      break;

    case "B":
      var tom1 = new Audio("sounds/assets_B.mp3");
      tom1.play();
      break;

    case "c":
      var tom2 = new Audio("sounds/assets_C.mp3");
      tom2.play();
      break;

    case "C":
      var tom2 = new Audio("sounds/assets_C.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/assets_D.mp3");
      tom3.play();
      break;

    case "D":
      var tom4 = new Audio("sounds/assets_D.mp3");
      tom4.play();
      break;

    case "e":
      var snare = new Audio("sounds/assets_E.mp3");
      snare.play();
      break;

    case "E":
      var crash = new Audio("sounds/assets_E.mp3");
      crash.play();
      break;

    case "f":
      var kick = new Audio("sounds/assets_F.mp3");
      kick.play();
      break;

    case "F":
      var kick = new Audio("sounds/assets_F.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
