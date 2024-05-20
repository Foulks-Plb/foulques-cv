import style from "./divider.module.scss";

export default function Divider() {
  return (
    <div className="w-100 flex my-2">
      <div className={style.dividerBlue}></div>
      <div className={style.dividerGrey}></div>
    </div>
  );
}
