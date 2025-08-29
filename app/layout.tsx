import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ThemeProvider from '../app/providers/ThemeProvider';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mindsthetics | Premium Aesthetic Cosmetology Clinic in Lahore",
  description: "Experience premium aesthetic cosmetology services with our expert specialists. Individual approach, natural results, and over 5000 happy clients in Lahore, Pakistan.",
  keywords: ["aesthetic clinic", "cosmetology", "beauty treatments", "skin care", "Lahore", "premium beauty services"],
  authors: [{ name: "Mindsthetics" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased`}
        style={{ margin: 0, padding: 0 }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
