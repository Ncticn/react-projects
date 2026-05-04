// Utility Functions
import idealWeightImperial from "./idealWeightImperial";

export default function bmiCalculateImperial(
  heightFt: number,
  heightIn: number,
  weightSt: number,
  weightLbs: number,
) {
  const message: string[] = [];
  const inchHeight = heightFt * 12 + heightIn;
  const lbsWeight = weightSt * 14 + weightLbs;

  const bmi = (703 * lbsWeight) / inchHeight ** 2;

  const idealWeight = idealWeightImperial(inchHeight);

  if (bmi <= 18.5) {
    message.push("Your BMI suggests you’re underweight. ");
  } else if (bmi > 18.5 && bmi < 24.9) {
    message.push("Your BMI suggests you’re a healthy weight. ");
  } else if (bmi > 25 && bmi < 29.9) {
    message.push("Your BMI suggests you’re overweight. ");
  } else if (bmi > 30) {
    message.push("Your BMI suggests you’re obese. ");
  }

  return {
    bmi: bmi,
    message: message[0],
    minWeight: idealWeight.minWeight,
    maxWeight: idealWeight.maxWeight,
  };
}
