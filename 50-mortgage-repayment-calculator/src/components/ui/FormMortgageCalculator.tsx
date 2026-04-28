"use client";

// React
import { useState } from "react";

// Components
import ButtonClear from "./ButtonClear";
import ButtonSubmit from "./ButtonSubmit";
import InputRadio from "./InputRadio";
import InputText from "./InputText";

// Utils
import utilInputNumber from "@/utils/utilInputNumber";
import utilNumberToFormatCurrency from "@/utils/utilNumberToFormatCurrency";
import utilCalculateMortgage from "@/utils/utilCalculateMortgage";

// Types
type InputFields = {
  value: string;
  message?: string;
};

interface FormMortgageCalculatorProps {
  calculatedResult: (repayments?: number, totalRepayments?: number) => void;
}

export default function FormMortgageCalculator({
  calculatedResult,
}: FormMortgageCalculatorProps) {
  const [selected, setSelected] = useState("");

  const [inputMortgageAmount, setInputMortgageAmount] = useState<InputFields>({
    value: "",
    message: "",
  });
  const [inputMortgageTerm, setInputMortgageTerm] = useState<InputFields>({
    value: "",
    message: "",
  });
  const [inputInterestRate, setInputInterestRate] = useState<InputFields>({
    value: "",
    message: "",
  });

  const handleInputMortgageAmount = (value: string) => {
    const clearValue = utilInputNumber(value);

    if (clearValue === "") {
      setInputMortgageAmount({
        value: clearValue,
        message: "This field is required",
      });
    } else {
      const formatValue = utilNumberToFormatCurrency(
        Number(clearValue),
        "en-US",
      );
      setInputMortgageAmount({ value: formatValue });
    }
  };

  const handleInputMortgageTerm = (value: string) => {
    const clearValue = utilInputNumber(value);

    if (clearValue === "")
      setInputMortgageTerm({ value: "", message: "This field is required" });
    else setInputMortgageTerm({ value: clearValue });
  };

  const handleInputInterestRate = (value: string) => {
    const clearValue = utilInputNumber(value);

    if (clearValue === "" || clearValue == "00") {
      setInputInterestRate({ value: "", message: "This field is required" });
    } else {
      const formatValue = (Number(clearValue) / 100).toFixed(2);
      setInputInterestRate({ value: formatValue, message: "" });
    }
  };

  const handleClickReset = () => {
    setInputMortgageAmount({ value: "", message: "" });
    setInputMortgageTerm({ value: "", message: "" });
    setInputInterestRate({ value: "", message: "" });
    setSelected("");
    calculatedResult();
  };

  const handleFormSubmit = () => {
    if (
      inputMortgageAmount.value === "" ||
      inputMortgageTerm.value === "" ||
      inputInterestRate.value === "" ||
      selected === ""
    ) {
      if (inputMortgageAmount.value === "")
        setInputMortgageAmount({
          value: "",
          message: "This field is required",
        });
      if (inputMortgageTerm.value === "")
        setInputMortgageTerm({ value: "", message: "This field is required" });
      if (inputInterestRate.value === "")
        setInputInterestRate({ value: "", message: "This field is required" });
      if (selected === "") setSelected(() => "error");
    } else {
      const numberMortgageAmount = Number(
        inputMortgageAmount.value.replaceAll(",", ""),
      );
      const numberMortgageTerm = Number(inputMortgageTerm.value);
      const numberMortgageRate = Number(inputInterestRate.value);

      if (selected === "repayment") {
        const result = utilCalculateMortgage(
          "repayment",
          numberMortgageAmount,
          numberMortgageTerm,
          numberMortgageRate,
        );
        calculatedResult(result, result * (numberMortgageTerm * 12));
      } else if (selected === "interestOnly") {
        const result = utilCalculateMortgage(
          "interestOnly",
          numberMortgageAmount,
          numberMortgageTerm,
          numberMortgageRate,
        );
        calculatedResult(result);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit();
      }}
      className="flex flex-col items-stretch justify-start gap-6 px-6 py-6 md:gap-10 md:px-10 md:py-10"
    >
      <div className="form-header flex flex-col items-start justify-start gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
        <h1 className="text-preset-2 text-slate-900">Mortgage Calculator</h1>
        <ButtonClear label="Clear" onClick={handleClickReset} />
      </div>

      <div className="form-fields flex flex-col items-stretch justify-start gap-6">
        <InputText
          id="input-text-mortgage-amount"
          name="input-mortgage-amount"
          label="Mortgage Amount"
          addonPosition="prefix"
          addon="£"
          value={inputMortgageAmount.value}
          error={inputMortgageAmount.message}
          onChange={handleInputMortgageAmount}
        />

        <div className="flex flex-col items-stretch justify-start gap-6 md:flex-row">
          <InputText
            id="input-text-mortgage-term"
            name="input-mortgage-term"
            label="Mortgage Term"
            addonPosition="suffix"
            addon="years"
            value={inputMortgageTerm.value}
            error={inputMortgageTerm.message}
            onChange={handleInputMortgageTerm}
          />
          <InputText
            id="input-text-interest-rate"
            name="input-interest-rate"
            label="Interest Rate"
            addon="%"
            addonPosition="suffix"
            value={inputInterestRate.value}
            error={inputInterestRate.message}
            onChange={handleInputInterestRate}
          />
        </div>

        <div className="flex flex-col items-stretch justify-start gap-3">
          <label
            htmlFor="input-radio-repayment"
            className="text-preset-4 text-slate-700"
          >
            Mortgage Type
          </label>

          <InputRadio
            text="Repayment"
            inputId="input-radio-repayment"
            inputName="input-mortgage-type"
            value="repayment"
            selected={selected}
            setSelected={setSelected}
          />
          <InputRadio
            text="Interest Only"
            inputId="input-radio-interest-only"
            inputName="input-mortgage-type"
            value="interestOnly"
            selected={selected}
            setSelected={setSelected}
          />
          {selected === "error" && (
            <span className="text-preset-5 text-red">
              This field is required
            </span>
          )}
        </div>
      </div>

      <div className="form-footer">
        <ButtonSubmit />
      </div>
    </form>
  );
}
