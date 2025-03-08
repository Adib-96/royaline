import { NextIntlClientProvider } from "next-intl";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { getLocale, getMessages } from "next-intl/server";

export const metadata = {
  title: "Royal Line",
  description: "#",
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="overflow-hidden mb-10">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
