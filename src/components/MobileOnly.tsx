"use client";

import ERROR_ICON from "@/assets/error_icon.svg";
import { useEffect, useState } from "react";

export default function MobileOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <ERROR_ICON alt="에러" width={48} height={48} className="mb-[10px]" />
        <h1 className="heading-1 text-gray-10">죄송합니다</h1>
        <h2 className="body-2 text-gray-6 whitespace-pre-wrap text-center">{`또옴 서비스는 PC 버전을 제공하지 않습니다.\n모바일로 접속해 주세요.`}</h2>
      </div>
    );
  }

  return <>{children}</>;
}
