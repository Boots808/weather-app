var userFormEl = document.getElementById("user-form");
var cityTextEl = document.getElementById("city-text");
var cityEl = document.getElementById("city");
var priorSearches = document.getElementById("prior-searches");
var currentDateEl = document.getElementById("date");
var currentIconEl = document.getElementById("icon");
var currentTempEl = document.getElementById("temp");
var currentHumidityEl = document.getElementById("humidity");
var currentUvEl = document.getElementById("uv");

//Day 1 Forecast
var dayOneEl = getElementById("day-1");
var dayOneIconEl = document.getElementById("day1-icon");
var dayOneTempEl = document.getElementById("day1-temp");
var dayOneWindEl = document.getElementById("day1-wind");
var dayOneHumidEl = document.getElementById("day1-humid");

//Day 2 Forecast
var dayTwoEl = getElementById("day-2");
var dayTwoIconEl = document.getElementById("day2-icon");
var dayTwoTempEl = document.getElementById("day2-temp");
var dayTwoWindEl = document.getElementById("day2-wind");
var dayTwoHumidEl = document.getElementById("day2-humid");

//Day 3 Forecast
var dayThreeEl = getElementById("day-3");
var dayThreeIconEl = document.getElementById("day3-icon");
var dayThreeTempEl = document.getElementById("day3-temp");
var dayThreeWindEl = document.getElementById("day3-wind");
var dayThreeHumidEl = document.getElementById("day3-humid");

//Day 4 Forecast
var dayFourEl = getElementById("day-4");
var dayFourIconEl = document.getElementById("day4-icon");
var dayFourTempEl = document.getElementById("day4-temp");
var dayFourWindEl = document.getElementById("day4-wind");
var dayFourHumidEl = document.getElementById("day4-humid");

//Day 5 Forecast
var dayFiveEl = getElementById("day-5");
var dayFiveIconEl = document.getElementById("day5-icon");
var dayFiveTempEl = document.getElementById("day5-temp");
var dayFiveWindEl = document.getElementById("day5-wind");
var dayFiveHumidEl = document.getElementById("day5-humid");

// show dates
var getDate = function () {
  var today = new Date();
  //current
  var date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  currentDateEl.textContent = date;
  //Day 1
  var date1 =
    today.getMonth() +
    1 +
    "/" +
    (today.getDate() + 1) +
    "/" +
    today.getFullYear();
  dayOneEl.textContent = date1;

  //Day 2
  var date2 =
    today.getMonth() +
    1 +
    "/" +
    (today.getDate() + 2) +
    "/" +
    today.getFullYear();
  dayTwoEl.textContent = date2;

  //Day 3
  var date3 =
    today.getMonth() +
    1 +
    "/" +
    (today.getDate() + 3) +
    "/" +
    today.getFullYear();
  dayThreeEl.textContent = date3;

  //Day 4
  var date4 =
    today.getMonth() +
    1 +
    "/" +
    (today.getDate() + 4) +
    "/" +
    today.getFullYear();
  dayFourEl.textContent = date4;

  //Day 5
  var date5 =
    today.getMonth() +
    1 +
    "/" +
    (today.getDate() + 5) +
    "/" +
    today.getFullYear();
  dayFiveEl.textContent = date5;
};

//Form Data from inputted city
var formSubmitHandler = function (event) {
  event.preventDefault();
  cityName = cityEl.value.trim();
  if (cityName) {
    getCity(cityName);
    cityTextEl.value = "";
    cityEl.textContent = cityName;
    recentSearchHandler();
  }
};

//save recent searches
var recentSearchHandler = function () {
  searchButtonEl = document.createElement("search-btn");
  searchButtonEl.textContent = cityName;
  searchButtonEl.setAttribute("class", "recent-search-btn");
  recentSearchesEl.appendChild(searchButtonEl);
  searchButtonEl.addEventListener("click", recentSearchBtn);
};

//save search
var recentSearchBtn = function () {
  var searchBtnEl = document.querySelector(".recent-search-btn");
  cityName = searchBEl.textContent;
  console.log(cityName);
  getCity(cityName);
  cityEl.textContent = cityName;
};

//lat and long from API
var getCity = function () {
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=2287631e333e6f4cc8ca617520f4ec85";

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        lat = data.coord.lat;
        lon = data.coord.lon;
        getWeatherData();
      });
    }
  });
};

// api weather data
var getWeatherData = function () {
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=2287631e333e6f4cc8ca617520f4ec85&units=imperial";
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // current weather data
        currentIconEl.innerHTML =
          "<img src='http://openweathermap.org/img/wn/" +
          data.current.weather[0].icon +
          "@2x.png'>";
        currentTempEl.textContent = data.current.temp;
        currentWindEl.textContent = data.current.wind_speed;
        currentHumidityEl.textContent = data.current.humidity;
        currentUvEl.textContent = data.current.uvi;
        // Day 1 Weather Data
        dayOneIconEl.innerHTML =
          "<img src='http://openweathermap.org/img/wn/" +
          data.daily[0].weather[0].icon +
          "@2x.png'>";
        dayOneTempEl.textContent = data.daily[0].temp.day;
        dayOneWindEl.textContent = data.daily[0].wind_speed;
        dayOneHumidEl.textContent = data.daily[0].humidity;
        // Day 2 Weather Data
        dayTwoIconEl.innerHTML =
          "<img src='http://openweathermap.org/img/wn/" +
          data.daily[1].weather[0].icon +
          "@2x.png'>";
        dayTwoTempEl.textContent = data.daily[1].temp.day;
        dayTwoWindEl.textContent = data.daily[1].wind_speed;
        dayTwoHumidEl.textContent = data.daily[1].humidity;
        // Day 3 Weather Data
        dayThreeIconEl.innerHTML =
          "<img src='http://openweathermap.org/img/wn/" +
          data.daily[2].weather[0].icon +
          "@2x.png'>";
        dayThreeTempEl.textContent = data.daily[2].temp.day;
        dayThreeWindEl.textContent = data.daily[2].wind_speed;
        dayThreeHumidEl.textContent = data.daily[2].humidity;
        // Day 4 Weather Data
        dayFourIconEl.innerHTML =
          "<img src='http://openweathermap.org/img/wn/" +
          data.daily[3].weather[0].icon +
          "@2x.png'>";
        dayFourTempEl.textContent = data.daily[3].temp.day;
        dayFourWindEl.textContent = data.daily[3].wind_speed;
        dayFourHumidEl.textContent = data.daily[3].humidity;
        // Day 5 Weather Data
        dayFiveIconEl.innerHTML =
          "<img src='http://openweathermap.org/img/wn/" +
          data.daily[4].weather[0].icon +
          "@2x.png'>";
        dayFiveTempEl.textContent = data.daily[4].temp.day;
        dayFiveWindEl.textContent = data.daily[4].wind_speed;
        dayFiveHumidEl.textContent = data.daily[4].humidity;
      });
    } else {
      alert("ERROR! No Connection to API");
    }
  });
};

getDate();

cityFormEl.addEventListener("submit", formSubmitHandler);
