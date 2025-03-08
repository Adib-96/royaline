"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [locale, setLocale] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations("Navbar");

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale}`;
      router.refresh(); // Remove this if not needed
    }
  }, [router]);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}`;
    router.refresh(); // Remove this if not needed
  };

  const navigateToPage = (page) => {
    if (page === "home") {
      router.push("/");
    } else if (page === "contact") {
      router.push("/contact");
    }
  };

  return (
    <div className="sm:flex items-center justify-between p-8 border-b-2 border-gray-200">
      {/* Mobile Layout: Hamburger Icon + Dropdown Menu */}
      <div className="sm:hidden flex items-center justify-between w-full">
        {/* Hamburger Icon */}
        <button
          className="text-2xl p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Logo */}
        <div className="w-40 mx-auto">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={250} height={250} />
          </Link>
        </div>
        {/* Language Selector */}
        <select
          className="border p-2 font-bold rounded-md text-sm bg-white cursor-pointer"
          value={locale}
          onChange={(e) => changeLocale(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ru">Russian</option>
          <option value="ar">Arabic</option>
        </select>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="sm:hidden w-full p-4 bg-white shadow-md flex flex-col gap-4">
          {/* Page Navigation Dropdown */}
          <div className="border p-2 font-bold rounded-md text-sm bg-white cursor-pointer flex flex-col">
            <button
              className="p-3 hover:bg-darkslategrey hover:text-white rounded transition duration-300 ease-in-out font-regular text-lg"
              value="home"
              onClick={(e) => {
                setIsMenuOpen(prev => !prev)
                navigateToPage(e.target.value)}}
            >
              {t("item1")}
            </button>{" "}
            <hr />
            {/* Home */}
            <button
            className="p-3 hover:bg-darkslategrey hover:text-white rounded transition duration-300 ease-in-out font-regular text-lg"
              value="contact"
              onClick={(e) => {
                setIsMenuOpen(prev => !prev)
                navigateToPage(e.target.value)}}
            >
              {t("item2")}
            </button>{" "}
            {/* Contact */}
          </div>
        </div>
      )}

      {/* Desktop Layout: Navigation Links + Language Dropdown */}
      <div className="sm:flex hidden items-center justify-evenly w-full">
        <div className="w-40">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={250} height={250} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 md:gap-32">
          <Link
            href="/"
            className={`text-3xl ${
              router.pathname === "/" ? "border-b-2 border-blue-500" : ""
            } font-regular`}
          >
            {t("item1")} {/* Home */}
          </Link>
          <Link
            href="/contact"
            className={`text-3xl ${
              router.pathname === "/contact" ? "border-b-2 border-blue-500" : ""
            } font-regular`}
          >
            {t("item2")} {/* Contact */}
          </Link>
        </div>

        {/* Language Selector Dropdown */}
        <select
          className="border p-2 font-bold rounded-md text-sm bg-white cursor-pointer"
          value={locale}
          onChange={(e) => changeLocale(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ru">Russian</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
  );
}
