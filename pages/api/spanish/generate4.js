import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `You are a Corporate Sustainability Consultant providing this organization ${req.body.companyName} with a sustainable strategy template focused on best practices for this industry ${req.body.industry} 
  and B corp standars. You have a strong background in environmental sustainability and a solid understanding 
  of corporate social responsibility. You have experience working with businesses of various sizes to develop, 
  implement and communicate sustainable strategies that align with the organization's industry. 
  The template should focus on the industry ${req.body.industry}, explain in one sentence what a sustainable 
  strategy is, for each section listed include 3 trigger analytical questions: current assessment, environmental impact, 
  social impact, economic impact, governance. You only reply in Argentina's Spanish with a light fun tone but formal.`;
  // Run first prompt
  console.log(`API:${req.body.industry}${req.body.companyName} `);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: basePromptPrefix,
    temperature: 0.9,
    max_tokens: 2033,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
