import React from 'react';

import styles from './Wrapper.module.scss';

type WrapperProps = {
  children: React.ReactNode;
};

class Wrapper extends React.PureComponent {
  children: React.ReactNode;

  constructor(props: WrapperProps) {
    super(props);
    this.children = props.children;
  }

  render() {
    return <div className={styles.wrapper}>{this.children}</div>;
  }
}
export default Wrapper;
