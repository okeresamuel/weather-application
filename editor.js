let form = document.querySelector("form");
let searchIcon = document.querySelector(".search_iconbox");
let searchInput = document.querySelector(".search_input");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    "X-RapidAPI-Key": "3a607be021msh3b4b3e91a9f3f83p15a03ajsn2b5f3a907ec3",
  },
};

//current time is Running for the current weathercondition
let timeBox = document.querySelector(".time_display");
function startTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let month = time.getMonth();
  let date = time.getDate();
  let meridian = "Am";
  if (hour > 12) {
    hour = hour - 12;
    meridian = "pm";
  }
  if (hour === 0) {
    hour = "12";
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (month === 0) {
    month = "January";
  } else if (month === 1) {
    month = "February";
  } else if (month === 2) {
    month = "March";
  } else if (month === 3) {
    month = "April";
  } else if (month === 4) {
    month = "May";
  } else if (month === 5) {
    month = "June";
  } else if (month === 6) {
    month = "July";
  } else if (month === 7) {
    month = "August";
  } else if (month === 8) {
    month = "September";
  } else if (month === 9) {
    month = "October";
  } else if (month === 10) {
    month = "November";
  } else if (month === 11) {
    month = "December";
  }
  return (timeBox.innerHTML = `${date}  ${month}, ${hour} : ${minutes} ${meridian}`);
}
let clear = setInterval(() => {
  startTime();
}, 1000);

//higher other funcs that return time for tomorrows weather
function calldateForTomorrow() {
  let dateInfo = new Date();
  let date = dateInfo.getDate();
  let day = dateInfo.getDay();
  let month = dateInfo.getMonth();
  if (date === 1) {
    date = "2";
  } else if (date === 2) {
    date = "3";
  } else if (date === 3) {
    date = "4";
  } else if (date === 4) {
    date = "5";
  } else if (date === 5) {
    date = "6";
  } else if (date === 6) {
    date = "7";
  } else if (date === 7) {
    date = "8";
  } else if (date === 8) {
    date = "9";
  } else if (date === 9) {
    date = "10";
  } else if (date === 10) {
    date = "11";
  } else if (date === 11) {
    date = "12";
  } else if (date === 12) {
    date = "13";
  } else if (date === 13) {
    date = "14";
  } else if (date === 14) {
    date = "15";
  } else if (date === 15) {
    date = "16";
  } else if (date === 16) {
    date = "17";
  } else if (date === 17) {
    date = "18";
  } else if (date === 18) {
    date = "19";
  } else if (date === 19) {
    date = "20";
  } else if (date === 20) {
    date = "21";
  } else if (date === 21) {
    date = "22";
  } else if (date === 22) {
    date = "23";
  } else if (date === 23) {
    date = "24";
  } else if (date === 24) {
    date = "25";
  } else if (date === 25) {
    date = "26";
  } else if (date === 26) {
    date = "27";
  } else if (date === 27) {
    date = "28";
  } else if (date === 28) {
    date = "29";
  } else if (date === 29) {
    date = "30";
  } else if (date === 30) {
    date = "31";
  } else if (date === 31) {
    date = "1";
  }
  function sendMonth() {
    if (month === 0) {
      month = "January";
    } else if (month === 1) {
      month = "February";
    } else if (month === 2) {
      month = "March";
    } else if (month === 3) {
      month = "April";
    } else if (month === 4) {
      month = "May";
    } else if (month === 5) {
      month = "June";
    } else if (month === 6) {
      month = "July";
    } else if (month === 7) {
      month = "August";
    } else if (month === 8) {
      month = "September";
    } else if (month === 9) {
      month = "October";
    } else if (month === 10) {
      month = "November";
    } else if (month === 11) {
      month = "December";
    }
    return month;
  }
  return function () {
    if (day === 0) {
      day = "Monday";
    } else if (day === 1) {
      day = "Teusday";
    } else if (day === 2) {
      day = "Wednesday";
    } else if (day === 3) {
      day = "Thursday";
    } else if (day === 4) {
      day = "Friday";
    } else if (day === 5) {
      day = "Saturday";
    } else if (day === 6) {
      day = "Sunday";
    }
    return { day, date, sendMonth };
  };
}
const dayResult = calldateForTomorrow()().day;
const dateResult = calldateForTomorrow()().date;
const MonthResult = calldateForTomorrow()().sendMonth();

