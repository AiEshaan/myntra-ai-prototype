const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { prompt } = JSON.parse(event.body);
  const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a fashion stylist assistant. Convert fashion prompts into mood, style, and item tags.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;

  return {
    statusCode: 200,
    body: JSON.stringify({ tags: reply }),
  };
};
