import ControlButtons from "./controlButtons";

export default function Subtitle() {
  return (
    <div className="group bg-natural-100 rounded-lg overflow-hidden">
      <p className="mx-3 my-2 text-right">
        جلسه مشترک اعضا شورا فنی دانشگاه تخصصی فناوری های نوین آمل با شرکت های
        مهندسین مشاور پروژه های عمرانی دانشگاه
      </p>
      <ControlButtons />
    </div>
  );
}
