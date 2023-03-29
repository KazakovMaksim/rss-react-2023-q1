import React from 'react';

import classnames from 'classnames';

import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { children, disabled, className } = this.props;
    return (
      <button
        type="button"
        disabled={disabled}
        className={classnames(className, styles.button, { button_disabled: disabled === true })}
      >
        {children}
      </button>
    );
  }
}

export default Button;
