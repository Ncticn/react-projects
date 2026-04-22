"use client";

// React
import { useEffect, useState } from "react";

// Components
import TextAnalyzer from "@/components/ui/TextAnalyzer";
import Stats from "@/components/ui/Stats";
import LetterDensity from "@/components/ui/LetterDensity";

// Utility Functions
import utilCharactersCounter from "@/utils/utilCharactersCounter";
import utilWordCounter from "@/utils/utilWordCounter";
import utilSentenceCounter from "@/utils/utilSentenceCounter";


export default function Home() {
  const [totalCharacters, setTotalCharacters] = useState("00");
  const [wordCount, setWordCount] = useState("00");
  const [sentenceCount, setSentenceCount] = useState("00");
  const [userValue, setUserValue] = useState("");
  const [excludeSpace, setExcludeSpace] = useState<boolean>(false);
  const [maxLength, setMaxLength] = useState<number>();

  function handleTextarea(value: string, isIncluding: boolean, length?: number) {
    setUserValue(value);
    setExcludeSpace(isIncluding);
    setMaxLength(length);
  }

  useEffect(() => {
    setTotalCharacters(userValue === "" ? "00" : utilCharactersCounter(userValue, excludeSpace));
    setWordCount(userValue === "" ? "00" : utilWordCounter(userValue));
    setSentenceCount(userValue === "" ? "00" : utilSentenceCounter(userValue));

  }, [userValue, excludeSpace, maxLength]);

  return (
    <section>
      <div className="space-y-10 lg:space-y-12">
        <h1 className="text-preset-1 text-neutral-900 dark:text-neutral-100 text-center max-w-137.5 mx-auto">Analyze your text in real-time.</h1>
        <TextAnalyzer text={handleTextarea} />
        <div className="space-y-6">
          <Stats totalCharactersValue={totalCharacters} wordCountValue={wordCount} sentenceCountValue={sentenceCount} />
          <LetterDensity text={maxLength ? userValue.slice(0, maxLength) : userValue} />
        </div>
      </div>
    </section>
  );
}