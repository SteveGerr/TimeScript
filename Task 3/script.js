"use strict"

function timeNow() {
    let time = new Date(), 
        hour = time.getHours(), //получаем часы
        minute = time.getMinutes(), //получаем минуты
        second = time.getSeconds(), //получаем секунды
        displayTime = document.querySelector(".time"); //получаем наш блок, куда выводим часы
    
        
    if (hour < 10) hour = "0" + hour; // Если час меньше 10, подставляем 0 перед ним
    if (minute < 10) minute  = "0" + minute; // Если минуты меньше 10, подставляем 0 перед ними
    if (second < 10) second  = "0" + second; // Если секунды меньше 10, подставляем 0 перед ними
    
    displayTime.innerHTML = hour + ":" + minute + ":" + second; 
  };

  setInterval(timeNow, 1000); // ставим интервал выполнения в 1 секунду