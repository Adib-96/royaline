import { NextIntlClientProvider } from "next-intl";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { getLocale, getMessages } from "next-intl/server";

export const metadata = {
  title: "Royal Line",
  description: "Enjoy premium ride services along the French Riviera. Book your comfortable and reliable ride for an unforgettable journey, whether you're exploring Nice, Cannes, or Monaco. Convenient, safe, and affordable transportation at your fingertips.",
  icons : {
    icon : '/favicon.png'
  }
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();
  const locale = await getLocale();
  
  
  return (
    <html lang={locale}>
      <head/>      
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="overflow-hidden">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
