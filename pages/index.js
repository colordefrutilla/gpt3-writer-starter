import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";
import { Link } from "next/link";
import { initGA, logPageView } from "../utils/gtag";
import { useEffect } from "react";

const phrases = [
  "Choose Green or Miss Out",
  "Be Green or Be Gone",
  "Go Eco or Goodbye",
  "Green Up or Give Up",
  "Go Green or Adios",
  "Choose Sustainability or See Ya",
  "Green up or ship out!",
];

const Home = () => {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const callGenerateEndpoint = async () => {
    setApiOutput("");
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/spanish/generate", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, industry }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    if (phraseIndex === phrases.length - 1) {
      setPhraseIndex(0);
    } else {
      console.log("updating phraseindex");
      setPhraseIndex(phraseIndex + 1);
    }

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const callGenerate2Endpoint = async () => {
    setApiOutput("");

    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/spanish/generate2", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, industry }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    if (phraseIndex === phrases.length - 1) {
      setPhraseIndex(0);
    } else {
      console.log("updating phraseindex");
      setPhraseIndex(phraseIndex + 1);
    }

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const callGenerate3Endpoint = async () => {
    setApiOutput("");
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/spanish/generate3", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, industry }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    if (phraseIndex === phrases.length - 1) {
      setPhraseIndex(0);
    } else {
      console.log("updating phraseindex");
      setPhraseIndex(phraseIndex + 1);
    }

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const callGenerate4Endpoint = async () => {
    setApiOutput("");

    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/spanish/generate4", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, industry }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    if (phraseIndex === phrases.length - 1) {
      setPhraseIndex(0);
    } else {
      console.log("updating phraseindex");
      setPhraseIndex(phraseIndex + 1);
    }

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const callGenerate5Endpoint = async () => {
    setApiOutput("");
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/spanish/generate5", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, industry }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    if (phraseIndex === phrases.length - 1) {
      setPhraseIndex(0);
    } else {
      console.log("updating phraseindex");
      setPhraseIndex(phraseIndex + 1);
    }

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  function MyApp({ Component, pageProps }) {
    useEffect(() => {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }, []);

    return <Component {...pageProps} />;
  }

  function onUserChangedText(event) {
    console.log(event.target.value);
    setCompanyName(event.target.value);
  }

  function onNewUserChangedText(event) {
    console.log(event.target.value);
    setIndustry(event.target.value);
  }

  return (
    <>
      <Head>
        <title>SustAInability</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/plant/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/plant/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/plant/favicon-16x16.png"
        />
        <link rel="manifest" href="/plant/site.webmanifest" />
      </Head>
      <div className="bg-gradient-to-b from-black to-black min-h-screen pb-20">
        <div className="max-w-3xl m-auto pt-20 px-2">
          <div className="header">
            <div className="header-title">
              <h1>
                sust
                <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-lime-400">
                  AI
                </span>
                nability <span className="text-white">made</span> easy.
              </h1>
            </div>
            <br />
            <div className="header-subtitle">
              <h2></h2>
            </div>
          </div>
          {/* Add this code here*/}

          <div
            /*className="prompt-container mt-28"*/
            className="mt-20 mb-12"
          >
            <input
              type="text"
              placeholder="ingresá el nombre de tu organización"
              value={companyName}
              onChange={onUserChangedText}
              className="input input-bordered input-lg w-full center whitespace-normal"
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="ingresá tu industria"
              value={industry}
              onChange={onNewUserChangedText}
              className="input input-bordered input-lg w-full center whitespace-normal"
            />
            <br />
            <br />
            <br />
            <div className="mb-8 text-center text-white">
              elegí en qué podemos ayudarte hoy 👇
            </div>
            <div className="flex flex-col mt-12">
              <button
                className="btn btn -outline border-lime-400 hover:bg-black text-white"
                onClick={callGenerate4Endpoint}
              >
                Empezar a construir una estrategia sustentable 📈
              </button>

              <button
                className="btn btn -outline mt-8 border-lime-300 hover:bg-black text-white"
                onClick={callGenerate5Endpoint}
              >
                Reportar tu progreso usando este template de reportes 📣
              </button>

              <button
                className="btn btn -outline mt-8 border-lime-200 hover:bg-black text-white"
                onClick={callGenerateEndpoint}
              >
                Desarrollar un procedimiento estándar para compras sustentables
                🛒
              </button>

              <button
                className="btn btn -outline mt-8 border-lime-100 hover:bg-black text-white"
                onClick={callGenerate2Endpoint}
              >
                Comunicar acciones sustentables con esta plantilla de comunicado
                de prensa ♻️
              </button>

              <button
                className="btn btn -outline mt-8 border-lime-50 hover:bg-black text-white"
                onClick={callGenerate3Endpoint}
              >
                Templates para posteos en redes sociales✨
              </button>
            </div>
            {/* New code I added here */}
            <br />
            <br />
            <br />
            <br />
            <div className=" text-center text-white">
              {isGenerating ? (
                <div>
                  <div className="mb-8">
                    la generación de respuestas tarda entre 20 a 30 segundos.
                    <br />
                    ¿no te convenció el resultado? Volvé a generarlo apretando
                    el mismo botón que antes.
                    <br />
                    ⚠️si cerrás la página o apretás otros botones, las
                    respuestas se borran⚠️
                  </div>
                  <span className="loader h-12 w-12 "></span>
                </div>
              ) : null}
            </div>

            <br />
            <br />
            <br />
            {apiOutput && (
              <div className="output">
                <div className="output-header-container">
                  <div className="output-header">
                    <h3>{phrases[phraseIndex]}</h3>
                  </div>
                </div>

                <div className="output-content">
                  <p>{apiOutput}</p>
                </div>
              </div>
            )}
          </div>

          <div className="badge-container grow ">
            <a
              href="https://linktr.ee/marianaconstantin"
              target="_blank"
              rel="noreferrer"
            >
              <div className="badge">
                <p>Conectate conmigo</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
