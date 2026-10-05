import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F3F1EC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Fariel Nur Rizky — Portfolio & Creative Engineering",
  description:
    "Personal portfolio showcasing creative technology, modern software architectures, and interactive motion design.",
  openGraph: {
    title: "Fariel Nur Rizky — Portfolio & Creative Engineering",
    description:
      "Personal portfolio showcasing creative technology, modern software architectures, and interactive motion design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
