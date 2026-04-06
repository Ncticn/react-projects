export default function FormatYaerlyPrice(price: number) {
  return price - (price * 25) / 100;
}
