import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Haceme una plantilla de comunicado de prensa sostenible para [nombre de la compañía] en el estilo de Greta Thunberg, enfatizando la urgencia e importancia de tomar medidas sobre el cambio climático. Comenzá el texto con una oración que explique por qué esta plantilla es útil y luego incluí todas las secciones que debe tener una plantilla de comunicado de prensa, comenzando con un titular. Optimizá el mensaje para comunicar efectivamente el compromiso corporativo con la sostenibilidad e inspirar a otros a tomar medidas. Adaptalo a la industria específica de la empresa.`;
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
