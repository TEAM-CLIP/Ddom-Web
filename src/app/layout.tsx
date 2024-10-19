import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const Pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "또옴",
  description: "나만의 단골 혜택을 받는, 고객과 가게를 연결하는 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Pretendard.variable} antialiased`}>{children}</body>
    </html>
  );
}
