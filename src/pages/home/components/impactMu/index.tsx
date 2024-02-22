import styles from './index.module.css'
type Props = {}

export const ImpactMu = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.header}>
        <h1>
          The <span className="colorText">Impact</span> of{" "}
          <span className="colorText">µLearn</span>
        </h1>
        <p>
          Over the last year, we as a community have made an impact on a
          significant number of students, mentors, and facilitators enabling
          them to gain more knowledge about the ecosystem of learning and was
          able to upskill themselves.
        </p>
      </div>
      <div className={styles.CountSet}>
        <div>
          <h2>28,833+</h2>
          <p>Members</p>
        </div>
        <div>
          <h2>1651+</h2>
          <p>Learning Circles</p>
        </div>
        <div>
          <h2>1928+</h2>
          <p>Colleges</p>
        </div>{" "}
        <div>
          <h2>39+</h2>
          <p>Companies</p>
        </div>
      </div>
    </div>
  );
}