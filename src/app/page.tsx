import BottomNav from "@/components/BottomNav";
import TopNavMain from "@/components/TopNavMain";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = [
    { id: 1, src: "/images/food_example.jpg", text: "TEXT1" },
    { id: 2, src: "/images/food_example.jpg", text: "TEXT2" },
    { id: 3, src: "/images/food_example.jpg", text: "TEXT" },
    { id: 4, src: "/images/food_example.jpg", text: "TEXT" },
    { id: 5, src: "/images/food_example.jpg", text: "TEXT" },
    { id: 6, src: "/images/food_example.jpg", text: "TEXT" },
  ];

  return (
    <main className="min-h-screen">
      <TopNavMain />
      <div className="flex flex-col flex-grow px-[16px] py-[12px] gap-[32px]">
        <section>
          <h1 className="body-2">로그인을 하면,</h1>
          <h1 className="title-1">많은 혜택을 받을 수 있어요!</h1>
          <div className="flex flex-col justify-center items-center h-[153px] gap-[12px] rounded-[10px] bg-surface-2 mt-[20px]">
            <h3 className="body-3 whitespace-pre-wrap text-center">{`로그인하고\n또옴 가게를 등록해보세요!`}</h3>
            <Link href="/login">
              <button className="btn-dark w-[108px] h-[32px] caption-1 rounded-full">
                로그인하러 가기
              </button>
            </Link>
          </div>
        </section>
        <section>
          <div className="flex justify-between">
            <h1 className="body-1">인기 또옴가게</h1>
            <h5 className="body-5 text-gray-5">더보기</h5>
          </div>
          <h5 className="body-5 text-gray-5">
            최근 또옴의 다른 유저들이 자주 간 또옴가게에요
          </h5>
          <div className="flex flex-row mt-[12px] gap-[8px] overflow-x-auto whitespace-nowrap">
            {images.map((image) => (
              <div
                key={image.id}
                className="w-[92px] h-[92px] relative rounded-[8px] overflow-hidden flex-shrink-0"
              >
                <Image src={image.src} alt={`Image ${image.id}`} fill />
                <div className="absolute bottom-0 right-0 flex justify-center items-center w-[54px] h-[24px] rounded-tl-[4px] bg-primary-6 caption-1 text-gray-10">
                  {image.text}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex justify-between">
            <h1 className="body-1">이번주 여기 어때요?</h1>
            <h5 className="body-5 text-gray-5">더보기</h5>
          </div>
          <h5 className="body-5 text-gray-5">
            이번주에 새롭게 업데이트된 가게에요
          </h5>
          <div className="flex flex-row mt-[12px] gap-[8px] overflow-x-auto whitespace-nowrap">
            {images.map((image) => (
              <div
                key={image.id}
                className="w-[92px] h-[92px] relative rounded-[8px] overflow-hidden flex-shrink-0"
              >
                <Image src={image.src} alt={`Image ${image.id}`} fill />
                <div className="absolute bottom-0 right-0 flex justify-center items-center w-[54px] h-[24px] rounded-tl-[4px] bg-primary-6 caption-1 text-gray-10">
                  {image.text}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </main>
  );
}
