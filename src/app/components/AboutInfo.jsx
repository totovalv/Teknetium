import React from "react";
import style from "../styles/AboutInfo.module.css";
import Image from "next/image";
import img1 from "../assets/images/racks.jpg";
import linkedin from "../assets/linkedin.png";
export default function AboutInfo() {
  return (
    <>
      <div className={style.container}>
        <div className={style.containerElements}>
          <div className={style.elementInfo}>
            <Image
              src={img1}
              width={120}
              height={120}
              className={style.profilePicture}
            ></Image>
            <div className={style.profileHeader}>
              <p className={style.profileName}>Cesar Cantero</p>
              <Image
                src={linkedin}
                width={40}
                height={40}
                className={style.profilePicture}
              ></Image>
            </div>
            <p className={style.profileSubtitle}>Systems Engineer</p>

            <p>
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32
            </p>
          </div>
          <div className={style.elementInfo}>
            <Image
              src={img1}
              width={120}
              height={120}
              className={style.profilePicture}
            ></Image>
            <div className={style.profileHeader}>
              <p className={style.profileName}>Nahuel Cantero</p>
              <Image
                src={linkedin}
                width={40}
                height={40}
                className={style.profilePicture}
              ></Image>
            </div>
            <p className={style.profileSubtitle}>Systems Engineer</p>

            <p>
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
