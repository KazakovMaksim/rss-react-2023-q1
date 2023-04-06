import React from 'react';

import styles from './AboutUsPage.module.scss';

const AboutUsPage = () => {
  return (
    <main className={styles.about}>
      <h2 className={styles.about_title}>Our Story</h2>
      <div className={styles.about_content}>
        <img
          src="https://cdn.accentuate.io/46987182164/11342107836500/Trade_Banner_The_Design_Process-v1653678954594.jpg?600x600"
          alt=""
        />
        <p>Enter online furniture stores with enough inventory to furnish your entire home</p>
      </div>
    </main>
  );
};

export default AboutUsPage;
