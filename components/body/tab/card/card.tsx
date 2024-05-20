import style from "./card.module.scss";
import Divider from "../../divider/divider";
import Link from "next/link";

export default function Card(props: any) {
  return (
    <div className={style.card}>
      <h4>{props.title}</h4>
      <Divider />
      {typeof props.text === "string" && <p>{props.text}</p>}
      {typeof props.text === "object" && (
        <ul>
          {props.text.map((item: any, i: number) => (
            <li key={i}>
              {item.link ? (
                <Link className="link" href={item.link} target="_blank">
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
