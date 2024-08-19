import "./globals.css";

export const metadata = {
  title: "Digital Signage",
  description: "Created by AUSMT Developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
