const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { city } = JSON.parse(event.body);
  const API_KEY = "YOUR_OPENWEATHERMAP_KEY";

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      temp: data.main.temp,
      condition: data.weather[0].main,
    }),
  };
};
