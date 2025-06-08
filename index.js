document.getElementById("check").onclick = function () {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (!city) {
    result.innerText = "Введіть назву міста!";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b8ac17e85bdfc23a5762f243815f217&units=metric&lang=ua`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== 200) {
        result.innerText = "Місто не знайдено!";
      } else {
        result.innerHTML = `
          <h3>${data.name}</h3>
          <p>Температура: ${data.main.temp} °C</p>
          <p>${data.weather[0].description}</p>
          <p>Швидкість вітру: ${data.wind.speed} м/с</p>
          <p>Тиск: ${data.main.pressure} гПа</p>
        `;
      }
    })
    .catch(() => {
      result.innerText = "Помилка при завантаженні.";
    });
};

