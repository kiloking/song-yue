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
        url: "https://web.forestdev.work/songyueweb02.jpg",
        width: 800, // 可以根據實際圖片大小設置
        height: 600,
        alt: "大清松玥",
      },
    ],
    locale: "zh_TW", // 可以根據需求設置 locale
    type: "website", // 可選：你可以設置 `type` 為 `website`, `article`, 等
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WSH49XH2');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSH49XH2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
