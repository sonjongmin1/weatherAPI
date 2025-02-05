// 실시간 함수 구현 ST
let time = document.querySelector(".time");
let apm = document.querySelector(".apm");

let clock = function () {
  let time1 = new Date();
  let hr = time1.getHours();
  let min = time1.getMinutes();
  let sec = time1.getSeconds();

  let ampm = "AM";
  if (hr == 0) {
    hr = 12;
  } else if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr = hr - 12;
    ampm = "PM";
  }

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  time.innerHTML = ` ${hr}:${min}:${sec} `;
  apm.innerHTML = `${ampm}`;
};

setInterval(clock, 1000);

// 실시간 함수 구현 ED

// 날짜 함수 구현 ST
let day = document.querySelector(".day");
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let today = now.getDay();
let dayKo = "";

switch (today) {
  case 0:
    dayKo = "일요일";
    break;
  case 1:
    dayKo = "월요일";
    break;
  case 2:
    dayKo = "화요일";
    break;
  case 3:
    dayKo = "수요일";
    break;
  case 4:
    dayKo = "목요일";
    break;
  case 5:
    dayKo = "금요일";
    break;
  case 6:
    dayKo = "토요일";
    break;
}

day.innerHTML = `${year}년 ${month}월 ${date}일 ${dayKo} `;
// 날짜 함수 구현 ED
