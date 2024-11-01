"use client";

import TopNavBack from "@/components/TopNavBack";
import { handlePhoneNumberChange } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  return (
    <>
      <main className="relative flex flex-col min-h-screen">
        <TopNavBack />
        <section className="flex flex-col flex-grow px-[16px]">
          <h1 className="heading-2 text-gray-10 mt-[24px] mb-[28px] whitespace-pre-wrap">
            {`회원가입을 위해\n간단한 정보를 알려주세요`}
          </h1>
          <section className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex gap-[2px]">
                <h2 className="body-3">닉네임</h2>
                <h2 className="text-secondary-6 body-3">*</h2>
              </div>
              <div className="flex gap-[10px]">
                <input
                  type="text"
                  placeholder="닉네임을 입력해주세요"
                  className="flex flex-grow h-[48px] px-[12px] bg-surface-1 rounded-[8px] body-4 placeholder-gray-3
             hover:border-gray-1 focus:border-gray-1 focus:ring-0 focus:outline-none
            border-transparent border-[2px] transition-colors duration-200"
                />
                <button className="btn-dark w-[80px] body-5 ">중복확인</button>
              </div>
              <p className="caption-1 text-gray-5 pl-[12px]">
                최소 2자~8자 (영문,국문 가능)
              </p>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <div className="flex gap-[2px]">
                <h2 className="body-3">휴대폰 번호</h2>
                <h2 className="text-secondary-6 body-3">*</h2>
              </div>
              <div className="mb-[1.75rem]">
                <input
                  type="text"
                  placeholder="XXX - XXXX - XXXX"
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumberChange(e, setPhoneNumber)}
                  className="flex w-full h-[48px] px-[12px] bg-surface-1 rounded-[8px] body-4 placeholder-gray-3
                  hover:border-gray-1 focus:border-gray-1 focus:ring-0 focus:outline-none
                 border-transparent border-[2px] transition-colors duration-200"
                />
              </div>
            </div>
          </section>
          <div className="fixed bottom-[8px] left-0 right-0 px-[20px] flex flex-col">
            <Link href="/" className="w-full">
              <button className="btn-dark flex justify-center w-full">
                입력하기
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
