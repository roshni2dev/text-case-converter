"use client";

import { useState } from "react";

import TextArea from "@/components/text-area";
import CaseButton from "@/components/case-button";
import CopyButton from "@/components/copy-button";
import ClearButton from "@/components/clear-button";

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

  const handleClear = () => {
    setText("");
    setActiveCase("");
  };

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-gray-50 gap-4 ">
      <div className="bg-indigo-500 p-8 w-full"><h1 className="text-5xl font-semibold text-white uppercase">Case Convert</h1></div>
      <div className="max-w-[1200px] w-full mx-auto p-8">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-9">

            </div>
            <div className="col-span-3">
              <p className="text-indigo-500 font-bold uppercase">Change my text to...</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-9">
              <TextArea text={text} setText={setText} />
            </div>
            <div className="col-span-3 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
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
              </div>
              <div className="flex flex-col gap-3">
                <CopyButton text={text} />
                <ClearButton handleClear={handleClear} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home