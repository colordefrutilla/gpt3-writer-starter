import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `Provide this organization ${req.body.companyName} with a set of sustainable communication templates in the style of Greta Thunberg. Emphasis on the urgency and importance 
  of taking action on climate change. Optimize the message for the industry ${req.body.industry}, 
  Instagram posts, LinkedIn posts, and Twitter threads, using a maximum of three tweets. The Instagram template 
  should be shorter than the LinkedIn template. Instagram and Linkedin templates should include relevant hashtags 
  and attractive emojis (use different emojis) to encourage engagement. Everything should be in a fun tone but formal.
Instagram:
LinkedIn:
Twitter:`;

  // Run first prompt
  console.log(`API:${req.body.industry}${req.body.companyName} `);

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
