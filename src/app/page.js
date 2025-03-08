import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Description from "../components/description/Description";
import Flotte from "../components/flotte/Flotte";
import Spots from "../components/spots/Spots";
import Image from "next/image";
import Faq from "../components/FAQ/Faq";
import ClientReview from "../components/avis_de_clients/ClientReview";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center">
        <Hero />
        <div className="absolute top-1/3 text-center">
          <h1 className=" text-4xl md:text-6xl   text-white font-bold py-5 mb-7 font-semiBold">
            {t("title")}
          </h1>
          <p
            className="w-4/5 m-auto text-center text-white font-regular_normal  text-base md:text-2xl tracking-wider  text-pretty
"
          >
            {t("service_description")}
          </p>
        </div>
      </div>
      <Services />
      <Description />
      <Flotte />
      <Spots />
      <Faq />
      <ClientReview />
    </>
  );
}
