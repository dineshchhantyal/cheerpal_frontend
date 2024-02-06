import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cheerpal",
  description:
    "Your go-to companion for spreading joy and ensuring you never miss a birthday celebration again!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "bg-gray-100 dark:bg-gray-800 dark:text-white text-black transition-colors duration-500 ease-in-out"
        }
      >
        <Header />
        {children}
        <Footer />
        <div id="tsparticles"></div>

        <script src="tsparticles.engine.min.js"></script>
      </body>
    </html>
  );
}
