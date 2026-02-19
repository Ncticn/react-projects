function UtilsValidationEmail(email: string) {
  const errors: string[] = [];
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (email.length === 0) errors.push("Email cannot be empty.");
  if (!emailRegex.test(email.trim()))
    errors.push("Error, please check your email");

  return {
    isValid: errors.length === 0,
    error: errors[0],
  };
}

export default UtilsValidationEmail;
