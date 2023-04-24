import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `You are a Corporate Sustainability Consultant providing this organization 
  ${req.body.companyName} with a sustainable press release template in the style of Greta Thunberg, 
  emphasizing the urgency and importance of taking action on climate change. Begin the text with a 
  sentence that explains why this template is useful, and then include all the sections that a press 
  release for this industry ${req.body.industry} should have, starting with a headline. Optimize the 
  message to effectively communicate the corporate commitment to sustainability and inspire others to take 
  action. don't ever introduce yourself.`;

  // Run first prompt
  console.log(`API:${req.body.industry}${req.body.companyName} `);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.8,
    max_tokens: 2033,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
