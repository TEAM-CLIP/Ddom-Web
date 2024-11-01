"use client";

import { useRouter } from "next/navigation";
import BACK_ICON from "@/assets/back_icon.svg";

export default function TopNavBack() {
  const router = useRouter();

  return (
    <nav className="flex items-center h-[48px]">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-700 px-[14px]"
      >
        <BACK_ICON alt="뒤로가기" width={24} height={24} />
      </button>
    </nav>
  );
}
