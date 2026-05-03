
// Utility Functions
import { idealWeightCalculate } from "./idealWeightCalculate";

export function bmiCalculate(height: number, weight: number) {
    const bmi = weight / (height ** 2);
    const message: string[] = [];
    const idealWeight = idealWeightCalculate(height);

    if (bmi <= 18.5) {
        message.push("Your BMI suggests you’re underweight. " + idealWeight.message);
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        message.push("Your BMI suggests you’re a healthy weight. " + idealWeight.message);
    }
    else if (bmi > 25 && bmi < 29.9) {
        message.push("Your BMI suggests you’re overweight. " + idealWeight.message);
    } else if (bmi > 30) {
        message.push("Your BMI suggests you’re obese. " + idealWeight.message);
    }

    return {
        bmi: bmi.toFixed(1),
        message: message[0]
    }

}