//display for tomorro weather Nigeria
//tomorrow weather
let homediv = document.querySelector(".home_div");
let tomorrowtext = document.querySelector(".tomorrow");
let celciusTextBox = document.querySelector(".celcius");
let weatherImageForTomorrow = document.querySelector(".weatherImage");
let sunriseForTomorrow = document.querySelector(".sunrise");
let sunsetForTomorrow = document.querySelector(".sunset");
let cloudInfo = document.querySelector(".weatherImage_text");
let timeForTomorrow = document.querySelector(".time_display");
let tomorrowNigeria = document.querySelector(".tomorrowNigeria");
let tomorowGeneralWeathertext = document.querySelector(".tomorrowGeneral");
let tomorowGeneralWorldPic = document.createElement("img");
let firstDay = document.querySelector(".firstDayWeather");
let secondDay = document.querySelector(".secondDayWeather");
let thirdDay = document.querySelector(".thirdDayWeather");
function callTomorrowWeather() {
  return fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Nigeria&days=3`,
    options
  );
}
callTomorrowWeather()
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    let tomorrowResult = Object.entries(data);
    let sunrise = tomorrowResult[2][1].forecastday[1].astro.sunrise;
    let sunset = tomorrowResult[2][1].forecastday[1].astro.sunset;
    let cloudpic = tomorrowResult[2][1].forecastday[1].day.condition.icon;
    let cloudtext = tomorrowResult[2][1].forecastday[1].day.condition.text;
    let avgHumidityResult = tomorrowResult[2][1].forecastday[1].day.avghumidity;
    let avgtemperatureResult =
      tomorrowResult[2][1].forecastday[1].day.avgtemp_c;
    let maxtemperatureResult =
      tomorrowResult[2][1].forecastday[1].day.maxtemp_c;
    let maxWindResult = tomorrowResult[2][1].forecastday[1].day.maxwind_kph;
    let chanceOfRainResult =
      tomorrowResult[2][1].forecastday[1].day.daily_chance_of_rain;
    let chanceOfSnowResult =
      tomorrowResult[2][1].forecastday[1].day.daily_chance_of_snow;
    function toggleWeatherInfoBox() {
      // toggle weather search Location  box
      avgHumidity.innerHTML = `${avgHumidityResult}%`;
      avgtemperature.innerHTML = `${avgtemperatureResult}<span class="temperatureDegree">o</span> <span>C</span>`;
      maxtemperature.innerHTML = `${maxtemperatureResult} <span class="temperatureDegree">o</span> <span>C</span>`;
      maxWind.innerHTML = `${maxWindResult} Kph`;
      chanceOfRain.innerHTML = `${chanceOfRainResult} %`;
      chanceOfSnow.innerHTML = `${chanceOfSnowResult}%`;

      if (weatherInfoBox.hasAttribute("showWeatherInfoBox") === true) {
        weatherInfoBox.setAttribute("hideWeatherInfoBox", "");
      }
      if (weatherInfoBox.hasAttribute("hideWeatherInfoBox"))
        tomorrowWeatherInfoBox.removeAttribute("toggleBoxTomorrow");
      tomorrowWeatherInfoBox.style.transition = "1s";
    }
    function changeWeatherInfoBox() {
      setTimeout(() => {
        toggleWeatherInfoBox();
      }, 3000);
    }
    tomorrowNigeriatext.addEventListener("click", changeWeatherInfoBox);
    function showTomorrow() {
      let weatherTomorrow = document.querySelector(".weatherTomorrow");
      let weather_info_box = document.querySelector(".weather_info_box");
      setTimeout(() => {
        homediv.style.opacity = 0;
        firstDay.style.display = "none";
        secondDay.style.display = "none";
        thirdDay.style.display = "none";
        setTimeout(() => {
          celciusTextBox.innerHTML = cloudtext;
          celciusTextBox.style.fontSize = "20px";
          weatherImageForTomorrow.src = cloudpic;
          sunriseForTomorrow.innerHTML = sunrise;
          sunsetForTomorrow.innerHTML = sunset;
          cloudInfo.innerHTML = "";
          fealslike.innerHTML = "";
          weatherTomorrow.style.display = "block";
          weather_info_box.style.display = "none";
          timeBox.innerHTML = `${dayResult}, ${dateResult} ${MonthResult}`;
          home_div.style.display = "block";
          clearInterval(clear);
          setTimeout(() => {
            homediv.style.opacity = 1;
          }, 1000);
        }, 1600);
      }, 1000);
      homediv.style.transition = "1s";
    }

    tomorrowNigeriatext.addEventListener("click", showTomorrow);
  });

//-----------------------------------------------
//general weather  info for all countrys (tomorrow) variables
let tomorrowWeatherInfoBox = document.querySelector(".weatherTomorrow");
let weatherInfoBox = document.querySelector(".weather_info_box");
let avgHumidity = document.querySelector(".avgHumidity");
let avgtemperature = document.querySelector(".avgtemperature");
let maxtemperature = document.querySelector(".maxtemperature");
let maxWind = document.querySelector(".maxWind");
let chanceOfRain = document.querySelector(".chanceOfRain");
let chanceOfSnow = document.querySelector(".chanceOfSnow");
//general weather search all countrys variables
let weatherImage = document.querySelector(".weatherImage");
let weatherImageText = document.querySelector(".weatherImage_text");
let celcius = document.querySelector(".celcius");
let fealslike = document.querySelector(".fealslike");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let temperature = document.querySelector(".temperature");
let windgust = document.querySelector(".windgust");
let region = document.querySelector(".regionInfo");
let country = document.querySelector(".countryInfo");
let countryName = document.querySelector(".nameInfo");
let sunUp = document.querySelector(".sunrise");
let sunDown = document.querySelector(".sunset");
function executeOnclickSearchBtn() {
  let inputInfo = form.elements[0].value;
  let clearInput = () => {
    form.elements[0].value = "";
  };
  setTimeout(clearInput, 1700);

  //Finding current weather for other country
  function exe() {
    return fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${inputInfo}&days=3`,
      options
    );
  }
  exe()
    .then((data) => {
      return data.json();
    })
    .then(function Update(data) {
      let weatherTomorrow = document.querySelector(".weatherTomorrow");
      let weather_info_box = document.querySelector(".weather_info_box");
      let threeDaysforNigeria = document.querySelector(".AllThreeDays");
      let thirdDayWeather = document.querySelector(".thirdDayWeather");
      thirdDayWeather.style.display = "none";
      threeDaysforNigeria.style.display = "none";
      //weather request for current countrys
      let result = Object.entries(data);
      let weatherDiscription = result[1][1].condition.text;
      let weatherIcon = result[1][1].condition.icon;
      let sunrise = result[2][1].forecastday[0].astro.sunrise;
      let sunset = result[2][1].forecastday[0].astro.sunset;
      let nametext = result[0][1].name;
      let regiontext = result[0][1].region;
      let countrytext = result[0][1].country;
      let celciusResult = result[1][1].feelslike_c;
      let humidityResult = result[1][1].humidity;
      let pressureResult = result[1][1].pressure_mb;
      let temperatureResult = result[1][1].temp_c;
      let windgustResult = result[1][1].gust_kph;
      //weatherRequest inputs for current weather (all countrys)
      celcius.innerHTML = `${celciusResult}<sup><span class="degreeGeneral" style="font-size:30px;">o C</span></sup>`;
      celcius.style.fontSize = "40px";
      weatherImage.src = weatherIcon;
      weatherImageText.innerHTML = weatherDiscription;
      fealslike.innerHTML = `Feels like ${celciusResult.toFixed(
        0
      )}<span class="fealsLikeDegree">o</span>`;
      humidity.innerHTML = `${humidityResult}%`;
      pressure.innerHTML = `${pressureResult} mb`;
      temperature.innerHTML = `${temperatureResult} <span class="temperatureDegree">o</span>`;
      windgust.innerHTML = `${windgustResult} kph`;
      region.innerHTML = `${regiontext}`;
      country.innerHTML = `${countrytext}`;
      countryName.innerHTML = `${nametext}`;
      sunUp.innerHTML = `${sunrise}`;
      sunDown.innerHTML = `${sunset}`;
      timeBox.innerHTML = startTime();
      weatherTomorrow.style.display = "none";
      weather_info_box.style.display = "block";
      let todayToggleBack = document.querySelector(".todayGeneral");
      let formerToday = document.querySelector(".today");
      todayToggleBack.innerHTML = "Today";
      let formerThreeDays = document.querySelector(".threedays");
      let threeDaysToggleBack = document.querySelector(".threedaysGeneral");
      threeDaysToggleBack.innerHTML = "3 days";

      function run() {
        setTimeout(() => {
          let threeDaysGeneral = document.querySelector(".threeDaysGeneral");
          threeDaysGeneral.style.display = "none";
          homediv.style.opacity = 0;
          setTimeout(() => {
            celcius.innerHTML = `${celciusResult}<sup><span class="degree">o C</span></sup>`;
            celcius.style.fontSize = "50px";
            weatherImage.src = weatherIcon;
            weatherImageText.innerHTML = weatherDiscription;
            fealslike.innerHTML = `Feels like ${celciusResult.toFixed(
              0
            )}<span class="fealsLikeDegree">o</span>`;
            humidity.innerHTML = `${humidityResult}%`;
            pressure.innerHTML = `${pressureResult} mb`;
            temperature.innerHTML = `${temperatureResult} <span class="temperatureDegree">o</span>`;
            windgust.innerHTML = `${windgustResult} kph`;
            region.innerHTML = `${regiontext}`;
            country.innerHTML = `${countrytext}`;
            countryName.innerHTML = `${nametext}`;
            sunUp.innerHTML = `${sunrise}`;
            sunDown.innerHTML = `${sunset}`;
            timeBox.innerHTML = startTime();
            weatherTomorrow.style.display = "none";
            weather_info_box.style.display = "block";
            homediv.style.display = "block";
            setTimeout(() => {
              homediv.style.opacity = 1;
            }, 1000);
          }, 1000);
        }, 1000);
        homediv.style.transition = "1s";
      }
      formerToday.style.display = "none";
      formerThreeDays.style.display = "none";
      todayToggleBack.addEventListener("click", run);

      //toggle for 3 days general weather search
      function toggle() {
        homediv.style.display = "none";
        let AllThreeDaysGen = document.querySelector(".threeDaysGeneral");
        let weatherConditionGeneral = document.querySelector(
          ".weatherConditionGeneral"
        );
        let degreePicGeneral = document.querySelector(".degreePicGeneral");
        let celciusForfirstGeneral = document.querySelector(
          ".celciusForfirstGeneral"
        );
        let tomorrowGen = document.querySelector(".tomorrowGen");
        let secondConditionGeneral = document.querySelector(
          ".secondConditionGeneral"
        );
        let degreePicGeneralSecond = document.querySelector(
          ".degreePicGeneralSecond"
        );
        let weatherConditionThirdDayGen = document.querySelector(
          ".weatherConditionThirdDayGen"
        );
        let weatherPicThirdDayGen = document.querySelector(
          ".weatherPicThirdDayGen"
        );
        celciusForfirstGeneral.innerHTML = `${celciusResult} <span class="fealsLikeDegree">o</span>`;
        degreePicGeneral.src = weatherIcon;
        weatherConditionGeneral.innerHTML = weatherDiscription;
        tomorrowGen.innerHTML = `${dayResult}, ${dateResult} ${MonthResult}`;
        secondConditionGeneral.innerHTML =
          result[2][1].forecastday[1].day.condition.text;
        degreePicGeneralSecond.src =
          result[2][1].forecastday[1].day.condition.icon;
        weatherConditionThirdDayGen.innerHTML =
          result[2][1].forecastday[2].day.condition.text;
        weatherPicThirdDayGen.src =
          result[2][1].forecastday[2].day.condition.icon;
        AllThreeDaysGen.style.display = "block";
      }
      threeDaysToggleBack.addEventListener("click", toggle);

      //weather pic change
      if (weatherDiscription === "Clear") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60')"
        );
      } else if (weatherDiscription === "Mist") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWlzdHxlbnwwfHwwfHw%3D&w=1000&q=80')"
        );
      } else if (weatherDiscription === "Overcast") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWQlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')"
        );
      } else if (weatherDiscription === "Partly cloudy") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1524555259-3e4f9092f97b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnRseSUyMGNsb3VkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60')"
        );
      } else if (weatherDiscription === "Sunny") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1578039039764-bdf4b7a02878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')"
        );
      } else if (
        weatherDiscription === "Light rain shower" ||
        "Patchy rain possible" ||
        "Patchy light rain with thunder"
      ) {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1501691223387-dd0500403074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxpZ2h0JTIwcmFpbiUyMHNob3dlciUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')"
        );
      }
    });
  // change tommorrow text to general
  function toggleTomorrowText() {
    tomorowGeneralWeathertext.innerHTML = "Tomorrow";
    tomorrowNigeria.style.display = "none";
    tomorowGeneralWorldPic.src = "https://img.icons8.com/dusk/2x/globe--v2.gif";
    tomorowGeneralWeathertext.append(tomorowGeneralWorldPic);
    tomorowGeneralWorldPic.setAttribute("class", "worldImg");
    tomorowGeneralWorldPic.style.borderRadius = "70%";
  }
  toggleTomorrowText();

  //toggle tomorrow for General weather

  function exe() {
    return fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${inputInfo}&days=3`,
      options
    );
  }
  exe()
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      //weather request for current countrys
      let result = Object.entries(data);
      //weather api request for tomorow (layer)
      let sunriseForTomorrow = result[2][1].forecastday[1].astro.sunrise;
      let sunsetForTomorrow = result[2][1].forecastday[1].astro.sunset;
      let cloudpic = result[2][1].forecastday[1].day.condition.icon;
      let cloudtext = result[2][1].forecastday[1].day.condition.text;
      let avgHumidityResult = result[2][1].forecastday[1].day.avghumidity;
      let avgtemperatureResult = result[2][1].forecastday[1].day.avgtemp_c;
      let maxtemperatureResult = result[2][1].forecastday[1].day.maxtemp_c;
      let maxWindResult = result[2][1].forecastday[1].day.maxwind_kph;
      let chanceOfRainResult =
        result[2][1].forecastday[1].day.daily_chance_of_rain;
      let chanceOfSnowResult =
        result[2][1].forecastday[1].day.daily_chance_of_snow;
      //weather api for tomorrow inputs
      avgHumidity.innerHTML = `${avgHumidityResult}%`;
      avgtemperature.innerHTML = `${avgtemperatureResult}<span class="temperatureDegree">o</span> <span>C</span>`;
      maxtemperature.innerHTML = `${maxtemperatureResult} <span class="temperatureDegree">o</span> <span>C</span>`;
      maxWind.innerHTML = `${maxWindResult} Kph`;
      chanceOfRain.innerHTML = `${chanceOfRainResult} %`;
      chanceOfSnow.innerHTML = `${chanceOfSnowResult}%`;
      //toggle weather info box for tomorro (all countrys)
      let weatherTomorrow = document.querySelector(".weatherTomorrow");
      let weather_info_box = document.querySelector(".weather_info_box");
      function showTomorrow() {
        setTimeout(() => {
          let threeDaysGeneral = document.querySelector(".threeDaysGeneral");
          threeDaysGeneral.style.display = "none";
          homediv.style.opacity = 0;
          setTimeout(() => {
            celciusTextBox.innerHTML = cloudtext;
            celciusTextBox.style.fontSize = "20px";
            weatherImageForTomorrow.src = cloudpic;
            sunUp.innerHTML = sunriseForTomorrow;
            sunDown.innerHTML = sunsetForTomorrow;
            cloudInfo.innerHTML = "";
            fealslike.innerHTML = "";
            timeForTomorrow.innerHTML = `${dayResult}, ${dateResult} ${MonthResult}`;
            weatherTomorrow.style.display = "block";
            weather_info_box.style.display = "none";
            homediv.style.display = "block";
            clearInterval(clear);
            setTimeout(() => {
              homediv.style.opacity = 1;
            }, 1000);
          }, 1000);
        }, 1000);

        homediv.style.transition = "1s";
      }
      tomorowGeneralWeathertext.addEventListener("click", showTomorrow);
      function toggleWeatherInfoBoxTwo() {
        if (weatherInfoBox.hasAttribute("showWeatherInfoBox") === true) {
          weatherInfoBox.setAttribute("hideWeatherInfoBox", "");
        }
        if (weatherInfoBox.hasAttribute("hideWeatherInfoBox"))
          tomorrowWeatherInfoBox.removeAttribute("toggleBoxTomorrow");
        tomorrowWeatherInfoBox.style.transition = "1s";
      }
      function changeWeatherInfoBox() {
        setTimeout(() => {
          toggleWeatherInfoBoxTwo();
        }, 3000);
      }
      tomorowGeneralWeathertext.addEventListener("click", changeWeatherInfoBox);
    });
}
searchIcon.addEventListener("click", executeOnclickSearchBtn);

// Finds current weather for nigeria only when page loads
window.onload = () => {
  let AllThreeDays = document.querySelector(".AllThreeDays");
  let AllThreeDaysGen = document.querySelector(".threeDaysGeneral");
  AllThreeDaysGen.style.display = "none";
  AllThreeDays.style.display = "none";
  function callNigeriaWeather() {
    return fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Nigeria&days=3`,
      options
    );
  }
  callNigeriaWeather()
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      form.elements[0].value = "Nigeria";
      let result = Object.entries(data);
      let weatherDiscription = result[1][1].condition.text;
      let weatherIcon = result[1][1].condition.icon;
      let sunrise = result[2][1].forecastday[0].astro.sunrise;
      let sunset = result[2][1].forecastday[0].astro.sunset;
      let nametext = result[0][1].name;
      let regiontext = result[0][1].region;
      let countrytext = result[0][1].country;
      let celciusResult = result[1][1].feelslike_c;
      let humidityResult = result[1][1].humidity;
      let pressureResult = result[1][1].pressure_mb;
      let temperatureResult = result[1][1].temp_c;
      let windgustResult = result[1][1].gust_kph;
      celcius.innerHTML = `${celciusResult}<sup><span class="degree">o</span>C</sup>`;
      weatherImage.src = weatherIcon;
      weatherImageText.innerHTML = weatherDiscription;
      fealslike.innerHTML = `Feels like ${celciusResult.toFixed(
        0
      )}<span class="fealsLikeDegree">o</span>`;
      humidity.innerHTML = `${humidityResult}%`;
      pressure.innerHTML = `${pressureResult} mb`;
      temperature.innerHTML = `${temperatureResult} <span class="temperatureDegree">o</span>`;
      windgust.innerHTML = `${windgustResult} kph`;
      region.innerHTML = `${regiontext}`;
      country.innerHTML = `${countrytext}`;
      countryName.innerHTML = `${nametext}`;
      sunUp.innerHTML = `${sunrise}`;
      sunDown.innerHTML = `${sunset}`;
      if (weatherDiscription === "Clear") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60')"
        );
      } else if (weatherDiscription === "Mist") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWlzdHxlbnwwfHwwfHw%3D&w=1000&q=80')"
        );
      } else if (weatherDiscription === "Overcast") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWQlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')"
        );
      } else if (weatherDiscription === "Partly cloudy") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1524555259-3e4f9092f97b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnRseSUyMGNsb3VkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60')"
        );
      } else if (weatherDiscription === "Sunny") {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1578039039764-bdf4b7a02878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')"
        );
      } else if (
        weatherDiscription === "Light rain shower" ||
        "Patchy rain possible" ||
        "Patchy light rain with thunder"
      ) {
        $("body").css(
          "backgroundImage",
          "url('https://images.unsplash.com/photo-1501691223387-dd0500403074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxpZ2h0JTIwcmFpbiUyMHNob3dlciUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')"
        );
      
      }
      //toggle back today
      let todayToggleBack = document.querySelector(".today");
      let weatherTomorrow = document.querySelector(".weatherTomorrow");
      let weather_info_box = document.querySelector(".weather_info_box");
      let thirdDayWeather = document.querySelector(".thirdDayWeather");
      function call() {
        AllThreeDays.style.display = "none";
        thirdDayWeather.style.display = "none";
        async function executeTwo(delay) {
          setTimeout(() => {
            celcius.innerHTML = `${celciusResult}<sup><span class="degree">o</span>C</sup>`;
            weatherImage.src = weatherIcon;
            weatherImageText.innerHTML = weatherDiscription;
            fealslike.innerHTML = `Feels like ${celciusResult.toFixed(
              0
            )}<span class="fealsLikeDegree">o</span>`;
            humidity.innerHTML = `${humidityResult}%`;
            pressure.innerHTML = `${pressureResult} mb`;
            temperature.innerHTML = `${temperatureResult} <span class="temperatureDegree">o</span>`;
            windgust.innerHTML = `${windgustResult} kph`;
            region.innerHTML = `${regiontext}`;
            country.innerHTML = `${countrytext}`;
            countryName.innerHTML = `${nametext}`;
            sunUp.innerHTML = `${sunrise}`;
            sunDown.innerHTML = `${sunset}`;
            celcius.style.fontSize = "50px";
            timeBox.innerHTML = startTime();
            weatherTomorrow.style.display = "none";
            weather_info_box.style.display = "block";
          }, delay);
        }
        async function executeFour(delay) {
          setTimeout(() => {
            homediv.style.opacity = 1;
          }, delay);
        }
        async function executeone() {
          homediv.style.opacity = 0;
        }
        async function executeAll() {
          await executeone(1000);
          await executeTwo(1000);
          await executeFour(1000);
          homediv.style.transition = "1s";
        }
        executeAll();
        home_div.style.display = "block";
      }
      todayToggleBack.addEventListener("click", call);
    });
};

