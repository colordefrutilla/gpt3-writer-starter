import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Create a set of sustainable communication templates for [company name] that adopt a style similar to Greta Thunberg's. The emphasis of these templates should be on the urgency and importance of taking action on climate change, while also showcasing the company's commitment to sustainability and carbon neutral goals (don't mention years). Optimize the message for Instagram, LinkedIn, and Twitter threads, using a maximum of three tweets to effectively communicate the message. The Instagram template should be shorter than the LinkedIn template, and all templates should incorporate relevant hashtags and engaging emojis (use different emojis) to encourage sharing.
Instagram:
LinkedIn:
Twitter:`;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.9,
    max_tokens: 2033,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
