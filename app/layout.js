import "./globals.css";
import Navbar from "./components/navbar";

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
      </body>
    </html>
  );
}
