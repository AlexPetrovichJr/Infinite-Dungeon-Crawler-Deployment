const { Configuration, OpenAIApi } = require("openai");
const router = require("express").Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post("/", async (req, res) => {
  const { arrayOfMessages } = req.body;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: arrayOfMessages,
    temperature: 0.8, //this one is strange and requires messing with https://platform.openai.com/docs/api-reference/chat
    // max_tokens: 100,
  });
  res.send(completion.data.choices[0].message.content);
});

module.exports = router;
