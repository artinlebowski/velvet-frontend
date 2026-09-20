
import Navbar from "@/components/layout/navbar/navbar";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">

      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
