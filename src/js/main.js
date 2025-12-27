// src/js/main.js - ПРОСТОЙ РАБОЧИЙ ФАЙЛ
console.log("Rollup сборка работает успешно!");

// Пример кода для проверки
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM загружен");

  // Изменяем стиль заголовка
  const title = document.querySelector("h1");
  if (title) {
    title.style.color = "#2c3e50";
    title.style.textAlign = "center";
    title.style.marginTop = "50px";
  }

  // Добавляем интерактивность
  document.body.addEventListener("click", function () {
    alert("Сайт работает! Сборка Rollup настроена.");
  });
});
