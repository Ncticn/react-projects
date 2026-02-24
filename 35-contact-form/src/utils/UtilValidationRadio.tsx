function UtilValidationRadio(value: boolean) {
  const errors: string[] = [];

  if (value === false) errors.push("Please select a query type");

  return {
    isValid: errors.length === 0,
    error: errors[0],
  };
}

export default UtilValidationRadio;
