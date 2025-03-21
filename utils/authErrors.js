export const getAuthErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-credential":
      return "Email and password do not match.";
    case "auth/email-already-in-use":
      return "This e-mail is already in use.";
    case "auth/invalid-email":
      return "Invalid e-mail address";
    case "auth/weak-password":
      return "Password must be at least 6 characters long.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try later.";
    default:
      return "Error logging in. Please try again.";
  }
};

export const isPasswordValid = (password) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
};
