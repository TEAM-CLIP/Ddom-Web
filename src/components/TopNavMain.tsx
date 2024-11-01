"use client";

import LOGO from "@/assets/logo.svg";
import ALARM_ICON from "@/assets/alarm_icon.svg";
import SETTING_ICON from "@/assets/setting_icon.svg";

export default function TopNavMain() {
  return (
    <nav className="flex items-center justify-between h-[48px] px-[14px]">
      <div>
        <button className="flex items-center bg-gray-200">
          <LOGO alt="로고" width={42} height={35} />
        </button>
      </div>
      <div className="flex flex-row gap-[18px]">
        <button className="flex items-center">
          <ALARM_ICON alt="알림" width={24} height={24} />
        </button>
        <button className="flex items-center">
          <SETTING_ICON alt="설정" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
}
