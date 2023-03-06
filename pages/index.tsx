import { css } from 'goober';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.iconsContainer}></div>
    </main>
  );
}

const styles = {
  main: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  iconsContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid red',
  }),
};
