function UtilValidationText(value: string) {
  const errors: string[] = [];
  const inputValue = value.trim();

  if (inputValue.length === 0) errors.push("This field is required");
  if (inputValue.length < 2) errors.push("It must contain at least 2 letters.");
  if (/[0-9]/.test(inputValue)) errors.push("Can not be number");

  return {
    isValid: errors.length === 0,
    error: errors[0],
  };
}

export default UtilValidationText;
