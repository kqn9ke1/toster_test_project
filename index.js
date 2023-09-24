// timer
document.addEventListener("DOMContentLoaded", () => {
  const end = new Date("Sep 26 2023 23:59:59");

  const hourVal = document.querySelector(".time .hour");
  const minuteVal = document.querySelector(".time .minutes");
  const secondVal = document.querySelector(".time .second");

  const timeCount = () => {
    let now = new Date();
    let leftUntil = end - now;

    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    hourVal.innerHTML = hours < 9 ? "0" + hours + ":" : hours + ":";
    minuteVal.innerHTML = minutes < 9 ? "0" + minutes + ":" : minutes + ":";
    secondVal.innerHTML = seconds < 9 ? "0" + seconds : seconds;
  };
  timeCount();
  setInterval(timeCount, 1000);
});

// image of carousels
function carousel() {}
//
function myFunction() {
  document.querySelector("#myDropdown").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function (event) {
  if (!event.target.matches(".sixth_column_select")) {
    var dropdowns = document.querySelector("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// button "buy now"
const button = document.querySelector(".button_buy");
button.addEventListener("click", () => {
  window.location.href = "https://youtube.com";
});

//TODO: first example

document.body.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  document.querySelector(".pic img").src = e.target.dataset.src;

  document
    .querySelectorAll("button")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
});
