import type { Metadata, Viewport } from "next";
import { Commissioner, Source_Serif_4, Space_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  style: "normal",
  variable: "--font-source-serif",
  display: "swap",
});

const commissioner = Commissioner({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-commissioner",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "normal",
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.company.name,
    template: `%s · ${content.company.name}`,
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "128x128", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: content.colors.ink,
  colorScheme: "light",
};

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--ink": c.ink,
  "--papier": c.papier,
  "--vlak": c.vlak,
  "--wit": c.wit,
  "--oranje": c.oranje,
  "--link": c.link,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${sourceSerif.variable} ${commissioner.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#inhoud" className="skip">
          {content.ui.skip}
        </a>
        <Header />
        <main id="inhoud" tabIndex={-1} className="flex-1 scroll-mt-36 outline-none">
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
