"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import Cv from "@/components/Cv/Cv";
import { CV } from "@/types/cv";
import { cvSchema } from "@/schemas/cvSchema";

import jonhdoe from "@/jonhdoe.json";
import empty from "@/empty.json";
import { Locales } from "@/utils/locale/locale";
import { Theme } from "@/types/cvModel";
import NewCv from "./components/NewCv";

export default function Page() {
  const [cvData, setCvData] = useState(empty as CV);
  const [locale, setLocale] = useState("es" as Locales);
  const [theme, setTheme] = useState("cvThemeLight" as Theme);
  const [textareaValue, setTextareaValue] = useState(
    JSON.stringify(empty, null, 2),
  );
  const [error, setError] = useState("");

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;
    setTextareaValue(newValue);
    try {
      const parsedData = JSON.parse(newValue);
      cvSchema.parse(parsedData); //zod validation
      setCvData(parsedData);
      setError("");
    } catch (error: any) {
      console.error("Invalid JSON");
      setError(error.message);
    }
  };

  const handleSaveClick = () => {
    if (error) return;
    (document.getElementById("saveModal") as HTMLFormElement).showModal();
  };

  const handleResetClick = () => {
    setTextareaValue(JSON.stringify(empty, null, 2));
    setCvData(empty);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as Theme);
  };

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value as Locales);
  };

  return (
    <>
      <main className="flex h-screen p-10">
        <Suspense fallback={<div className="skeleton h-full w-full"></div>}>
          <NewCv
            cvData={cvData}
            setCvData={setCvData}
            locale={locale}
            setLocale={setLocale}
            theme={theme}
            setTheme={setTheme}
            textareaValue={textareaValue}
            setTextareaValue={setTextareaValue}
          />
        </Suspense>
        <div className="w-1/3 h-full">
          <div className="flex gap-1">
            <select
              onChange={handleLocaleChange}
              className="select"
              defaultValue={locale}
            >
              <option value="en">en</option>
              <option value="es">es</option>
            </select>
            <select
              onChange={handleThemeChange}
              className="select"
              defaultValue={theme}
            >
              <option value="cvThemeLight">Light</option>
              <option value="cvThemeDark">Dark</option>
            </select>
            <button onClick={handleResetClick} className="btn btn-warning">
              Reset
            </button>
            <button onClick={handleSaveClick} className="btn btn-success">
              Save
            </button>
          </div>
          <h3>{error}</h3>
          <textarea
            className={`textarea resize-none w-full h-5/6 p-10 rounded-lg focus:outline-none ${error ? "border-red-700" : ""}`}
            spellCheck={false}
            placeholder="Enter your text here"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
        </div>
      </main>
    </>
  );
}
