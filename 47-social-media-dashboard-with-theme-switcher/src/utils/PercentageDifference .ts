export default function PercentageDifference(newValue: number, oldValue: number) {
    const result = ((newValue - oldValue) / oldValue) * 100;
    return Math.round(result);
} 