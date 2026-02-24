function UtilValidationCheckbox(value: boolean) {
  const errors: string[] = [];

  if (value === false)
    errors.push("To submit this form, please consent to being contacted");

  return {
    isValid: errors.length === 0,
    error: errors[0],
  };
}

export default UtilValidationCheckbox;
