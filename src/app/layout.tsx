import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const alpina = localFont({
  src: [
    {
      path: "../fonts/alpina-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/alpina-italics.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-alpina",
});

const alpina_condensed = localFont({
  src: [
    {
      path: "../fonts/alpina-condensed-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/alpina-condensed-italics.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-alpina-condensed",
});

const oracle = localFont({
  src: "../fonts/oracle-regular.woff2",
  variable: "--font-oracle",
});

export const metadata: Metadata = {
  title: "Pi - Prabakaran A S",
  description: "Pi AI Clone for Sarvam FE Assignment - Prabakaran A S",
  openGraph: {
    title: "Pi Clone - Prabakaran A S",
    description: "Pi AI Clone for Sarvam FE Assignment - Prabakaran A S",
    type: "website",
    url: "pi-ai-sarvam.vercel.app",
    images: [{ url: "pi-ai-sarvam.vercel.app/images/og-image.png" }],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oracle.variable} ${alpina.variable} ${alpina_condensed.variable}`}>
      <body className={`flex h-screen bg-neutral-50 no-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
