import { validation } from 'constants/index';

const checkBirthday = (date: string) => {
  let isValid = true;
  const now = new Date();
  const birth = new Date(date);
  const age = now.getFullYear() - birth.getFullYear();
  if (birth > now || age < 10) {
    isValid = false;
  }
  return isValid;
};

const validateField = (fieldName: string, fieldValue?: string | File) => {
  let errName = '';

  if (typeof fieldValue === 'string') {
    if (fieldName === 'user' && fieldValue.trim().length < validation.userMinLength) {
      errName = `field must have min ${validation.userMinLength} letter length`;
    }

    if (
      fieldName === 'user' &&
      fieldValue.trim().length >= validation.userMinLength &&
      !validation.userPattern.test(fieldValue)
    ) {
      errName = `name must start with uppercase letter`;
    }

    if (fieldName === 'phone' && fieldValue.trim().length < validation.phoneMinLength) {
      errName = `field must have min ${validation.phoneMinLength} digits length`;
    }

    if (
      fieldName === 'phone' &&
      fieldValue.trim().length >= validation.phoneMinLength &&
      !validation.phonePattern.test(fieldValue)
    ) {
      errName = `phone must have only digits`;
    }

    if (fieldName === 'email' && !validation.emailPattern.test(fieldValue.trim())) {
      errName = `entered email is not correct, check it`;
    }

    if (fieldName === 'birth' && !checkBirthday(fieldValue)) {
      errName = `you must be over 10 years old and birthday can't be later than now`;
    }
  }

  if (fieldValue === '') {
    errName = 'fill in the field or choose value';
  }

  return fieldName === 'birth' && !errName ? true : errName;
};

export default validateField;
