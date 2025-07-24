
const toggleBtn = document.getElementById("toggleTheme");
const body = document.getElementById("pageBody");
let dark = false;

toggleBtn.addEventListener("click", () => {
  dark = !dark;
  if (dark) {
    body.classList.add("bg-gray-900", "text-white");
    body.classList.remove("bg-white", "text-black");
  } else {
    body.classList.remove("bg-gray-900", "text-white");
    body.classList.add("bg-white", "text-black");
  }
});

const visitBtn = document.getElementById("visitBtn");
const visitDisplay = document.getElementById("visitCount");

let count = localStorage.getItem("visitCount");
if (!count) {
  count = 0;
}
visitDisplay.textContent = count;

visitBtn.addEventListener("click", () => {
  count++;
  visitDisplay.textContent = count;
  localStorage.setItem("visitCount", count);
});
