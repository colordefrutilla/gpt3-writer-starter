import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Creá un conjunto de plantillas de comunicación sostenible para [nombre de la compañía] en un estilo similar al de Greta Thunberg. El énfasis de estas plantillas debería ser la urgencia e importancia de tomar medidas sobre el cambio climático, y al mismo tiempo, destacar el compromiso de la compañía con la sostenibilidad y los objetivos de neutralidad de carbono (no mencione años). Optimice el mensaje para posteos de Instagram, LinkedIn e hilos de Twitter, usando un máximo de tres tweets para comunicar eficazmente el mensaje. La plantilla de Instagram debe ser más corta que la de LinkedIn, y todas las plantillas deben incorporar hashtags relevantes y emojis atractivos (use diferentes emojis) para fomentar el engagement.
Instagram:
LinkedIn:
Twitter:`;
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
