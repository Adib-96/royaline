import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const today_date = new Date().getFullYear();
  return (
    <div>
      <div className="bg-black">
        <h3 className="text-white text-xl sm:text-3xl tracking-wide underline p-8 text-center">
          {t("textPourReserver.title")}
        </h3>
      </div>

      {/*Footer*/}
      <section className="bg-black flex flex-col md:flex md:flex-row md:justify-evenly gap-5 p-8">
        <div >
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
          </Link>

          <p className=" light text-zinc-500 text-xl pt-8 text-pretty">{t('textDesc.text')}</p>
        </div>

        <div className="text-white flex flex-col gap-8">
          <h4 className="font-regular text-2xl">
            {t("INFORMATIONS_LEGALES.text")}
          </h4>
          <Link
            href="politique-de-confidentialite"
            className="light text-zinc-500 text-xl"
          >
            {t("INFORMATIONS_LEGALES.el2")}
          </Link>
          <Link
            href="/conditions-generales"
            className="light text-zinc-500 text-xl"
          >
            {t("INFORMATIONS_LEGALES.el3")}
          </Link>
        </div>

        <div className="text-white flex flex-col gap-8">
          <h4 className="font-regular text-2xl">CONTACT</h4>
          <Link href="#" className="light text-xl text-zinc-500">
            royalline.cannes@gmail.com
          </Link>
          <p className="light text-zinc-500 text-xl">+33 0664686369</p>
          <div className="flex  gap-3">
            <Link href="https://api.whatsapp.com/message/XBWLUV67OI2FM1?autoload=1&app_absent=0" target="blank" className="light text-zinc-500">
              <Image src="/icons/whatsup.svg" width={50} height={50} alt="whatsup_icon"/>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61558598687016&mibextid=wwXIfr&rdid=gB3jpqWycNRryETD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BDAoZvoVS%2F%3Fmibextid%3DwwXIfr#" target="blank" className="light text-zinc-500">
              <Image src="/icons/facebook.svg" width={50} height={50} alt="facebook_icon" />
            </Link>
            <Link href="https://www.instagram.com/royal____line?igsh=NnRmbGt5czdvMzhn&utm_source=qr" target="blank" className="light text-zinc-500">
              <Image src="/icons/instagram.svg" width={50} height={50} alt="instagram_icon"/>
            </Link>
            <Link href="https://www.snapchat.com/add/royalline06?invite_id=Rxs2zD-U&locale=fr_FR&share_id=SBB_G0ZRR2aBhcevDxOFmw&sid=b6c21228b6864e27852b152243ab1d0e" target="blank" className="light text-zinc-500">
              <Image src="/icons/snapchat.svg" width={50} height={50} alt="snapchat_icon"/>
            </Link>
          </div>
        </div>
      </section>
      <p className="text-white bg-black font-regular_normal text-lg border-t-2 border-gray-200 p-3 text-center tracking-widest">
        © <span>{today_date}</span> ROYAL LINE. {t("copyRights.text")}
      </p>
    </div>
  );
}
