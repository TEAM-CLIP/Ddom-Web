"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DELETE_ICON from "@/assets/delete_icon.svg";
import QR_ICON from "@/assets/qr_icon.svg";

function BottomNav() {
  const pathname = usePathname();

  const getButtonColor = (path: string) =>
    pathname === path ? "text-gray-10" : "text-gray-3";

  return (
    <nav
      className="fixed bottom-0 left-0 w-full flex justify-between items-center bg-white border-t-[1.5px] border-gray-1 h-[66px]"
      aria-label="Bottom navigation"
    >
      <Link href="/" passHref className="w-1/2">
        <button
          className={`flex flex-col w-full items-center justify-center gap-[4px] ${getButtonColor(
            "/"
          )}`}
          aria-label="Home"
        >
          <DELETE_ICON alt="Home Icon" width={24} height={24} />
          <span className={`caption-1 ${getButtonColor("/")}`}>홈</span>
        </button>
      </Link>

      {/* 중앙 QR 버튼 */}
      <div className="fixed bottom-[30px] left-1/2 transform -translate-x-1/2 z-10">
        <Link href="/qr" passHref>
          <button
            className="w-[72px] h-[72px] bg-gray-10 rounded-full flex items-center justify-center shadow-md text-primary-6"
            aria-label="QR"
          >
            <QR_ICON alt="QR Icon" width={33} height={33} />
          </button>
        </Link>
      </div>

      <Link href="/search" passHref className="w-1/2">
        <button
          className={`flex flex-col w-full items-center justify-center gap-[4px] ${getButtonColor(
            "/search"
          )}`}
          aria-label="Search"
        >
          <DELETE_ICON alt="Search Icon" width={24} height={24} />
          <span className={`caption-1 ${getButtonColor("/search")}`}>
            가게 탐색
          </span>
        </button>
      </Link>
    </nav>
  );
}

export default BottomNav;