//toggle display for  country search location info.(click search icon to toggle)
let location_displayBox = document.querySelector(".location_headingInfo");
function toggle() {
  if (location_displayBox.hasAttribute("offtopone") === true) {
    location_displayBox.removeAttribute("offtopone");
  } else if (location_displayBox.hasAttribute("offtopone") === false) {
    location_displayBox.setAttribute("offtopone", "");
  }
  location_displayBox.classList.toggle("offtopone");
  $(".search_input").fadeToggle();
  setTimeout(() => {
    location_displayBox.setAttribute("offtopone", "");
    $(".search_input").fadeIn(1000);
  }, 5000);
}
searchIcon.addEventListener("click", toggle);

// search bar animations + all animations
let today = document.querySelector(".today");
let tomorrowNigeriatext = document.querySelector(".tomorrowNigeria");
let tomorrowGeneraltext = document.querySelector(".tomorrowGeneral");
let threedays = document.querySelector(".threedays");
let todayGeneral = document.querySelector(".todayGeneral");
let threeDaysGeneral = document.querySelector(".threedaysGeneral");
function executeAllAnimations() {
  const threeDaysGeneralText = () => {
    const text = anime({
      targets: threeDaysGeneral,
      scale: 1.1,
      translateX: "-1px",
      complete: () => {
        anime({
          targets: threeDaysGeneral,
          scale: 1,
          delay: 1100,
        });
      },
    });
  };
  const todayGeneralText = () => {
    const text = anime({
      targets: todayGeneral,
      scale: 1.1,
      translateX: "-1px",
      complete: () => {
        anime({
          targets: todayGeneral,
          scale: 1,
          delay: 1100,
        });
      },
    });
  };
  const up = () => {
    const text = anime({
      targets: searchIcon,
      scale: 1.1,
      translateX: "-1px",
      complete: () => {
        anime({
          targets: searchIcon,
          scale: 1,
          delay: 1100,
        });
      },
    });
  };
  const GeneralTomorrow = () => {
    const text = anime({
      targets: tomorrowGeneraltext,
      scale: 1.1,
      translateX: "-1px",
      complete: () => {
        anime({
          targets: tomorrowGeneraltext,
          scale: 1,
          delay: 1100,
        });
      },
    });
  };
  const upToday = () => {
    const text = anime({
      targets: today,
      scale: 1.1,
      translateX: "-1px",
      complete: () => {
        anime({
          targets: today,
          scale: 1,
          delay: 1100,
        });
      },
    });
  };
  const upTomorrow = () => {
    const text = anime({
      targets: tomorrowNigeriatext,
      scale: 1.1,
      translateX: "-1px",
      complete: () => {
        anime({
          targets: tomorrowNigeriatext,
          scale: 1,
          delay: 1100,
        });
      },
    });
  };
  const upThreedays = () => {
    const text = anime({
      targets: threedays,
      scale: 1.1,
      translateX: "-1px",
      complete: () => {
        anime({
          targets: threedays,
          scale: 1,
          delay: 1100,
        });
      },
    });
  };

  let pagecontent = document.querySelector(".main_content");
  let loader = document.querySelector(".loader");
  let inner = document.querySelector(".inner");
  let updates = document.querySelector(".update");
  anime({
    targets: inner,
    value: [0, 100],
    delay: 1100,
    duration: 4000,
    easing: "linear",
  });
  anime({
    targets: updates,
    value: ["0", "100"],
    delay: 1100,
    duration: 4000,
    round: 1,
    easing: "linear",
    complete: () => {
      anime({
        targets: updates,
        value: ["DONE!"],
        round: "none",
        delay: 2000,
        color: ["#FFF"],
      });
    },
  });
  setTimeout(() => {
    loader.style.display = "none";
    setTimeout(() => {
      pagecontent.style.display = "block";
    }, 1000);
  }, 5900);
  searchIcon.addEventListener("mouseenter", up);
  today.addEventListener("click", upToday);
  tomorrowNigeriatext.addEventListener("click", upTomorrow);
  threedays.addEventListener("click", upThreedays);
  tomorrowGeneraltext.addEventListener("click", GeneralTomorrow);
  todayGeneral.addEventListener("click", todayGeneralText);
  threeDaysGeneral.addEventListener("click", threeDaysGeneralText);
}
executeAllAnimations();

