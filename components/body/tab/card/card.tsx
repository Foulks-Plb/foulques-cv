import style from "./card.module.scss";
import Divider from "../../divider/divider";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { ReactElement } from "react";

export default function Card(props: any) {

  function getIcon(name: string): ReactElement {
    switch (name) {
      case "email":
        return <IoMdMail />;
      case "linkedin":
        return <FaLinkedin />;
      case "github":
        return <FaGithub />;
      case "medium":
        return <BsMedium />;
      case "twitter":
        return <FaXTwitter />;
      case "location":
        return <MdPlace />;
      default:
        return <></>;
    }
  }
  
  return (
    <div className={style.card}>
      <h4>{props.title}</h4>
      <Divider />
      {typeof props.text === "string" && <p dangerouslySetInnerHTML={{__html: props.text}}></p>}
      {typeof props.text === "object" && (
        <ul>
          {props.text.map((item: any, i: number) => (
            <li key={i}>
              {item.link ? (
                <Link className="link" href={item.link} target="_blank">
                  {getIcon(item.icon)}
                  <div className="ml-2">{item.name}</div>
                </Link>
              ) : (
                <div className="flex items-center">
                  {getIcon(item.icon)}
                  <div className="ml-2">{item.name}</div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
