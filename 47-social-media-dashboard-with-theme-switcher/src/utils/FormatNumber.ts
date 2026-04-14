export default function FormatNumber(value: number) {
  const stringValue = value.toString();
  if (stringValue.length > 4 && stringValue.length < 7) {
    if (stringValue.length == 6) {
      return stringValue.slice(0, 3) + "K";
    } else if (stringValue.length == 5) {
      return stringValue.slice(0, 2) + "K";
    }
  } else {
    return value;
  }
}
