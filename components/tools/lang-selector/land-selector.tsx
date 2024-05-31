import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function LangSelector() {
  const params = useParams();
  const [lang, setLang] = useState(params.lang);
  const router = useRouter();

  return (
    <select
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded p-2 mr-4"
      value={lang}
      onChange={(e) => {
        setLang(e.target.value);
        router.push(`/${e.target.value}`);
      }}
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}
