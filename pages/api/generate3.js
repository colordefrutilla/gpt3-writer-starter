import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `
Write sustainable communication templates for a comporation [company name], in the style of Greta Thunberg (don't mention her) emphasizing the urgency and importance of taking action on climate change. Optimize the message for Instagram, LinkedIn, and Twitter thread with 3 twitts max, to effectively communicate the commitment to sustainability and inspire others to take action. Make Instagram's template is shorter than Linkedin's template, incorporate relevant hashtags and different emojis to make the posts more engaging and shareable.
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
