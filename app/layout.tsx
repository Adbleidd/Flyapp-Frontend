import type { Metadata } from "next";
import "./../sass/main.scss";

export const metadata: Metadata = {
  title: "Flyapp",
  description: "Flyapp by Kenny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
