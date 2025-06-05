import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EungGu Yun",
  description: "Personal website and CV of EungGu Yun, AI Researcher & Engineer specializing in AI.",
  keywords: ["AI", "Machine Learning", "Research", "KAIST", "SAIGE"],
  authors: [{ name: "EungGu Yun" }],
  creator: "EungGu Yun",
  openGraph: {
    title: "EungGu Yun",
    description: "Personal website and CV of EungGu Yun, AI Researcher & Engineer specializing in AI.",
    url: "https://yuneg11.github.io",
    siteName: "EungGu Yun",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
