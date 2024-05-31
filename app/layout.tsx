import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Head from "next/head";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900", "100", "200", "300", "500", "600"],
});

export const metadata: Metadata = {
  title: "Foulques Pellabeuf",
  description: "Full stack and blockchain developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <title>Foulques Pellabeuf</title>
        <meta
          name="description"
          content="With 5 years of experience in full stack and blockchain development, I am a passionate and determined developer. My goal is to continue learning and excelling in the field of blockchain, in order to actively contribute to this rapidly expanding ecosystem."
        />
        <meta property="og:title" content="Foulques Pellabeuf" key="title" />
        <meta
          property="og:description"
          content="Full Stack and Blockchain developer"
        />
        <link rel="alternate" hrefLang="fr" href="/fr" />
        <link rel="alternate" hrefLang="en" href="/en" />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
