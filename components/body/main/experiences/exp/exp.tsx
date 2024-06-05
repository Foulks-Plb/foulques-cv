import style from "./exp.module.scss";

export default function Exp(props: any) {
  return (
    <div className="mb-6">
      <div className="flex">
        <div className={style.company}>{props.company}</div>
        <div className={style.date}>{props.date}</div>
      </div>
      <div className="flex ml-6">
        <div className={style.dividerLeft}></div>
        <div className="ml-6">
          <h4 className="mb-1 mt-2">{props.title}</h4>
          <p className={style.text} dangerouslySetInnerHTML={{ __html: props.text }}></p>
        </div>
      </div>
    </div>
  );
}
