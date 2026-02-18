import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "TG AgriFarms  Pure · Spicy · Authentic Chilli Powder",
  description:
    "Premium handcrafted chilli powder and spices from TG AgriFarms. Pure, spicy, and authentic flavors straight from the farm to your kitchen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
