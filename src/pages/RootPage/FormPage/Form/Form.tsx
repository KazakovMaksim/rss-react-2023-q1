import React from 'react';
import { FormDataItem } from 'types';
import { formExtra } from 'constants/index';
import validateField from 'utils';

import styles from './Form.module.scss';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  handle: (data: FormDataItem) => void;
};

type FormState = {
  userErr: string;
  phoneErr: string;
  emailErr: string;
  birthErr: string;
  genderErr: string;
  tariffErr: string;
  extraErr: string;
  fileErr: string;
};

class Form extends React.PureComponent<FormProps, FormState> {
  formInput: React.RefObject<HTMLFormElement>;

  formUser: React.RefObject<HTMLInputElement>;

  formPhone: React.RefObject<HTMLInputElement>;

  formEmail: React.RefObject<HTMLInputElement>;

  formGenderMale: React.RefObject<HTMLInputElement>;

  formGenderFemale: React.RefObject<HTMLInputElement>;

  formAlert: React.RefObject<HTMLInputElement>;

  formAds: React.RefObject<HTMLInputElement>;

  formBirthday: React.RefObject<HTMLInputElement>;

  formFile: React.RefObject<HTMLInputElement>;

  formTariff: React.RefObject<HTMLSelectElement>;

  constructor(props: FormProps) {
    super(props);
    this.formInput = React.createRef<HTMLFormElement>();
    this.formUser = React.createRef<HTMLInputElement>();
    this.formPhone = React.createRef<HTMLInputElement>();
    this.formEmail = React.createRef<HTMLInputElement>();
    this.formGenderMale = React.createRef<HTMLInputElement>();
    this.formGenderFemale = React.createRef<HTMLInputElement>();
    this.formAlert = React.createRef<HTMLInputElement>();
    this.formAds = React.createRef<HTMLInputElement>();
    this.formBirthday = React.createRef<HTMLInputElement>();
    this.formFile = React.createRef<HTMLInputElement>();
    this.formTariff = React.createRef<HTMLSelectElement>();

    this.state = {
      userErr: '',
      phoneErr: '',
      emailErr: '',
      birthErr: '',
      genderErr: '',
      tariffErr: '',
      extraErr: '',
      fileErr: '',
    };
  }

  handleSubmit = () => {
    let gender = '';
    if (this.formGenderMale.current?.checked) {
      gender = 'male';
    } else if (this.formGenderFemale.current?.checked) {
      gender = 'female';
    }

    const tariff =
      this.formTariff.current?.value === 'choose' ? '' : this.formTariff.current?.value;

    const birth = this.formBirthday.current?.value ? this.formBirthday.current?.value : '';

    const extra = [this.formAlert.current?.checked, this.formAds.current?.checked].map(
      (el, idx) => {
        if (el) {
          return formExtra[idx];
        }
        return '';
      }
    );

    console.log('formFile', this.formFile.current?.value);

    const userErr = validateField('user', this.formUser.current?.value);
    const phoneErr = validateField('phone', this.formPhone.current?.value);
    const emailErr = validateField('email', this.formEmail.current?.value);
    const genderErr = validateField('gender', gender);
    const tariffErr = validateField('tariff', tariff);
    const birthErr = validateField('birth', birth);
    const extraErr = validateField('extra', extra.filter((el) => el !== '').join(', '));
    const fileErr = validateField('file', this.formFile.current?.value);

    this.setState({
      userErr,
      phoneErr,
      emailErr,
      genderErr,
      tariffErr,
      birthErr,
      extraErr,
      fileErr,
    });

    const { handle } = this.props;

    if (
      !userErr &&
      !phoneErr &&
      !emailErr &&
      !genderErr &&
      !tariffErr &&
      !birthErr &&
      !extraErr &&
      !fileErr
    ) {
      handle({
        user: this.formUser.current?.value as string,
        phone: this.formPhone.current?.value as string,
        email: this.formEmail.current?.value as string,
        gender,
        birthday: this.formBirthday.current?.value as string,
        extra: extra.filter((el) => el !== '').join(', '),
        file: this.formFile.current?.value as string,
      });
      this.formInput.current?.reset();
    }
  };

  render() {
    const [alertsText, adsText] = formExtra;
    const { userErr, phoneErr, emailErr, genderErr, tariffErr, birthErr, extraErr, fileErr } =
      this.state;

    return (
      <form
        className={styles.form}
        ref={this.formInput}
        onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit();
        }}
      >
        <label htmlFor="user">
          Full name
          <input placeholder="enter your full name" ref={this.formUser} />
        </label>
        {userErr && <span className={styles.form_error}>{userErr}</span>}

        <label htmlFor="phone">
          Phone
          <input placeholder="enter your phone number" ref={this.formPhone} />
        </label>
        {phoneErr && <span className={styles.form_error}>{phoneErr}</span>}

        <label htmlFor="email">
          Email
          <input placeholder="enter your email" type="email" ref={this.formEmail} />
        </label>
        {emailErr && <span className={styles.form_error}>{emailErr}</span>}

        <label htmlFor="birthday">
          Birthday
          <input type="date" ref={this.formBirthday} />
        </label>
        {birthErr && <span className={styles.form_error}>{birthErr}</span>}

        <label htmlFor="tariff">
          Tariff
          <select defaultValue="choose" ref={this.formTariff}>
            <option disabled value="choose">
              choose tariff
            </option>
            <option value="base">base</option>
            <option value="optimum">optimum</option>
            <option value="platinum">platinum</option>
          </select>
        </label>
        {tariffErr && <span className={styles.form_error}>{tariffErr}</span>}

        <div className={styles.form_gender}>
          Gender
          <label htmlFor="male">
            <input name="gender" type="radio" value="male" ref={this.formGenderMale} />
            male
          </label>
          <label htmlFor="female">
            <input name="gender" type="radio" value="female" ref={this.formGenderFemale} />
            female
          </label>
        </div>
        {genderErr && <span className={styles.form_error}>{genderErr}</span>}

        <div className={styles.form_extra}>
          Extra
          <label htmlFor="alerts">
            <input type="checkbox" ref={this.formAlert} />
            {alertsText}
          </label>
          <label htmlFor="ads">
            <input type="checkbox" ref={this.formAds} />
            {adsText}
          </label>
        </div>
        {extraErr && <span className={styles.form_error}>{extraErr}</span>}

        <label htmlFor="file">
          File
          <input type="file" ref={this.formFile} />
        </label>
        {fileErr && <span className={styles.form_error}>{fileErr}</span>}

        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default Form;
