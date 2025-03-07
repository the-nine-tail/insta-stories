import type { Metadata } from "next";
import "./globals.css";
import { WorkSansRegular } from "./ui-components/typing/fonts";

export const metadata: Metadata = {
  title: "Instagram Stories",
  description: "Instagram stories demo for STAGE OTT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={WorkSansRegular.className}>
        {children}
        <div id="portal-root" className="inactive" />
      </body>
    </html>
  );
}
