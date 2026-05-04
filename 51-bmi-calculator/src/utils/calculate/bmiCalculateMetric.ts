
// Utility Functions
import { idealWeightMetric } from "./idealWeightMetric";

export default function bmiCalculateMetric(height: number, weight: number) {
    const bmi = weight / (height ** 2);
    const message: string[] = [];
    const idealWeight = idealWeightMetric(height);

    if (bmi <= 18.5) {
        message.push("Your BMI suggests you’re underweight. ");
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        message.push("Your BMI suggests you’re a healthy weight. ");
    }
    else if (bmi > 25 && bmi < 29.9) {
        message.push("Your BMI suggests you’re overweight. ");
    } else if (bmi > 30) {
        message.push("Your BMI suggests you’re obese. ");
    }

    return {
        bmi: bmi,
        message: message[0],
        minWeight: idealWeight.minWeight,
        maxWeight: idealWeight.maxWeight
    }

}