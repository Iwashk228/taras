let karma = 0;
let progressRed = document.querySelector(".karma-progress-red");
let progressGreen = document.querySelector(".karma-progress-green");
let value = document.querySelector(".karma-value");

function update() {
  progressRed.style.width = karma * 0.5 + "%";
  progressGreen.style.width = (100 - karma) * 0.5 + "%";
  value.textContent = karma;
}

document.querySelector(".karma-buttons .karma-button-minus").addEventListener("click", function() {
  karma -= 1;
  update();
});

document.querySelector(".karma-buttons .karma-button-plus").addEventListener("click", function() {
  karma += 1;
  update();
});

// Получаем текущее значение кармы
if (localStorage.getItem("karma")) {
  karma = localStorage.getItem("karma");
}

// Обновляем положение чисел
let numbers = document.querySelectorAll(".karma-number");