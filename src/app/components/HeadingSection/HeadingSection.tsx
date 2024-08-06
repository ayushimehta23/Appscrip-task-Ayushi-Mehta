// app/components/HeadingSection.tsx

import React from 'react';
import styles from './HeadingSection.module.css';

const HeadingSection: React.FC = () => {
  return (
    <section className={styles.headingSection}>
  <div className={styles.container}>
    <h1 className={styles.mainHeading}>DISCOVER OUR PRODUCTS</h1>
    <p className={styles.subHeading}>
      Lorem ipsum dolor sit amet consectetur. <br />
      Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor..
    </p>
  </div>
</section>

  );
};

export default HeadingSection;
