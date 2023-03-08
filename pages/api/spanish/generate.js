import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Desarrollar procedimiento estandar de compras corporativas sustentables para reducir el impacto ambiental y social de la compañía. Debe incluir recomendaciones claras y accionables y las siguientes secciones: Paso 1: Establecer una política de compras sustentables, Paso 2: Establecer los criterios de selección para los proveedores, Paso 3: Establecer una comunicación clara con los proveedores y evaluarlos, Paso 4: Establecer un sistema de control de sustentabilidad. Paso 5: Establecer un sistema de seguimiento, auditoría y difusión. La guía debe presentarse en formato profesional, de fácil lectura para compartirla con las partes interesadas internas y externas.`;
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
