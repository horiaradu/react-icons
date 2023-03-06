import { Icon } from '@/components/icon';
import { css } from 'goober';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.iconsContainer}>
        <span>icons: </span>
        <Icon icon="vacation" />
        <Icon icon="sick" />
      </div>

      <div className={styles.redIconsContainer}>
        <span>icons: </span>
        <Icon icon="vacation" />
        <Icon icon="sick" />
      </div>

      <div className={styles.iconsContainer}>
        <span>icons: </span>
        <Icon icon="vacation" size={200} />
        <Icon icon="sick" size={200} />
      </div>
    </main>
  );
}

const styles = {
  main: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  iconsContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid red',
  }),
  redIconsContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid red',

    color: 'red',
  }),
};
