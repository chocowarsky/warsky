import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata = {
  title: "Portfolio Saya",
  description: "Future AI & Business Strategist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
// JS KONROl
