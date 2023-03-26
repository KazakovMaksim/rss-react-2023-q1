import { validation } from 'constants/index';

const validateField = (fieldName: string, fieldValue?: string | File) => {
  let errName = '';
  if (
    fieldName === 'user' &&
    typeof fieldValue === 'string' &&
    fieldValue.trim().length < validation.userMinLength
  ) {
    errName = `field must have min ${validation.userMinLength} letter length`;
  }

  if (
    fieldName === 'user' &&
    typeof fieldValue === 'string' &&
    fieldValue.trim().length >= validation.userMinLength &&
    !validation.userPattern.test(fieldValue)
  ) {
    errName = `name must start with uppercase letter`;
  }

  if (fieldName === 'file' && (fieldValue as File).type !== validation.fileType) {
    errName = 'please, use only image files';
  }

  if (fieldValue === '') {
    errName = 'fill in the field or choose value';
  }

  return errName;
};

export default validateField;
