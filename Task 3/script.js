"use strict"

function timeNow() {
    let time = new Date(); //создаём объект Date()
    let hour = time.getHours(); //получаем часы
    let minute = time.getMinutes(); //получаем минуты
    let second = time.getSeconds(); //получаем секунды
    
    if (hour < 10 || minute < 10 || second < 10) {
        hour = "0" + hour;
        minute  = "0" + minute;
        second  = "0" + second;
    }
    /*
    if (hour < 10) hour = "0" + hour; // Если час меньше 10, подставляем 0 перед ним
    if (minute < 10) minute  = "0" + minute; // Если минуты меньше 10, подставляем 0 перед ними
    if (second < 10) second  = "0" + second; // Если секунды меньше 10, подставляем 0 перед ними
    */
    document.querySelector(".time").innerHTML = hour + ":" + minute + ":" + second; 
  };

  setInterval(timeNow, 1000);