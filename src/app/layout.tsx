import type { Metadata } from "next";
import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorantUpright",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-openSans",
});
export const metadata: Metadata = {
  title: "Calm Cafe",
  description: "Calm Cafe, coffee shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantUpright.variable} ${openSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
