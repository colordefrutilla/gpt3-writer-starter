import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix =`
Write me a list of sustainable products for this corporation, including 2 examples of each of these categories: office supplies, sustainable packaging, reusable products, compostable items, sustainable daily life products. Each of the products should be shown with a short explanation of why they are sustainable compared to the regular product. After each product, include 2 texts in the style of Greta Thunberg that are going to be templates for an instagram post (it should be really short) on one hand, and a linkedin post on the other hand for corporation to explain the actions they are taking regarding Climate Change. Make sure to write as if you are a corporation, avoid to use "I" and make the texts different and optimized for the social media they are going to be published on. Make the LinkedIn text longer than the one for Instagram. At the end, write a Guideline for sustainable purchasing using bullet points and the fact that less is more, make it general, friendly and for corporations. 
Product, Why is it sustainable?:
Text 1, Template for Instagram post:
Text 2, Template for LinkedIn post:
Example of a Guideline for sustainable purchasing process:
`
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.85,
    max_tokens: 2033,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;