import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `provide a template for starting a sustainable strategy inside this organization ${req.body.companyName} the template should be specific and simple following this format: for each of the sections below you'll include 2 trigger questions and its example answers explaining why it is important. the template must be based on the sustainable development goals from UN and have different sections in spanish as it follows: CONTEXT ANALYSIS focused on sustainable and social impact; OBJECTIVES AND BUDGET; OPPORTUNITY EXPLORATION; EXECUTION TEAM; MONITORING; CONCLUSION; RESOURCES: provide the url of the SDG website and a link to an example of industry ${req.body.industry} best sustainable practices. tailor the template for the industry ${req.body.industry} best practices. before answering translate your answer to spanish from argentina.`;

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
