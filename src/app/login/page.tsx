import Link from "next/link";
import KAKAO_ICON from "@/assets/kakao_icon.svg";
import APPLE_ICON from "@/assets/apple_icon.svg";

export default function Login() {
  return (
    <main className="relative flex flex-col min-h-screen px-[16px]">
      <h1 className="heading-1 text-gray-10 mt-[56px]">
        또 오고싶은 가게라면?
      </h1>
      <h2 className="body-2 text-gray-5">
        또옴 가게를 등록하고 혜택을 받아보세요!
      </h2>
      <div className="flex-grow flex h-full items-center justify-center mt-[20px] mb-[184px] rounded-[16px] bg-gray-3">
        <div className="w-full h-full flex items-center justify-center">
          일단 비워둠
        </div>
      </div>

      <div className="fixed bottom-[8px] left-0 right-0 px-[20px] flex flex-col gap-[8px]">
        <Link href="/login" className="w-full">
          <button className="btn text-gray-10 bg-kakao flex items-center justify-center gap-[8px] w-full">
            <KAKAO_ICON alt="카카오 아이콘" width={24} height={24} />
            <span>Kakao로 로그인하기</span>
          </button>
        </Link>
        <Link href="/login" className="w-full">
          <button className="btn text-white bg-black flex items-center justify-center gap-[8px] w-full">
            <APPLE_ICON alt="애플 아이콘" width={24} height={24} />
            <span>Apple로 로그인하기</span>
          </button>
        </Link>
        <Link href="/" className="w-full">
          <button className="flex justify-center w-full mt-[8px] mb-[24px]">
            <span className="caption-1 text-gray-4">로그인 없이 사용하기</span>
          </button>
        </Link>
      </div>
    </main>
  );
}
