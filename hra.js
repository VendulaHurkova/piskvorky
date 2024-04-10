const buttonsIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentPlayer = "circle";

const showCircle = () => {
  const imgCross = document.querySelector("#imgCross");
  imgCross.classList.remove("visible");
  imgCross.classList.add("invisible");
  const imgCircle = document.querySelector("#imgCircle");
  imgCircle.classList.remove("invisible");
  imgCircle.classList.add("visible");
};

const showCross = () => {
  const imgCircle = document.querySelector("#imgCircle");
  imgCircle.classList.remove("visible");
  imgCircle.classList.add("invisible");
  const imgCross = document.querySelector("#imgCross");
  imgCross.classList.remove("invisible");
  imgCross.classList.add("visible");
};

const onButtonClick = (event) => {
  const button = event.target;
  if (currentPlayer == "cross") {
    button.classList.add("board__field--cross");
    currentPlayer = "circle";
    showCircle();
  } else {
    button.classList.add("board__field--circle");
    currentPlayer = "cross";
    showCross();
  }
  button.disabled = true
};

const setAkcionToButtons = () => {
  buttonsIds.forEach((buttonId) => {
    const button = document.querySelector("#button" + buttonId);
    button.addEventListener("click", onButtonClick);
  });
};

setAkcionToButtons();


const showRestartDialog = (event) => {
  const answer = confirm("Opravdu chcete začít znovu?");
  if (answer == false) {
    event.preventDefault()
  }
}

const buttonRestart = document.querySelector("#buttonRestart");
buttonRestart.addEventListener("click", showRestartDialog);
