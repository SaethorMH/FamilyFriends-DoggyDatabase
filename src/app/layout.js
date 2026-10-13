import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

/////////////////////////////////////
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
/////////////////////////////////////

export const metadata = {
  title: "Family Friends",
  description:
    "Browse a list of breeds, view pictures, and learn about each dog’s size, personality, activity level, and care needs.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${monrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <NavBar />
      </body>
    </html>
  );
}
