export function idealWeightMetric(height: number) {
    const minWeight = (18.5 * (height ** 2)).toFixed(1);
    const maxWeight = (24.9 * (height ** 2)).toFixed(1);

    return {
        minWeight: minWeight.toString(),
        maxWeight: maxWeight.toString(),
    }
}