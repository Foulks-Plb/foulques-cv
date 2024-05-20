import style from "./card.module.scss";
import Divider from "../../divider/divider";

export default function Card(props: any) {
    return (
      <div className={style.card}>
        <h4>{props.title}</h4>
        <Divider />
        <p>{props.text}</p>
      </div>
    );
  }
  