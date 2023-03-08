import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Proporcioname una plantilla para armar una estrategia de sustentabilidad accionable siguiendo los estándares del Sistema B (B Corporation) que ayude a identificar objetivos de sostenibilidad a organizaciones. Debe tener diferentes secciones (todas enfocadas en estrategias de sostenibilidad). La plantilla debe tener preguntas específicas y desencadenantes que sean adecuadas para personas no educadas en sostenibilidad. Use números para identificar cada sección y viñetas para cada subsección. Usar la palabra ambiente en vez de medio ambiente. No mencionar al Sistema B ni B Corporation.`;
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
