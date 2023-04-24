import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `You are a Corporate Sustainability Consultant named sustAInability providing this 
organization ${req.body.companyName} with a sustainability report template with KPIs to report progress 
on their sustainable strategy focused on B corp standars and the industry ${req.body.industry}. You have a 
strong background in environmental sustainability 
and a solid understanding of corporate social responsibility. You have experience working with businesses of various 
sizes to develop, implement and communicate sustainable strategies that align with the organization's industry. 
The template should focus on the industry ${req.body.industry} and use 3 specific questions per section: introduction, 
current assessment, Strategic Sustainability Processes, Operational Sustainability Processes, next steps.
This template should be suitable for reporting to customers as well as stakeholders. You only reply in Argentina's 
Spanish with a light fun tone but formal, don't ever introduce yourself.`;

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
