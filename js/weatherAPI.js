let API_key = "36c7e8662756cdc79406a17b81f4940b";
let city = document.querySelector("#city");
let cityLo = document.querySelector("#cityLo");
let desDeatailSt = document.querySelector("#desDeatailSt");
let desDetailWind = document.querySelector("#desDetailWind");
let desDtailHu = document.querySelector("#desDtailHu");
let weImg = document.querySelector(".weImg");
let tempNum = document.querySelector("#tempNum");
let lowTemp = document.querySelector("#lowTemp");
let highTemp = document.querySelector("#highTemp");
let locationSelec = document.querySelectorAll(".location > li > a");

// 날씨 불러오기 함수
let weather = async (selectedCity) => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_key}&units=metric&lang=kr`
  );
  let data = await res.json();

  console.log(
    `https://api.openweathermap.org/data/2.5/weather?q=&jeju&appid=${API_key}&units=metric&lang=kr`
  );
  let cityNameKor = "";
  if (data.name.toLowerCase() === "seoul") {
    cityNameKor = "서울";
  } else if (data.name.toLowerCase() === "busan") {
    cityNameKor = "부산";
  } else if (data.name.toLowerCase() === "jeju city") {
    cityNameKor = "제주";
  } else {
    cityNameKor = "출력 불가";
  }

  // 도시 이름
  city.innerHTML = cityNameKor;

  // 도시 이름 사이드 박스
  if (data.name.toLowerCase() === "seoul") {
    cityLo.innerHTML = "서울";
  } else if (data.name.toLowerCase() === "busan") {
    cityLo.innerHTML = "부산";
  } else if (data.name.toLowerCase() === "jeju city") {
    cityLo.innerHTML = "제주";
  } else {
    cityLo.innerHTML = "출력 불가";
  }

  // 현재 온도 숫자
  tempNum.innerHTML = `${data.main.temp}°`;
  // 최저 온도
  lowTemp.innerHTML = `${data.main.temp_min}°`;
  // 최고 온도
  highTemp.innerHTML = `${data.main.temp_max}°`;
  // 날씨 상태
  desDeatailSt.innerHTML = `${data.weather[0].description}`;
  // 풍속 상태
  desDetailWind.innerHTML = `${data.wind.speed}m/s`;
  // 습도
  desDtailHu.innerHTML = `${data.main.humidity}%`;

  // 날씨 아이콘 가져오기
  let weNum = data.weather[0].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${weNum}@2x.png`;
  weImg.src = iconUrl;
  weImg.alt = data.weather[0].description;
};

// 클릭 이벤트 등록
locationSelec.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // 기본 링크 이동 막기
    let selectedCity = event.target.innerText; // 클릭한 도시 이름 가져오기

    // 도시 이름을 영어로 변환
    let cityMap = {
      서울: "seoul",
      부산: "busan",
      제주: "jeju",
    };

    let cityName = cityMap[selectedCity] || "seoul"; // 기본값은 "seoul"
    weather(cityName); // 선택한 도시로 날씨 호출
  });
});

// 초기 로드 시 "서울" 기본값 설정
weather("seoul");
