import React from 'react';
import { FormDataItem } from 'types';
import { formExtra, validation } from 'constants/index';
import { useForm } from 'react-hook-form';

import validateField from 'utils';
import Confirmation from 'components/Confirmation/Confirmation';
import styles from './Form.module.scss';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  handleCards: (data: FormDataItem) => void;
};

export const Form = ({ handleCards }: FormProps) => {
  const [alertsText, adsText] = formExtra;
  const [isSubmit, setIsSubmit] = React.useState(false);

  const {
    register,
    getValues,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<FormDataItem>({ reValidateMode: 'onSubmit' });

  const handleConfirmation = () => {
    setIsSubmit(false);
    reset();
  };

  const onSubmit = (data: FormDataItem) => {
    setIsSubmit(true);
    handleCards({
      user: data.user,
      phone: data.phone,
      email: data.email,
      gender: data.gender,
      tariff: data.tariff,
      birthday: data.birthday,
      extra: typeof data.extra === 'string' ? data.extra : data.extra.join(', '),
      file: (data.files as FileList)[0],
    });
  };

  return (
    <div>
      <h1>React Hook Form</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {isSubmit && (
          <Confirmation onConfirm={() => handleConfirmation()}>All data saved</Confirmation>
        )}

        <label htmlFor="user">
          User:
          <input
            {...register('user', {
              required: 'fill in the field or choose value',
              minLength: {
                value: validation.userMinLength,
                message: `field must have min ${validation.userMinLength} letter length`,
              },
              pattern: {
                value: validation.userPattern,
                message: `name must start with uppercase letter`,
              },
            })}
            placeholder="enter your user name"
          />
        </label>
        <div>
          {errors?.user && <span className={styles.form_error}>{errors?.user.message}</span>}
        </div>

        <label htmlFor="phone">
          Phone:
          <input
            {...register('phone', {
              required: 'fill in the field or choose value',
              minLength: {
                value: validation.phoneMinLength,
                message: `field must have min ${validation.phoneMinLength} digits length`,
              },
              pattern: {
                value: validation.phonePattern,
                message: `phone must have only digits`,
              },
            })}
            placeholder="enter your phone number"
          />
        </label>
        <div>
          {errors?.phone && <span className={styles.form_error}>{errors?.phone.message}</span>}
        </div>

        <label htmlFor="email">
          Email:
          <input
            {...register('email', {
              required: 'fill in the field or choose value',
              pattern: {
                value: validation.emailPattern,
                message: `entered email is not correct, check it`,
              },
            })}
            placeholder="enter your email"
          />
        </label>
        <div>
          {errors?.email && <span className={styles.form_error}>{errors?.email.message}</span>}
        </div>

        <label htmlFor="birthday">
          Birthday:
          <input
            type="date"
            {...register('birthday', {
              required: 'fill in the field or choose value',
              validate: {
                isLessThen: () => validateField('birth', getValues('birthday')),
              },
            })}
          />
        </label>
        <div>
          {errors?.birthday && (
            <span className={styles.form_error}>{errors?.birthday.message}</span>
          )}
        </div>

        <label htmlFor="tariff">
          Tariff:
          <select
            defaultValue=""
            {...register('tariff', {
              required: 'fill in the field or choose value',
            })}
          >
            <option disabled value="">
              choose tariff
            </option>
            <option value="base">base</option>
            <option value="optimum">optimum</option>
            <option value="platinum">platinum</option>
          </select>
        </label>
        <div>
          {errors?.tariff && <span className={styles.form_error}>{errors?.tariff.message}</span>}
        </div>

        <div className={styles.form_gender}>
          Gender:
          <label htmlFor="male">
            <input
              type="radio"
              value="male"
              {...register('gender', {
                required: 'fill in the field or choose value',
              })}
            />
            male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              value="female"
              {...register('gender', {
                required: 'fill in the field or choose value',
              })}
            />
            female
          </label>
        </div>
        <div>
          {errors?.gender && <span className={styles.form_error}>{errors?.gender.message}</span>}
        </div>

        <div className={styles.form_extra}>
          Extra:
          <label htmlFor="alerts">
            <input
              type="checkbox"
              {...register('extra', {
                required: 'fill in the field or choose value',
              })}
              value={alertsText}
            />
            {alertsText}
          </label>
          <label htmlFor="ads">
            <input
              type="checkbox"
              {...register('extra', {
                required: 'fill in the field or choose value',
              })}
              value={adsText}
            />
            {adsText}
          </label>
        </div>
        <div>
          {errors?.extra && <span className={styles.form_error}>{errors?.extra.message}</span>}
        </div>

        <label htmlFor="file">
          File:
          <input
            type="file"
            {...register('files', {
              required: 'fill in the field or choose value',
            })}
          />
        </label>
        <div>
          {errors?.files && <span className={styles.form_error}>{errors?.files.message}</span>}
        </div>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
