export const validateEmail = (email: string) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
};

export const capitalizeFirstLetter = (text: string) => {
  if (typeof text !== null) {
    return text.charAt(0)?.toUpperCase() + text?.slice(1);
  }
};
