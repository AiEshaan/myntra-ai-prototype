const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { prompt } = JSON.parse(event.body);
  const API_TOKEN = "YOUR_REPLICATE_API_TOKEN";

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      version: "your-model-version-id",  // e.g. stable-diffusion
      input: { prompt },
    }),
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
