
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

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

})();
//# sourceMappingURL=bundle.js.map
