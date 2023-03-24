import React from 'react';

import styles from './Clause.module.scss';

type ClauseProps = {
  clauseText: string;
  clauseName: string;
};

class Clause extends React.PureComponent<ClauseProps> {
  render() {
    const { clauseText, clauseName } = this.props;

    return (
      <div>
        <span className={styles.clause}>{clauseName}</span>
        <span>{`: ${clauseText}`}</span>
      </div>
    );
  }
}

export default Clause;
