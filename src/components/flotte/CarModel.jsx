import { useTranslations } from "next-intl"
import Image from "next/image"




function CarModel({carName,carImage}) {
  const t = useTranslations('Flotte')
  return (
    <div className="flex flex-col justify-center items-center p-12 gap-4">
        <h3 className="font-semiBold text-3xl md:text-4xl tracking-wider underline text-center">{carName}</h3>
        <div className="overflow-hidden">
          <Image src={"/images/"+carImage}  width={600} height={600} alt={carName} />
        </div>

        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="flex gap-6 md:gap-12">
            <div className="flex flex-col justify-center items-center">
              <Image src="/icons/wifi.png" width={30} height={30} alt="wifi_icon"/>
              <span>{t('wifi')}</span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image src="/icons/charge-de-la-batterie.png" width={30} height={30} alt="charge_de_batterie"/>
              <span>{t('batterie')}</span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image src="/icons/confiserie.png" width={30} height={30} alt="confiserie_icon"/>
              <span>{t('Confiserie')}</span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image src="/icons/bluetooth.png" width={30} height={30} alt="bluetooth_icon"/>
              <span>{t('Bluetooth')}</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CarModel