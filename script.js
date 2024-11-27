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



const now = new Date();
const hours = now.getHours();
let greeting = "";

if (hours < 12) greeting = "Good Morning, Teacher!";
else if (hours < 18) greeting = "Good Afternoon, Teacher!";
else greeting = "Good Evening, Teacher!";

document.getElementById("greeting").innerText = greeting;






document.getElementById("save-notes-btn").addEventListener("click", function () {
  const date = document.getElementById("calendar-date").value;
  const notes = document.getElementById("daily-notes").value;
  const notesList = document.getElementById("notes-list");

  if (!date || !notes) {
      alert("Please select a date and enter your notes.");
      return;
  }

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${date}</strong>: ${notes}`;
  notesList.appendChild(listItem);

  // Clear inputs
  document.getElementById("calendar-date").value = "";
  document.getElementById("daily-notes").value = "";
});







