import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Rizqi Rahmansyah - Full Stack Developer",
    template: "%s | Rizqi Rahmansyah"
  },
  description: "Professional Full Stack Developer portfolio. Expert in Next.js, React, Laravel, PHP, and modern web technologies. View my projects and professional experience.",
  keywords: [
    "Rizqi Rahmansyah", 
    "Full Stack Developer", 
    "Web Developer", 
    "Next.js Developer", 
    "React Developer", 
    "Laravel Developer", 
    "Portfolio", 
    "Indonesia"
  ],
  authors: [{ name: "Rizqi Rahmansyah", url: "https://rizqibennington.com" }],
  creator: "Rizqi Rahmansyah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rizqibennington.com",
    title: "Rizqi Rahmansyah - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in building scalable web applications with Next.js and Laravel.",
    siteName: "Rizqi Rahmansyah Portfolio",
    images: [
      {
        url: "/images/me2.jpg", // Using a high-quality professional photo
        width: 1200,
        height: 630,
        alt: "Rizqi Rahmansyah - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizqi Rahmansyah - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in building scalable web applications.",
    images: ["/images/me2.jpg"],
  },
  icons: {
    icon: "/images/aboutme.png",
    shortcut: "/images/aboutme.png",
    apple: "/images/aboutme.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL("https://rizqibennington.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/aboutme.png" type="image/png" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
