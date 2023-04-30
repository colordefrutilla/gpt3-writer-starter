import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `You are a Corporate Sustainability Consultant providing this organization ${req.body.companyName} with an extensive sustainability report template that is structured this way: 3 specific questions and example answers + KPIS per section as follows: ENVIRONMENTAL IMPACT, SOCIAL / COMMUNITY IMPACT, GOVERNANCE AND TRANSPARENCY, ORGANIZATION'S EMPLOYMENT PRACTICES, FUTURE OUTLOOK. focus the report template on B corporation certificate standars and the industry ${req.body.industry}. The template should focus on the industry ${req.body.industry}. This template should be suitable for reporting to customers as well as stakeholders. Don't ever introduce yourself. Reply in Spanish from Argentina with a light fun tone but formal.`;

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
