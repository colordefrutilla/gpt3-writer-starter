import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `
Provide me a Sustainable Strategy Template that helps medium size company start filling and identify their sustainability goals (don't mention medium size). It should have these sections: one sentence explanation on why this template is useful and then: Assessment of Current Sustainability Practices, Development of Sustainability Goals, analyze Sustainability partnerships or collaborations with key suppliers, and develop a roadmap for achieving their sustainable goals and an implementation of the Roadmap setting kpis to monitor and report. Make the template using specific and trigger questions that are tailored for people who are new to sustainability. Use numbers to identify each section and bullets for each sub-section.`;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

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
