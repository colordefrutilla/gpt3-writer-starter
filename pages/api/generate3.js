import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `
Write 3 texts in the style of Greta Thunberg to explain in a general way the actions the company is taking regarding Climate Change. Make sure to write as if you are a corporation, avoid to use "I" and make the texts different and optimized for the social media they are going to be published on.that are going to be templates for an 1)Instagram post (it should be really short and use emojis), 2) Linkedin post (should be longer than the instagram post) 3) Twitter thread with 3 twits using emojis. `;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.85,
    max_tokens: 2033,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
