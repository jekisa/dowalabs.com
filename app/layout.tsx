import "./globals.css";
import Providers from "./providers";
import type { Metadata } from "next";
import {
  AnnouncementBar,
  SiteFooter,
  SiteNavbar,
} from "../components/ui/site-chrome";

export const metadata: Metadata = {
  title: "Dowa Labs — Useful software for real problems",
  description:
    "Dowa Labs is a product studio building focused SaaS for ambitious businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <Providers>
          <AnnouncementBar />
          <SiteNavbar />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
