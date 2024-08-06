// app/components/TotalItemsCount.tsx

import styles from './TotalItemsCount.module.css'; // Create a CSS module for styling

interface TotalItemsCountProps {
  count: number;
}

const TotalItemsCount = ({ count }: TotalItemsCountProps) => {
  return (
    <div className={styles.totalItemsContainer}>
      <span className={styles.totalItemsCount}>{count} Items</span>
    </div>
  );
};

export default TotalItemsCount;
