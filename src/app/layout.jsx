import "./globals.css";
export const metadata = {
  title: "Next Journey",
  description: "I learn here everything in need to in next js",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
