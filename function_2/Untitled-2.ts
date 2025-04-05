const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { imageUrl } = JSON.parse(event.body);
  const API_KEY = "YOUR_DEEPAI_KEY";

  const response = await fetch("https://api.deepai.org/api/image-recognition", {
    method: "POST",
    headers: {
      "api-key": API_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `image=${encodeURIComponent(imageUrl)}`,
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
