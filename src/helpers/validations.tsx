export const validateUsername = (username: string) => {
    if (username.length < 4) {
        return 'Username must be at least 4 characters long.';
    }
    return null; 
};

export const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
        return 'Please enter a valid email address.';
    }
    return null; 
};

export const validatePassword = (password: string) => {
    if (password.length < 10) {
      return 'Password must be at least 10 characters long.';
    }
  
    let lowercaseCount = 0;
    let uppercaseCount = 0;
    let digitCount = 0;
    let specialCharCount = 0;
  
    for (const char of password) {
      if (/[a-z]/.test(char)) {
        lowercaseCount++;
      } else if (/[A-Z]/.test(char)) {
        uppercaseCount++;
      } else if (/\d/.test(char)) {
        digitCount++;
      } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(char)) {
        specialCharCount++;
      }
    }
  
    if (
      lowercaseCount < 1 ||
      uppercaseCount < 1 ||
      digitCount < 1 ||
      specialCharCount < 1
    ) {
      return 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character.';
    }
  
    return null
}
  

export const validateConfirmPassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
        return 'Passwords do not match.';
    }
    return null; 
};
