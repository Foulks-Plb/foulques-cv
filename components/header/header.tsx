import Picture from "./picture/picture";
import Title from "./title/title";

export default function Header() {
  return (
    <div className="flex w-100">
      <div className="p-4 max-w-96 min-w-64">
        <Picture />
      </div>
      <div className="my-auto">
        <Title />
      </div>
    </div>
  );
}
