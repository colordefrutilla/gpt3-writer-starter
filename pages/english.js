import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";
import { Link } from "next/link";
import { initGA, logPageView } from "../utils/gtag";
import { useEffect } from "react";
import { Bubble } from "@typebot.io/react";

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
  const [copyButtonLabel, setCopyButtonLabel] = useState("copy output");

  const callGenerateEndpoint = async () => {
    setApiOutput("");
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/english/generate", {
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
    const response = await fetch("/api/english/generate2", {
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
    const response = await fetch("/api/english/generate3", {
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
    const response = await fetch("/api/english/generate4", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, industry }),
    });

    const data = await response.json();
    const { output } = data;

    console.log("OpenAI replied...", data.output.text);

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
    const response = await fetch("/api/english/generate5", {
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

  function copy() {
    // put code to copy text here
    let textToCopy = apiOutput;
    navigator.clipboard.writeText(textToCopy);
    setCopyButtonLabel("copied!");
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

      <Bubble
        typebot="basic-chat-gpt-copy-27lw6wa"
        theme={{
          button: { backgroundColor: "#0042DA", iconColor: "#FFFFFF" },
          previewMessage: { backgroundColor: "#ffff", textColor: "black" },
        }}
      />

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
              placeholder="type: company Name"
              value={companyName}
              onChange={onUserChangedText}
              className="input input-bordered input-lg w-full center whitespace-normal"
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="type: industry"
              value={industry}
              onChange={onNewUserChangedText}
              className="input input-bordered input-lg w-full center whitespace-normal"
            />
            <br />
            <br />
            <br />
            <div className="mb-8 text-center text-white">
              how can we help you today? 👇
            </div>
            <div className="flex flex-col mt-12">
              <button
                className="btn btn -outline border-lime-200 hover:bg-black text-white"
                onClick={callGenerateEndpoint}
              >
                start a sustainable plan 🧩
              </button>

              <button
                className="btn btn -outline mt-8 border-lime-300 hover:bg-black text-white"
                onClick={callGenerate5Endpoint}
              >
                Build a progress report 📣
              </button>

              <button
                className="btn btn -outline mt-8 border-lime-100 hover:bg-black text-white"
                onClick={callGenerate2Endpoint}
              >
                Craft a press release on Sustainability efforts ♻️
              </button>

              <button
                className="btn btn -outline mt-8 border-lime-50 hover:bg-black text-white"
                onClick={callGenerate3Endpoint}
              >
                Spread the Word on Social Media✨
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
                    generation takes about 40 seconds.
                    <br />
                    didn't like the output? just hit the same button again to
                    re-generate the answer.
                    <br />
                    ⚠️if you close the site or press other buttons, previous
                    outputs will disappear.⚠️
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
                <br />
                <button className="btn text-white" onClick={copy}>
                  {copyButtonLabel}
                </button>
                <div className="output-content">
                  <p>{apiOutput}</p>
                </div>
                <br />
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
                <p>connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
