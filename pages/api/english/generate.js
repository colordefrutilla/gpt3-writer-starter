import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `Create a simple and specific template to start a sustainable strategy in the organization ${req.body.companyName}. The template should be based on the United Nations Sustainable Development Goals and address key aspects in each section: Context Analysis, Goals and Budget, Opportunity Exploration, Monitoring and KPIs, Conclusion. Include 1 key question and a very brief answer as an example, as well as one additional key question without an answer in each section, and tailor the template to the industry ${req.body.industry}. Provide 2 examples of best sustainable practices in the industry ${req.body.industry}.`;

  // Run first prompt
  console.log(`API:${req.body.industry}${req.body.companyName} `);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.75,
    max_tokens: 1700,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
