"use client";

// React
import { useState } from "react";

// Components
import BarInformation from "./BarInformation";
import InputNumber from "./InputNumber";
import InputRadio from "./InputRadio";


export default function CardBodyMassIndexCalculator() {
    const [selected, setSelected] = useState("metric");

    return (
        <div className="bg-white rounded-2xl drop-shadow-[16px_32px_56px_rgba(143,174,207,25%)] px-8 py-8">
            <div className="space-y-8">
                <h3 className="text-preset-4 text-blue-900">Enter your details below</h3>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col items-stretch justify-center gap-8">
                        <div className="grid grid-cols-2 items-center justify-center gap-4">
                            <InputRadio
                                id="input-radio-metric"
                                name="input-metric"
                                label="Metric"
                                value="metric"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <InputRadio
                                id="input-radio-imperial"
                                name="input-imperial"
                                label="Imperial"
                                value="imperial"
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>

                        <div className="grid grid-cols-2 items-end justify-center gap-4">
                            {selected === "metric" &&
                                <>
                                    <InputNumber
                                        id="input-number-height-cm"
                                        name="input-height-cm"
                                        label="Height"
                                        suffix="cm"
                                        placeholder="0"
                                        value={selected}
                                        onChange={setSelected}
                                    />
                                    <InputNumber
                                        id="input-number-weight-kg"
                                        name="input-weight-kg"
                                        label="Weight"
                                        suffix="kg"
                                        placeholder="0"
                                        value={selected}
                                        onChange={setSelected}
                                    />
                                </>
                            }
                            {
                                selected === "imperial" &&
                                <>
                                    <InputNumber
                                        id="input-number-height-ft"
                                        name="input-height-ft"
                                        label="Height"
                                        suffix="ft"
                                        placeholder="0"
                                        value={selected}
                                        onChange={setSelected}
                                    />
                                    <InputNumber
                                        id="input-number-height-in"
                                        name="input-height-in"
                                        suffix="in"
                                        placeholder="0"
                                        value={selected}
                                        onChange={setSelected}
                                    />
                                    <InputNumber
                                        id="input-number-weight-st"
                                        name="input-weight-st"
                                        label="Weight"
                                        suffix="st"
                                        placeholder="0"
                                        value={selected}
                                        onChange={setSelected}
                                    />
                                    <InputNumber
                                        id="input-number-weight-lbs"
                                        name="input-weight-lbs"
                                        suffix="lbs"
                                        placeholder="0"
                                        value={selected}
                                        onChange={setSelected}
                                    />
                                </>
                            }
                        </div>

                        <BarInformation bmi={23.4}>
                            Your BMI suggests you’re a healthy weight. Your ideal weight is between <b>63.3kgs - 85.2kgs.</b>
                        </BarInformation>
                    </div>
                </form>
            </div>
        </div>
    );
}