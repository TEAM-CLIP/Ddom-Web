import TopNavBack from "@/components/TopNavBack";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <main className="relative flex flex-col min-h-screen">
        <TopNavBack />
        <section className="flex flex-col flex-grow px-[16px]">
          <h1 className="heading-2 text-gray-10 mt-[24px] whitespace-pre-wrap">
            {`회원가입을 위해\n간단한 정보를 알려주세요`}
          </h1>

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
