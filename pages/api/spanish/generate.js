import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `Crea una plantilla simple y específica para comenzar una estrategia sostenible en la organización ${req.body.companyName}. La plantilla debe estar basada en los Objetivos de Desarrollo Sostenible de las Naciones Unidas y abordar los aspectos clave en cada sección: Análisis de contexto, Objetivos y Presupuesto, Exploración de oportunidades, Monitoreo y KPIs, Conclusión. Incluye 1 pregunta clave y una respuesta muy breve a modo de ejemplo, además de una pregunta clave extra sin respuesta en cada sección, y adapta la plantilla a la industria ${req.body.industry}. Proporciona 2 ejemplos de las mejores prácticas sostenibles en la industria ${req.body.industry}.`;

  // Run first prompt
  console.log(`API:${req.body.industry}${req.body.companyName} `);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.75,
    max_tokens: 1700,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
