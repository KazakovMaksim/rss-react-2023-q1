import React from 'react';
import classNames from 'classnames';
import styles from './Loading.module.scss';

type LoadingProps = {
  className?: string;
};

const Loading = ({ className }: LoadingProps) => {
  return <div className={classNames(styles.loading, className)}>Loading...</div>;
};

Loading.defaultProps = {
  className: '',
};

export default Loading;
