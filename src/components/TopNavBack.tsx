"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TopNavBack() {
  const router = useRouter();

  return (
    <nav className="flex items-center h-[48px]">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-700 px-[14px]"
      >
        <Image
          src="/icons/nav_back.svg"
          alt="뒤로가기"
          width={24}
          height={24}
        />
      </button>
    </nav>
  );
}
