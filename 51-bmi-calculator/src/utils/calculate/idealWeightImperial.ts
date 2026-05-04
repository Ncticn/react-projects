export default function idealWeightImperial(height: number) {
  const inch = height;

  const minWeight = (18.5 * inch ** 2) / 703;
  const maxWeight = (24.9 * inch ** 2) / 703;

  const showMinWeight =
    Math.floor(minWeight / 14) + "st " + (Math.floor(minWeight) % 14) + "lbs";
  const showMaxWeight =
    Math.floor(maxWeight / 14) + "st " + (Math.floor(maxWeight) % 14) + "lbs";

  return {
    minWeight: showMinWeight.toString(),
    maxWeight: showMaxWeight.toString(),
  };
}
