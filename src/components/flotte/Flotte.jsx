import React from "react";
import CarModel from "./CarModel";
import { useTranslations } from "next-intl";

function Flotte() {
  const t = useTranslations("Flotte")
  return (
    <div>
      <div className="my-24 text-center   bg-darkslategrey text-white p-10">
        <h2 className="font-condensed-semiBold text-2xl md:text-3xl">
          {t("text")}
          <span className="bg-black text-white px-7 py-4 rounded-lg">
            {t('spanText')}
          </span>
        </h2>
        <p className="font-regular  p-10 tracking-wide text-xl text-white">
          {t('desc')}
        </p>
      </div>
      <div className="grid p-12 xs:grid-col md:grid-cols-2 gap-10 justify-items-center justify-center">
        <CarModel carName={"Tesla Model 3"} carImage="teslaModely.webp" />
        <CarModel carName={"Tesla Model Y"} carImage="teslaModel3.png" />
        <CarModel
          carName={"Audi E-tron Sportback"}
          carImage="Audi-E-tron-Transparent-PNG.png"
        />
        <CarModel
          carName={"Mercedes-Benz Classe C"}
          carImage="mercedes-benzclassc.webp"
        />
        <CarModel carName={"Mercedes Classe V"} carImage="mercedesClassev.webp" />
      </div>
    </div>
  );
}

export default Flotte;
