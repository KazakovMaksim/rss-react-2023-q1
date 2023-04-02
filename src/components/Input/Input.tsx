import React from 'react';

import cn from 'classnames';

import styles from './Input.module.scss';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  value: string;
  dataAtr?: string;
  onChange: (value: string) => void;
};

const Input = (props: InputProps) => {
  const { className, disabled, value, onChange, dataAtr } = props;

  return (
    <input
      data-testid={dataAtr}
      type="text"
      className={cn(className, styles.input, {
        input_disabled: disabled === true,
      })}
      disabled={disabled === true && true}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
