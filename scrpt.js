 const apikeys = "bd28cea822b1b1747ea82b5009bb2ddc";
 const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
 const input=document.querySelector(".inp");
 const searchButton = document.querySelector(".search button");
 const weathericon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiurl + `&q=${city}&appid=${apikeys}`);
  console.log(response);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    // console.log(searchBox);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
     if (data.weather[0].main == "Clouds")
      weathericon.src = "images/clouds.png";
     else if (data.weather[0].main == "Clear")
       weathericon.src = "images/clear.png";
     else if (data.weather[0].main == "Rain")
       weathericon.src = "images/rain.png";
     else if (data.weather[0].main == "Drizzle")
       weathericon.src = "images/drizzle.png";
     else if (data.weather[0].main == "Mist")
       weathericon.src = "images/mist.png";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchButton.addEventListener("click",()=> {
  
    checkWeather(input.value);
     });


