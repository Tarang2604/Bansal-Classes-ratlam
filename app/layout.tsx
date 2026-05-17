import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bansal Classes Ratlam | English & Foreign Languages School",
  description:
    "We Believe in Quality Teaching. ISO 9001:2015 certified, CEFR standardized English and Foreign Language courses in Ratlam, MP. Learn English, French, Spanish, German, Portuguese, Italian. IELTS, TOEFL prep. Small batches, expert trainer.",
  keywords: [
    "Bansal Classes Ratlam",
    "English speaking classes Ratlam",
    "foreign language courses Ratlam",
    "French classes Ratlam",
    "IELTS coaching Ratlam",
    "spoken English Ratlam",
    "language school Madhya Pradesh",
    "Abhishek Bansal trainer",
    "TESOL TEFL certified coach",
    "CEFR certified courses",
  ],
  authors: [{ name: "Abhishek Bansal", url: "https://bansalclassesrtm.com" }],
  creator: "Bansal Classes Ratlam",
  openGraph: {
    type: "website",
    url: "https://bansalclassesrtm.com",
    title: "Bansal Classes Ratlam | English & Foreign Languages School",
    description:
      "Expert-led English and Foreign Language courses in Ratlam. ISO certified, CEFR standardized. Small batches, online & offline. Enroll today!",
    siteName: "Bansal Classes Ratlam",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bansal Classes Ratlam | English & Foreign Languages School",
    description:
      "Expert-led English and Foreign Language courses in Ratlam. ISO certified, CEFR standardized. Small batches, online & offline.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://bansalclassesrtm.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Ratlam" />
        <meta name="geo.position" content="23.3244;75.0377" />
        <meta name="ICBM" content="23.3244, 75.0377" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-slate-900 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
