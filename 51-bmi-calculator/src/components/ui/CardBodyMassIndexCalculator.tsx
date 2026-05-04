"use client";

// React
import { Dispatch, SetStateAction, useEffect, useState } from "react";


// Components
import BarInformation from "./BarInformation";
import InputText from "./InputText";
import InputRadio from "./InputRadio";

// Utility Functions
import bmiCalculateMetric from "@/src/utils/calculate/bmiCalculateMetric";
import bmiCalculateImperial from "@/src/utils/calculate/bmiCalculateImperial";
import { motion } from "motion/react";


export default function CardBodyMassIndexCalculator() {
    const [calculationType, setCalculationType] = useState("metric");
    const [result, setResult] = useState({
        bmi: "",
        message: "",
        minWeight: "",
        maxWeight: "",
    })

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const [heightFt, setHeightFt] = useState("");
    const [heightIn, setHeightIn] = useState("");
    const [weightSt, setweightSt] = useState("");
    const [weightLbs, setweightLbs] = useState("");

    const handleFields = (value: string, maxLength: number, setState: Dispatch<SetStateAction<string>>) => {
        const cleanValue = value.trim();
        const onlyNumberValue = cleanValue.replaceAll(/[^0-9]/g, "");

        if (onlyNumberValue[0] === "0") setState("1");
        if (onlyNumberValue.length <= maxLength) setState(onlyNumberValue)
    }


    useEffect(() => {

        const bmi = bmiCalculateImperial(Number(heightFt), Number(heightIn), Number(weightSt), Number(weightLbs));

        setResult(
            {
                bmi: bmi.bmi.toString(),
                message: bmi.message,
                minWeight: bmi.minWeight,
                maxWeight: bmi.maxWeight
            }
        );

    }, [heightFt, heightIn, weightSt, weightLbs]);

    useEffect(() => {

        const numberHeight = Number(height) / 100;
        const numberWeight = Number(weight);
        const bmi = bmiCalculateMetric(numberHeight, numberWeight);

        setResult(
            {
                bmi: bmi.bmi.toString(),
                message: bmi.message,
                minWeight: bmi.minWeight + "kgs",
                maxWeight: bmi.maxWeight + "kgs"
            }
        );
    }, [weight, height]);

    useEffect(() => {

        setHeight("");
        setWeight("");
        setHeightFt("");
        setHeightIn("");
        setweightLbs("");
        setweightSt("");
        setResult(
            {
                bmi: "",
                message: "",
                minWeight: "",
                maxWeight: ""
            }
        );

    }, [calculationType]);

    return (
        <motion.div
            initial={{ x: 100, opacity:0 }}
            whileInView= {{x: 0, opacity: 1}}
            transition={{ type: "spring" , bounce: 0, visualDuration: 0.75}}

            className="bg-white rounded-2xl drop-shadow-[16px_32px_56px_rgba(143,174,207,25%)] px-6 py-6 md:px-8 md:py-8">
            <div className="space-y-6 md:space-y-8">
                <h3 className="text-preset-4 text-blue-900">Enter your details below</h3>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col items-stretch justify-center gap-6 md:gap-8">
                        <div className="grid grid-cols-2 items-center justify-center gap-6">
                            <InputRadio
                                id="input-radio-metric"
                                name="input-metric"
                                label="Metric"
                                value="metric"
                                selected={calculationType}
                                setSelected={setCalculationType}
                            />
                            <InputRadio
                                id="input-radio-imperial"
                                name="input-imperial"
                                label="Imperial"
                                value="imperial"
                                selected={calculationType}
                                setSelected={setCalculationType}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 items-end justify-center gap-4 md:gap-6">
                            {calculationType === "metric" &&
                                <>
                                    <InputText
                                        id="input-text-height-cm"
                                        name="input-height-cm"
                                        label="Height"
                                        suffix="cm"
                                        placeholder="0"
                                        value={height}
                                        onChange={(value) => handleFields(value, 3, setHeight)}
                                    />
                                    <InputText
                                        id="input-text-weight-kg"
                                        name="input-weight-kg"
                                        label="Weight"
                                        suffix="kg"
                                        placeholder="0"
                                        value={weight}
                                        onChange={(value) => handleFields(value, 3, setWeight)}

                                    />
                                </>
                            }
                            {
                                calculationType === "imperial" &&
                                <>
                                    <InputText
                                        id="input-text-height-ft"
                                        name="input-height-ft"
                                        label="Height"
                                        suffix="ft"
                                        placeholder="0"
                                        value={heightFt}
                                        onChange={(value) => handleFields(value, 2, setHeightFt)}

                                    />
                                    <InputText
                                        id="input-text-height-in"
                                        name="input-height-in"
                                        suffix="in"
                                        placeholder="0"
                                        value={heightIn}
                                        onChange={(value) => handleFields(value, 2, setHeightIn)}

                                    />
                                    <InputText
                                        id="input-text-weight-st"
                                        name="input-weight-st"
                                        label="Weight"
                                        suffix="st"
                                        placeholder="0"
                                        value={weightSt}
                                        onChange={(value) => handleFields(value, 2, setweightSt)}

                                    />
                                    <InputText
                                        id="input-text-weight-lbs"
                                        name="input-weight-lbs"
                                        suffix="lbs"
                                        placeholder="0"
                                        value={weightLbs}
                                        onChange={(value) => handleFields(value, 2, setweightLbs)}

                                    />
                                </>
                            }
                        </div>

                        <BarInformation bmi={Number(result.bmi)} >
                            {result.message} Your ideal weight is between <b>{result.minWeight} - {result.maxWeight}.</b>
                        </BarInformation>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}