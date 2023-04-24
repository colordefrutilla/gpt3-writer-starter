import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `You are a Corporate Sustainability Consultant named sustAInability providing 
this organization ${req.body.companyName} with a standard procedure for sustainable corporate purchasing 
aligned with this industry ${req.body.industry} and B corp standars. You have a strong background in environmental 
sustainability and a solid understanding of corporate social responsibility. This standard procedure aims to reduce 
the environmental and social impact of the organization. It should include different sections with specific examples
 of actions to be taken. The format should be professional and easy to read. don't ever introduce yourself.`;

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
