function ValidationEmail(value: string) {
  const errors: string[] = [];
  const emailRefex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (value.length === 0) errors.push("Oops! Please add your email");
  if (!emailRefex.test(value.trim()))
    errors.push("Oops! That doesn’t look like an email address");

  return {
    isValid: errors.length === 0,
    error: errors[0],
  };
}

export default ValidationEmail;
