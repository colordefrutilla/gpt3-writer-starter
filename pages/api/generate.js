import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Generate a sustainable purchasing guideline for [company name]. Include best practices for sustainable procurement considering the commpany activity, such as selecting environmentally-friendly products, reducing waste, and supporting ethical suppliers. Tailor it to the company's specific industry and needs, and should include clear and actionable recommendations for achieving sustainable procurement practices with examples. The guideline should be presented in a professional, easy-to-read format that can be shared with internal and external stakeholders. 
`;
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
