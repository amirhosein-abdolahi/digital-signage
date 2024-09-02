import SpeedControl from "./speedControl";
import AddButton from "./addButton";

export default function Frame({ title, modal, children }) {
  return (
    <div className="basis-1/3 h-full text-center flex flex-col gap-4">
      <h1 className="font-sh text-4xl text-natural-900">{title}</h1>
      <div className="p-4 grid gap-5 rounded-2xl border-4 border-secondary-2">
        {children}
        <AddButton modal={modal} />
      </div>
      {title !== "ویدیوها" && <SpeedControl type={title} />}
    </div>
  );
}
