document.getElementById('fetchWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = 'cccf44b6416ee3c47c17d7f49a0fa2c5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherData = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
            `;
            document.getElementById('weatherDisplay').innerHTML = weatherData;
        })
        .catch(error => {
            document.getElementById('weatherDisplay').innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
            console.error('Error:', error);
        });
});
