// Root server layout: applies global styles and mounts client-only ErrorReporter.
import type { Metadata } from "next";
import Script from "next/script";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import ErrorReporter from "../components/ErrorReporter";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "TalentSync - Recruitment CRM SaaS",
  description: "TalentSync helps recruitment agencies manage candidates, clients, job orders and placements in one modern CRM platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}
    >
      <head>
        {/* PANDA ELEMENT SELECTION SCRIPT */}
        <Script
          src="https://bfwqdadlcyndtaqmqtci.supabase.co/storage/v1/object/public/pandajs/panda-element-selection.js"
          strategy="afterInteractive"
        />
        {/* PANDA BRANDING SCRIPT */}
        <Script
          src="https://bfwqdadlcyndtaqmqtci.supabase.co/storage/v1/object/public/pandajs/panda-branding.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ErrorReporter />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}