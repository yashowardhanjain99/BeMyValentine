let messageIndex = 0;
let noClickCount = 0;

const messages = [
  "No 😒",
  "Are you sure?",
  "Think again 😏",
  "Last chance!",
  "You have no choice 😈"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const img = document.getElementById("reactionImage");

  // Change No button text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Grow Yes button
  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.5}px`;

  // Increase No click count
  noClickCount++;

  // Image switching (4 images)
  if (noClickCount === 1) {
    img.src = "img2.jpg";
  } else if (noClickCount === 2) {
    img.src = "img3.jpg";
  } else if (noClickCount >= 3) {
    img.src = "img4.jpg";
  }
}

function handleYesClick() {
  window.location.href = "yes.html";
}
