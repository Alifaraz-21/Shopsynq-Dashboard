import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ShopSynq",
  description:
    "ShopSynq — shop management software for independent auto and marine repair shops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-surface text-white antialiased">
        <div className="flex h-screen bg-surface overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
