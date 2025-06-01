fetch("https://api.openweathermap.org/data/2.5/weather?q=Lviv&APPID=17901880cf618fa893ba9835f07915f7")
  .then(response => response.json())
  .then(data => document.querySelector(".weather").innerHTML = makeList(data));

function makeList(obj) {
    const placeholder = `<ul class="weather-list">
        <li><p>Погода: ${obj.weather[0].main}</p></li>
        <li><p>Кількість хмар: ${obj.clouds.all}</p></li>
        <li><p>Вологість: ${obj.main.humidity}</p></li>
        <li><p>Швидкість вітру: ${obj.wind.speed} км/год</p></li>
    </ul>`;
    return placeholder;
}
