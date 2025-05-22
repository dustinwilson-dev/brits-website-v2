import type { Metadata } from "next";
import "@/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Blue Ribbon IT Services, LLC",
    template: "%s | Blue Ribbon IT Services, LLC",
  },
  description: "App Development - Administration - Tech Support",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-body antialiased`}
      >
        <Navbar />
        {/* <QuickLinks /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
