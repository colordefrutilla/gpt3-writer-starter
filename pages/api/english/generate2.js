import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Write a sustainable press release template for this company in the style of Greta Thunberg (don't mention her) emphasizing the urgency and importance of taking action on climate change. Start the text with one sentence explanation on why this template is useful and then include all the sections a press release template should have starting with a Headline. Optimize the message to effectively communicate the corporate commitment to sustainability and inspire others to take action. Tailor it to the company's specific industry.`;
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
