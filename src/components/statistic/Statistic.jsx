import { Illustration } from '@/components';
import styles from './statistic.module.css';

export const Statistic = (props) => {
  const {
    statisticData = []
  } = props;

  if (statisticData.length === 0) {
    return (
      <div className={styles.statisticEmpty}>
        <Illustration name="note" />
        <p>
          Здесь мы&nbsp;поможем тебе управлять твоими задачами, отслеживать статистику и&nbsp;самочувствие.
        </p>
      </div>
    );
  }

  return null;
};