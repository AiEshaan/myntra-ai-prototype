fetch("https://your-site.netlify.app/.netlify/functions/getWeather", {
  method: "POST",
  body: JSON.stringify({ city: "Goa" }),
}).then(res => res.json()).then(console.log);
