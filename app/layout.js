import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/800.css";

export const metadata = {
  title: "TLA Graphics",
  description: "Transforming Ideas into Stunning Visuals",
  icons: {
    icon: "/tla-icon.svg",
    shortcut: "/tla-icon.svg",
    apple: "/tla-icon.svg",
    other: {
      rel: "/tla-icon.svg",
      url: "/tla-icon.svg",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="pagemax">
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-VBWE8K4EVR" />
      </body>
    </html>
  );
}
