import React from 'react';

import styles from './Clause.module.scss';

type ClauseProps = {
  clauseText: string;
  clauseName: string;
};

const Clause = ({ clauseText, clauseName }: ClauseProps) => (
  <div>
    <span className={styles.clause}>{clauseName}</span>
    <span>{`: ${clauseText}`}</span>
  </div>
);
export default Clause;
