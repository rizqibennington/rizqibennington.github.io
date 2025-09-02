import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rizqi Rahmansyah - Web Portfolio",
  description: "Professional web developer portfolio showcasing skills in HTML, CSS, JavaScript, React, PHP, and more.",
  keywords: "web developer, portfolio, React, JavaScript, PHP, HTML, CSS",
  authors: [{ name: "Rizqi Rahmansyah" }],
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/aboutme.png" type="image/png" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
