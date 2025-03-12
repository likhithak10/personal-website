// app/layout.js
import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "likhitha koppula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="m-0 p-0">
      {/* 
        ^ We remove any default margin/padding from <html>
      */}
      <body className="m-0 p-0 overflow-x-hidden">
        {/* 
          ^ We remove body margin/padding and hide horizontal scroll
        */}
        <NavBar />
        <main className="gridBackground min-h-screen relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
