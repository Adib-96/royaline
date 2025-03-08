"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function Description() {
  const t = useTranslations("Description");

  return (
    <div className="flex justify-center relative h-screen">
      <Image
        src="/images/charlton.jpg"
        width={800}
        height={800}
        alt="charlton_hotel"
      />
      <div className="flex flex-col justify-center items-center p-9 absolute top-1/4 -left-1 border-t-2 border-l-2 border-black bg-white gap-7 ml-5 opacity-85 max-w-5xl">
        <h3 className="place-self-start font-regular_normal text-lg">
          {t("item1")}
        </h3>
        <h4 className="place-self-start font-condensed-semiBold text-xl">
          {t("item2")}
        </h4>
        <p className="font-regular_normal leading-[1.6]">{t("item3")}</p>
      </div>
    </div>
  );
}
