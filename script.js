const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener("click", () => {
  question.innerHTML = "HAPPY VALENTINE MY LOVE!!!";
  gif.src = "https://media2.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
  // Hide the yes button
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener('mouseover', () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.round(Math.random() * maxX);
  const randomY = Math.round(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