//three days weather condition
let threedaysBtn = document.querySelector(".threedays");
let AllThreeDays = document.querySelector(".AllThreeDays");
let home_div = document.querySelector(".home_div");
let celciusForThreeDays = document.querySelector(".celciusForThreeDays");
let weatherPic = document.querySelector(".degreePic");
let weatherPicTomorrow = document.querySelector(".degreePicTomorrow");
let weathercondition = document.querySelector(".weatherCondition");
let weatherConditionTomorrow = document.querySelector(
  ".weatherConditionTomorrow"
);
let TomorrowDate = document.querySelector(".tomorrow");
let thirdDayWeather = document.querySelector(".weatherConditionThirdDay");
let thirdDayWeatherPic = document.querySelector(".weatherPicThirdDay");
let firstDayWeatherBox = document.querySelector(".firstDayWeather");
let secondDayWeatherBox = document.querySelector(".secondDayWeather");
let thirdDayWeatherBox = document.querySelector(".thirdDayWeather");
let threedaysGenBtn = document.querySelector(".threedaysGeneral");
let firstDayWeatherGeneral = document.querySelector(".firstDayWeatherGeneral");
let secondDayWeatherGeneral = document.querySelector(
  ".secondDayWeatherGeneral"
);
let thirdDayWeatherGeneral = document.querySelector(".thirdDayWeatherGeneral");
function callThreeDays() {
  return fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Nigeria&days=3`,
    options
  );
}
callThreeDays()
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    let result = Object.entries(data);
    let ThirddayWeatherCondition =
      result[2][1].forecastday[2].day.condition.text;
    let ThirddayWeatherPic = result[2][1].forecastday[2].day.condition.icon;
    let weatherDiscription = result[1][1].condition.text;
    let weatherIcon = result[1][1].condition.icon;
    let celciusResult = result[1][1].feelslike_c;
    let cloudtext = result[2][1].forecastday[1].day.condition.text;
    let cloudpic = result[2][1].forecastday[1].day.condition.icon;
    function runThreeDays() {
      firstDay.style.display = "flex";
      secondDay.style.display = "flex";
      thirdDay.style.display = "flex";
      home_div.style.display = "none";
      home_div.style.transition = "1s";
      celciusForThreeDays.innerHTML = `${celciusResult} <span class="fealsLikeDegree">o</span>`;
      weatherPic.src = weatherIcon;
      weathercondition.innerHTML = weatherDiscription;
      weatherConditionTomorrow.innerHTML = cloudtext;
      AllThreeDays.style.display = "unset";
      weatherPicTomorrow.src = cloudpic;
      TomorrowDate.innerHTML = `${dayResult}, ${dateResult} ${MonthResult}`;
      thirdDayWeather.innerHTML = ThirddayWeatherCondition;
      thirdDayWeatherPic.src = ThirddayWeatherPic;

      let TheFirstBoxes = anime({
        targets: firstDayWeatherBox,
        opacity: 1,
        scale: 0,
        scale: 1,
        easing: "easeInOutBounce",
        duration: 1000,
        complete: () => {
          anime({
            targets: secondDayWeatherBox,
            opacity: 1,
            scale: 0,
            scale: 1,
            easing: "easeInOutBounce",
            duration: 1000,

            complete: () => {
              anime({
                targets: thirdDayWeatherBox,
                opacity: 1,
                scale: 1,
                easing: "easeInOutBounce",
                duration: 1000,
              });
            },
          });
        },
      });
    }
    threedaysBtn.addEventListener("click", runThreeDays);
    function runthreeDaysGeneral() {
      let ThesecondBoxesGen = anime({
        targets: firstDayWeatherGeneral,
        opacity: 1,
        scale: 0,
        scale: 1,
        easing: "linear",
        duration: 1000,
        complete: () => {
          anime({
            targets: secondDayWeatherGeneral,
            opacity: 1,
            scale: 0,
            scale: 1,
            easing: "linear",
            duration: 1000,

            complete: () => {
              anime({
                targets: thirdDayWeatherGeneral,
                opacity: 1,
                scale: 1,
                easing: "linear",
                duration: 1000,
              });
            },
          });
        },
      });
    }
    threedaysGenBtn.addEventListener("click", runthreeDaysGeneral);
  });
