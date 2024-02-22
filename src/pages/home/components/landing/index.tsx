import styles from "./index.module.css";
import image from './image.png'
type Props = {};

export const Landing = (_props: Props) => {
   const handleClick = () => {
     window.open("https://discord.mulearn.org", "_blank");
   };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.header}>
        <h1>
          Let's&nbsp;<span className="colorText">break the Echo Chambers</span>{" "}
        </h1>
        <h1>Together.</h1>
      </div>
      <button onClick={handleClick}>Join</button>

      <img src={image} alt="" />
    </div>
  );
};
