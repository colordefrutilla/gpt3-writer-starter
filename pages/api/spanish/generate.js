import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `provide a template for starting a sustainable strategy inside this organization ${req.body.companyName} considering i have no idea what sustainable practices are. the template should be specific and simple following this format: for each of the sections below you'll include 2 trigger questions and its example answers. the template must be based on the sustainable development goals from UN. the template should have different sections as it follows: CONTEXT ANALYSIS focused on sustainable and social impact; OBJECTIVES AND BUDGET; OPPORTUNITY EXPLORATION; EXECUTION TEAM; MONITORING; CONCLUSION; RESOURCES: provide the url of the SDG website and a link to an example of industry ${req.body.industry} best practices. for each of the sections below you'll include 2 trigger questions and its example answers. tailor the template for the industry ${req.body.industry} best practices. answer in spanish from argentina`;

  // Run first prompt
  console.log(`API:${req.body.industry}${req.body.companyName} `);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.75,
    max_tokens: 2033,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
