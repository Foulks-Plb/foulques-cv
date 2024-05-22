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
    <html lang="fr">
      <Head>
        <title>Foulques Pellabeuf</title>
        <meta property="og:title" content="Foulques Pellabeuf" key="title" />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
