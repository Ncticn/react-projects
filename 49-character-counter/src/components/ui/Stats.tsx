"use client";
// NextJS
import Image from "next/image";

// Components
import CardStats from "./CardStats";

// Images
import PatternCharacterCount from "@/assets/patterns/pattern-character-count.svg";
import PatternSentenceCount from "@/assets/patterns/pattern-sentence-count.svg";
import PatternWordCount from "@/assets/patterns/pattern-word-count.svg";

// Props
interface StatsProps {
    totalCharactersValue: string;
    wordCountValue: string;
    sentenceCountValue: string;
}

function Stats({ totalCharactersValue, wordCountValue, sentenceCountValue }: StatsProps) {
    return (
        <div className="grid grid-rows-[repeat(3,130px)] md:grid-rows-1 grid-cols-1 md:grid-cols-[repeat(3,224px)] lg:grid-cols-[repeat(3,320px)] gap-4">
            <CardStats title="Total Characters" counter={totalCharactersValue} cardClass="bg-purple-400">
                <Image src={PatternCharacterCount} alt="Image Pattern Character Count" className="scale-90 object-contain" loading="eager" />
            </CardStats>
            <CardStats title="Word Count" counter={wordCountValue} cardClass="bg-yellow-500">
                <Image src={PatternWordCount} alt="Image Pattern Character Count" className="scale-90 object-contain" loading="eager" />
            </CardStats>
            <CardStats title="Sentence Count" counter={sentenceCountValue} cardClass="bg-orange-500">
                <Image src={PatternSentenceCount} alt="Image Pattern Character Count" className="scale-90 object-contain" loading="eager" />
            </CardStats>
        </div>
    );
}

export default Stats;