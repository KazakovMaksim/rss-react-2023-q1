const validateField = (fieldName: string, fieldValue?: string) => {
  let errName = '';
  if (fieldName !== 'gender' && fieldName !== 'tariff') {
    if (fieldValue && fieldValue.trim().length <= 4) {
      errName = 'field must have 5 char length';
    }
  }
  if (fieldValue === '') {
    errName = 'fill in the field or choose value';
  }

  return errName;
};

export default validateField;
