export function idealWeightCalculate(height: number) {
    const minWeight = (18.5 * (height ** 2)).toFixed(1);
    const maxWeight = (24.9 * (height ** 2)).toFixed(1);
    const message = `Your ideal weight is between ${minWeight}kgs - ${maxWeight}kgs.`;

    return {
        minWeight: minWeight,
        maxWeight: maxWeight,
        message: message
    }
}