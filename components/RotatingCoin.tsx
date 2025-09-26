import Image from 'next/image';
import styles from './RotatingCoin.module.css';

const RotatingCoin = () => {
  return (
    <div className={styles.coinContainer}>
      <div className={styles.coin}>
        <Image
          src="/images/PublyFi_Platform_Token.png"
          alt="PublyFi Token"
          width={250}
          height={250}
          className={styles.coinImage}
        />
      </div>
    </div>
  );
};

export default RotatingCoin;