import React from 'react';
import { FormDataItem } from 'types';
import { formExtra } from '../../../../constants';

import styles from './Form.module.scss';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  handle: (data: FormDataItem) => void;
};

class Form extends React.PureComponent<FormProps> {
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
  }

  handleSubmit = () => {
    const { handle } = this.props;
    console.log('TARIFF', this.formTariff.current?.value);
    const gender = this.formGenderMale.current?.checked ? 'male' : 'female';
    const extraInfo = [this.formAlert.current?.checked, this.formAds.current?.checked].map(
      (el, idx) => {
        if (el) {
          return formExtra[idx];
        }
        return '';
      }
    );

    handle({
      user: this.formUser.current?.value as string,
      phone: this.formPhone.current?.value as string,
      email: this.formEmail.current?.value as string,
      gender,
      birthday: this.formBirthday.current?.value as string,
      extra: extraInfo.filter((el) => el !== '').join(', '),
    });
    this.formInput.current?.reset();
  };

  render() {
    const [alertsText, adsText] = formExtra;

    return (
      <form className={styles.form} ref={this.formInput} onSubmit={() => this.handleSubmit()}>
        <label htmlFor="user">
          Full name
          <input placeholder="enter your full name" ref={this.formUser} />
        </label>
        <span className={styles.form_error}>Error</span>
        <label htmlFor="phone">
          Phone
          <input placeholder="enter your phone number" ref={this.formPhone} />
        </label>
        <span className={styles.form_error}>Error</span>
        <label htmlFor="email">
          Email
          <input placeholder="enter your email" type="email" ref={this.formEmail} />
        </label>
        <span className={styles.form_error}>Error</span>
        <label htmlFor="birthday">
          Birthday
          <input type="date" ref={this.formBirthday} />
        </label>
        <span className={styles.form_error}>Error</span>

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
        <span className={styles.form_error}>Error</span>

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
        <span className={styles.form_error}>Error</span>

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
        <span className={styles.form_error}>Error</span>

        <label htmlFor="file">
          File
          <input type="file" ref={this.formFile} />
        </label>
        <span className={styles.form_error}>Error</span>

        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default Form;
