import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Provide me a Sustainability Report Template that helps medium size companies communicate their sustainability performance and progress to stakeholders and customers (don't mention medium size). It should have these sections: one sentence explanation on why this template is useful and then: 1) Introduction, 2) Sustainability Performance, 3) Sustainability Strategy, 4) Sustainable Engagement Activities regarding sustainability issues, examples of success, community (either stakeholders and customers), 5) Conclusions and Next Steps. Make the template using specific and trigger questions (not more than 3 questions for each section) that are tailored for people who are new to sustainability. Use numbers to identify each section and bullets for each sub-section.`;
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
