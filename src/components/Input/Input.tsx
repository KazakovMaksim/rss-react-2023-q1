import React from 'react';

import classnames from 'classnames';

import styles from './Input.module.scss';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  value: string;
  onChange: (value: string) => void;
};

class Input extends React.PureComponent<InputProps> {
  render() {
    const { className, disabled, value, onChange } = this.props;

    return (
      <input
        type="text"
        className={classnames(className, styles.input, {
          input_disabled: disabled === true,
        })}
        disabled={disabled === true && true}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
}

export default Input;
