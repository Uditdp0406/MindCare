export const validateLogin = (formData) => {
  const errors = {};
  
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }
  
  if (!formData.password) {
    errors.password = 'Password is required';
  }
  
  return errors;
};

export const validateRegister = (formData) => {
  const errors = {};
  
  if (!formData.firstName?.trim()) {
    errors.firstName = 'First name is required';
  }
  
  if (!formData.lastName?.trim()) {
    errors.lastName = 'Last name is required';
  }
  
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }
  
  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  
  if (!formData.gender) {
    errors.gender = 'Gender is required';
  }
  
  if (!formData.phoneNumber) {
    errors.phoneNumber = 'Phone number is required';
  }
  
  if (!formData.dob) {
    errors.dob = 'Date of birth is required';
  }
  
  return errors;
};