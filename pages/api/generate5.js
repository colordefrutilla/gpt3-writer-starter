import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Proporcioname una plantilla de informe de sustentabilidad que ayude a las empresas a comunicar su desempeño y progreso en sostenibilidad a las partes interesadas y clientes. Debe tener diferentes secciones y el estilo de los reportes del Sistema B (B Corp). La plantilla debe utilizar preguntas específicas y desencadenantes (no más de 3 preguntas para cada sección) que sean adecuadas para personas nuevas en sostenibilidad. Use números para identificar cada sección y viñetas para cada subsección.`;
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
