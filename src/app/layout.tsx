import "./globals.css";
import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RandomNews from "./components/RandomNews";

const trispace = Trispace({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News-Up",
  description: "The latest news from around the world",
  icons: {
    icon: [
      { url: "/img/favicon-32x32.png", sizes: "32x32" },
      { url: "/img/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: "News-Up",
    description: "The latest news from around the world",
    type: "article",
    authors: "Various",
  },
  keywords: [
    "news",
    "world",
    "world news",
    "news from around the world",
    "latest news",
    "news-up",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main className="px-2 md:px-20">
          <Header />
          <Navbar />
          <section className="flex justify-between">
            {children}
            <RandomNews />
          </section>
        </main>
      </body>
    </html>
  );
}
