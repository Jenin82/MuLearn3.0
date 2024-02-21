import styles from "./index.module.css";
import Logo from "../../assets/Logo.png";
import image from "./image.png";
import planet from "./planet.png";
import { ArrowRightsvg } from "../../assets/svg";
import { useNavigate } from "react-router-dom";

type Props = {};

export const GetStart = (_props: Props) => {

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/home')
    }
  return (
    <div className={styles.Wrapper}>
      <img className={styles.Rock} src={image} alt="" />
      <div>
        <img src={Logo} alt="" />
        <button onClick={handleClick}>
          Get Started&nbsp;
          <ArrowRightsvg />
        </button>
      </div>
      <img className={styles.planet} src={planet} alt="" />
    </div>
  );
};
