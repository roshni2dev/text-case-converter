"use client";

import { useState } from "react";

import TextArea from "@/components/text-area";
import CaseButton from "@/components/case-button";
import CopyButton from "@/components/copy-button";

const Home = () => {
  const [text, setText] = useState("");
  const [activeCase, setActiveCase] = useState("");


  const toSentenceCase = (str: string) =>
    str.length ? str[0].toUpperCase() + str.slice(1).toLowerCase() : str;

  const toLowerCase = (str: string) => str.toLowerCase();
  const toUpperCase = (str: string) => str.toUpperCase();
  const toCapitalizedCase = (str: string) =>
    str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");


  const handleConvert = (type: string) => {
    let converted = text;

    switch (type) {
      case "sentence":
        converted = toSentenceCase(text);
        break;
      case "lower":
        converted = toLowerCase(text);
        break;
      case "upper":
        converted = toUpperCase(text);
        break;
      case "capitalized":
        converted = toCapitalizedCase(text);
        break;
    }

    setText(converted);
    setActiveCase(type);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Text Case Converter</h1>

      <TextArea text={text} setText={setText} />

      <div className="flex flex-wrap gap-3 mb-6">
        <CaseButton type="sentence" activeCase={activeCase} handleConvert={handleConvert}>
          Sentence Case
        </CaseButton>
        <CaseButton type="lower" activeCase={activeCase} handleConvert={handleConvert}>
          lower case
        </CaseButton>
        <CaseButton type="upper" activeCase={activeCase} handleConvert={handleConvert}>
          UPPER CASE
        </CaseButton>
        <CaseButton type="capitalized" activeCase={activeCase} handleConvert={handleConvert}>
          Capitalized Case
        </CaseButton>
        <CopyButton text={text} />
      </div>
    </main>
  );
}
export default Home