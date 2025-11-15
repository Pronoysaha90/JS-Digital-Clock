let hrs = document.querySelector(".Hrs");
let min = document.querySelector(".Min");
let sec = document.querySelector(".Sec");


setInterval(() => {
  let localTime = new Date();

hrs.innerHTML = (localTime.getHours() < 10 ? "0" : "") + localTime.getHours();
min.innerHTML = (localTime.getMinutes() < 10 ? "0" : "") + localTime.getMinutes();
sec.innerHTML = (localTime.getSeconds() < 10 ? "0" : "") + localTime.getSeconds();

},1000);
