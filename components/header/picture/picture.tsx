import style from "./picture.module.scss";
import Image from "next/image";

export default function Picture() {
    return (
      <div className={style.circle}>
        <Image
          width={180}
          height={180}
          src="/static/images/foulques_pellabeuf.jpg"
          alt="Foulques Pellabeuf Image"
        />
      </div>
    );
  }
  