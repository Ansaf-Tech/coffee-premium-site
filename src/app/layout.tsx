import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESPRESSO - Premium Coffee Experience",
  description: "High-end international coffee brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-brown-950 text-amber-50">
        {children}
      </body>
    </html>
  );
};
