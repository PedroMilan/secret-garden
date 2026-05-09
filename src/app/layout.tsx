import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secret Garden | Alba Serena",
  description:
    "Alba Serena é um perfume sólido artesanal com lavanda e bergamota, criado pela Secret Garden para transformar sua rotina em bem-estar.",
  keywords: [
    "perfume sólido",
    "lavanda",
    "bergamota",
    "artesanal",
    "Secret Garden",
    "Alba Serena",
  ],
  authors: [{ name: "Secret Garden" }],
  openGraph: {
    title: "Secret Garden | Alba Serena",
    description:
      "Perfume sólido artesanal com lavanda e bergamota. Leve, sofisticado e ativado pelo calor da pele.",
    siteName: "Secret Garden",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
