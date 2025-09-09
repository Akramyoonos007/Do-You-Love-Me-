const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const containerRect = questionContainer.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  let newX = Math.random() * (containerRect.width - noBtnRect.width);
  let newY = Math.random() * (containerRect.height - noBtnRect.height);

  // Ensure the button stays within the container
  newX = Math.max(0, newX);
  newY = Math.max(0, newY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
