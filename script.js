// const needle = document.getElementById("needle");
// const score = document.getElementById("score");
// const range = document.getElementById("range");

// range.addEventListener("input", (event) => {
//   const value = event.target.value;
//   score.textContent = value;
//   const rotation = (value / 100) * 180 - 90; // Map value to -90 to +90 degrees
//   needle.style.transform = `rotate(${rotation}deg)`;
// });



const range = document.getElementById("range");
const circleScore = document.getElementById("circle-score");
const circle = document.querySelector(".circle");

range.addEventListener("input", (event) => {
  const value = event.target.value;
  circleScore.textContent = `${value}%`;
  circle.style.background = `conic-gradient(#6c5ce7 ${value}%, #d7dadd ${value}%)`;
});



