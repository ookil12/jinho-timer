const timerContainer = document.querySelector(".js-clock"),
  timer = timerContainer.querySelector("p");
sutimer = timerContainer.querySelector("iframe");
const titleContainer = document.querySelector(".js-title"),
  titlename = titleContainer.querySelector("title");
const nameContainer = document.querySelector(".js-name"),
  titleh1 = nameContainer.querySelector("p");

function checktime(kr_curr, now, rand_0_1) {
  var distance = kr_curr - now;
  let [d, h, m, s] = timeformatting(distance);
  if (d == 0) {
    if (kr_curr.getDay() == now.getDay()) {
      if (h < 6) {
        if (h < 3) {
          if (h < 1) {
            document.body.style.backgroundColor = "darkred";
          } else document.body.style.backgroundColor = "red";
        } else document.body.style.backgroundColor = "Salmon";
      } else document.body.style.backgroundColor = "Lightpink";
    } else document.body.style.backgroundColor = "lightyellow";
  }
  if (distance / 1000 < 0) {
    if (rand_0_1 == 1) {
      titlename.innerText = "승완이의 재수하건";
      titleh1.innerText = "승완이의 재수까지";
    } else {
      titlename.innerText = "지노이의 재수하건";
      titleh1.innerText = "지노의 재수까지";
    }
    timer.innerText = `지노는 재수학언애 듨어갓습니다`;
    document.body.style.backgroundColor = "lightgreen";
    sutimer.style.visibility = "visible";
    sutimer.style.display = "inline";
    return true;
  } else {
    timer.innerText = `${d}d ${h < 10 ? `0${h}` : h}h ${
      m < 10 ? `0${m}` : m
    }m ${s < 10 ? `0${s}` : s}s초 남앗습니다.`;
    return false;
  }
}
function timeformatting(distance) {
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);
  return [d, h, m, s];
}
function counter() {
  var dday = new Date("May 29,2022,08:00:00").getTime(); //디데이
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(dday + KR_TIME_DIFF);
  console.log(kr_curr);
  const rand_0_1 = Math.floor(Math.random() * 2);
  var now = new Date();
  console.log(rand_0_1);
  if (rand_0_1 == 1) {
    titlename.innerText = "승완이의 재수하건";
    titleh1.innerText = "승완이의 재수학언";
  }
  console.log(kr_curr);
  checktime(kr_curr, now, rand_0_1);
  var interval = setInterval(function () {
    now = new Date(); //현재 날짜 가져오기
    console.log(now);
    var distance = kr_curr - now;
    let [d, h, m, s] = timeformatting(distance);
    console.log(distance);
    if (s < 10) {
      s = "0" + s;
    }
    if (checktime(kr_curr, now, rand_0_1)) {
      clearInterval(interval);
    }
  }, 1000);
}
window.onload = counter();
