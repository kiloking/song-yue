import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "大清松玥",
  description: "青埔森活圈 純粹獨一 均質兩房 大清機構看度鉅作 21-31 坪",
  openGraph: {
    title: "大清松玥",
    description: "青埔森活圈 純粹獨一 均質兩房 大清機構看度鉅作 21-31 坪",
    images: [
      {
        url: "/images/web01.jpeg",
        width: 800, // 可以根據實際圖片大小設置
        height: 600,
        alt: "大清松玥",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
