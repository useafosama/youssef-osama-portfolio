import type { Metadata, Viewport } from "next";
import { Alexandria, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const alexandria = Alexandria({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "يوسف أسامة — مصمم ومطور تجارب رقمية",
  description:
    "Portfolio يوسف أسامة — مصمم ومطور يهتم ببناء المنتجات والتجارب الرقمية، يجمع بين التصميم، التقنية، وتجربة المستخدم لعام 2026.",
  keywords: [
    "يوسف أسامة",
    "مصمم واجهات",
    "مطور واجهات",
    "Product Designer",
    "Creative Developer",
    "UI/UX",
    "Next.js Portfolio",
    "Wazeb",
    "Sakinah",
    "تصميم مواقع",
    "بناء منتجات رقمية",
  ],
  authors: [{ name: "يوسف أسامة", url: "https://youssefosama.com" }],
  creator: "يوسف أسامة",
  publisher: "يوسف أسامة",
  metadataBase: new URL("https://youssefosama.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://youssefosama.com",
    title: "يوسف أسامة — مصمم ومطور تجارب رقمية",
    description:
      "Portfolio يوسف أسامة — مصمم ومطور يهتم ببناء المنتجات والتجارب الرقمية المتميزة.",
    siteName: "يوسف أسامة — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "يوسف أسامة — مصمم ومطور تجارب رقمية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "يوسف أسامة — مصمم ومطور تجارب رقمية",
    description:
      "Portfolio يوسف أسامة — مصمم ومطور يهتم ببناء المنتجات والتجارب الرقمية.",
    creator: "@youssefosama",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${alexandria.variable} ${ibmPlexSansArabic.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen selection:bg-[#0A84FF]/20 selection:text-[#F5F5F0]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
