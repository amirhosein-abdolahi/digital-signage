import Image from "next/image";

import testImage from "@/assets/images/test.jpg";

export default function New() {
  return (
    <div className="rounded-xl bg-natural-100 overflow-hidden">
      <div className="relative h-28 rounded-lg">
        <Image src={testImage} alt="test image" fill objectFit="cover" />
      </div>
      <h1 className="py-2 px-3 font-sh text-sm text-end">
        جلسه مشترک اعضا شورا فنی دانشگاه تخصصی فناوری های نوین آمل با شرکت های
        مهندسین مشاور پروژه های عمرانی دانشگاه
      </h1>
    </div>
  );
}
