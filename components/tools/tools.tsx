"use client";

import { useDictionary } from "@/context-provider/dictionary";
import styles from "./tools.module.scss";

export default function Tools() {

  const { tools } = useDictionary();

  const download = async () => {
    const response = await fetch("/foulques_pellabeuf_cv.pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "foulques_pellabeuf_cv.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const switchToTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", switchToTheme);
  };

  return (
    <>
      <div className="absolute right-0 m-2 inline-flex items-center">
        <label className="inline-flex items-center cursor-pointer mr-4">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={toggleTheme}
          />
          <div className="relative w-11 h-6 bg-white-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <div className={styles.download}>
          <button
            onClick={() => download()}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>{tools.btn}</span>
          </button>
        </div>
      </div>
    </>
  );
}
