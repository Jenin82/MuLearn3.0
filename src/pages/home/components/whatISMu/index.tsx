import styles from "./index.module.css";
import android from "./companyLogo/android.png";
import icfoss from "./companyLogo/icfoss.png";
import kdisc from "./companyLogo/kdisc.png";
import digitalUK from "./companyLogo/digitaluk.png";
import gdsc from "./companyLogo/gdsc.png";
import KSUM from "./companyLogo/KSUM.png";
import pygrammers from "./companyLogo/pygrammers.png";
import kba from "./companyLogo/kba.png";
import foxlab from "./companyLogo/foxlab.png";
import riglabs from "./companyLogo/riglabs.png";
import kitesindia from "./companyLogo/kitesindia.png";
type Props = {};

export const WhatISMu = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div>
        <h1>
          What is <span className="colorText">µlearn</span> ?
        </h1>
        <p>
          A platform that provides peer-to-peer learning experience, building an
          army of talented youth for the future and face the challenges of
          tomorrow with ease.
        </p>
      </div>
      <div>
        <h1>
          Community Paterners at <span className="colorText">µlearn</span>{" "}
        </h1>
        <div className={styles.logowrapper}>
          <img src={android} alt="" />
          <img src={icfoss} alt="" />
          <img src={kdisc} alt="" />
          <img src={digitalUK} alt="" />
          <img src={gdsc} alt="" />
          <img src={KSUM} alt="" />
          <img src={pygrammers} alt="" />
          <img src={kba} alt="" />
          <img src={foxlab} alt="" />
          <img src={riglabs} alt="" />
          <img src={kitesindia} alt="" />
        </div>
      </div>
      <div>
        <div className={styles.mustoryheader}>
          <h1>
            The Story of Aami <span className="colorText">MuStory</span>
          </h1>
          <p>
            Meet Aami, an eager learner hungry for growth! Join her voyage
            through the captivating µVerse, where she seizes opportunities,
            builds learning circles and immerses herself in events, emerging
            industry-ready with newfound skills and confidence.
          </p>
        </div>
        <iframe
          width="300px"
          height="170"
          src="https://www.youtube.com/embed/M9serw-CLU0?start=12&rel=0&showinfo=0"
          title="My Story"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
