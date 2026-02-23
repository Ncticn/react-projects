function UtilValidationEmail(value: string) {
  const errors: string[] = [];
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (value.length === 0) errors.push("This field is required");
  if (!emailRegex.test(value.trim()))
    errors.push("Please enter a valid email address");

  return {
    isValid: errors.length === 0,
    error: errors[0],
  };
}

export default UtilValidationEmail;
