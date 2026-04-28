export default function utilNumberToFormatCurrency(
  value: number,
  currency: string,
) {
  const baseValue = value;
  const currencyValue = Intl.NumberFormat(currency).format(baseValue);
  return currencyValue;
}
