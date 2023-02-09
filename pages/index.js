import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";
import { Link } from "next/link";

const phrases = [
  "Choose Green or Miss Out",
  "Be Green or Be Gone",
  "Go Eco or Goodbye",
  "Green Up or Give Up",
  "Go Green or Adios",
  "Choose Sustainability or See Ya",
];

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
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
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate2", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
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
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate3", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
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

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="bg-gradient-to-b from-slate-900 to-teal-600 min-h-screen pb-20">
      <div className="max-w-3xl m-auto pt-20">
        <div className="header">
          <div className="header-title">
            <h1>Sustainability made easy</h1>
          </div>
          <br />
          <div className="header-subtitle">
            <h2></h2>
          </div>
        </div>
        {/* Add this code here*/}

        <div
          /*className="prompt-container mt-28"*/
          className="mt-28 mb-12"
        >
          {/* <textarea
            placeholder="Write your company name and your area like this: Fernet&Coke SA, Argentina"
            className="bg-neutral-800 border-double border-2 border-white  hover:bg-neutral-900"
            value={userInput}
            onChange={onUserChangedText}
          /> */}
          <input
            type="text"
            placeholder="Write your company name and your area like this: Fernet&Coke SA, Argentina"
            value={userInput}
            onChange={onUserChangedText}
            className="input input-bordered input-lg w-full center"
          />
          <br />
          <div className="flex flex-col mt-12">
            <button className="btn btn-outline" onClick={callGenerateEndpoint}>
              Generate your Sustainable Purchasing Guideline
            </button>
            <button
              className="btn btn-outline mt-6"
              onClick={callGenerate2Endpoint}
            >
              Uncover Earth-Friendly Items in your area
            </button>
            <button
              className="btn btn-outline mt-6"
              onClick={callGenerate3Endpoint}
            >
              Spread the Word on Social Media
            </button>
          </div>
          {/* New code I added here */}
          <br />
          <br />
          <br />
          <br />
          <div className="radial-progress ml-80">
            <a
              className={isGenerating ? "" : "null"}
              onClick={callGenerateEndpoint}
              onClick={callGenerate2Endpoint}
              onClick={callGenerate3Endpoint}
            >
              <div className="radial-progress">
                {isGenerating ? <span className="loader"></span> : <p></p>}
              </div>
            </a>
          </div>
          <br />
          <br /> <br />
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

        <div className="badge-container grow">
          <a
            href="https://buildspace.so/builds/ai-writer"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge">
              <Image src={buildspaceLogo} alt="buildspace logo" />
              <p>build with buildspace</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
