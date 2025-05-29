import type { Metadata } from "next";
import { Gloria_Hallelujah, Anek_Gurmukhi } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/nav-bar";
import { Footer } from "@/components/layout/footer";

const gloria = Gloria_Hallelujah({
  subsets: ["latin"],
  variable: "--font-gloria",
  weight: "400",
});

const anek = Anek_Gurmukhi({
  subsets: ["latin"],
  variable: "--font-anek",
  // weight: "400",
});

export const metadata: Metadata = {
  title: "Squads Game",
  description: "Squads Game - Play, Win, and Earn",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gloria.variable} ${anek.variable}`}
      suppressHydrationWarning
    >
      <body className={`antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
