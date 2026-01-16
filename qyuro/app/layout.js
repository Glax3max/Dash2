import { Geist, Geist_Mono } from "next/font/google";
import BackgroundVideo from "@/components/layout/BackgroundVideo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qyuro",
  description: "A dark, cinematic chat experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-slate-100 antialiased`}
      >
        <BackgroundVideo />
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
