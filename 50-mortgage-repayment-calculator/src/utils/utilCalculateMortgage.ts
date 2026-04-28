export default function utilCalculateMortgage(type: "repayment" | "interestOnly", mortgageAmount: number, mortgageTerm: number, interestRate: number) {
    const totalMonths = mortgageTerm * 12;
    const monthlyInterest = (interestRate / 12) / 100;

    if (type === "repayment") {
        const result = mortgageAmount * ((monthlyInterest * ((1 + monthlyInterest) ** totalMonths)) / (((1 + monthlyInterest) ** totalMonths) - 1));
        return result;
    } else {
        const result = mortgageAmount * monthlyInterest;
        return result;
    }
}
//     const result = Number(inputMortgageAmount.value.replaceAll(",", "")) * ((Number(inputInterestRate.value) / 12) / 100);
