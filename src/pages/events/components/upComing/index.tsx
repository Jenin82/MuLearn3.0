import styles from './index.module.css'
type Props = {}

export const UpComing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1>
        Upcoming Coming <span className='colorText'>Events</span>
      </h1>
    </div>
  );
}