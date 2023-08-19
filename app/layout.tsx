"use client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOCKWAVE STORE",
  description: "To upload and store important files",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
