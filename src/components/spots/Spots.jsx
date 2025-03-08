import { useTranslations } from "next-intl";
import styles from "./Spots.module.scss";

function Spots() {
  const t = useTranslations('Spots');
  return (
    <div>
      <div className="my-24 text-center  bg-darkslategrey text-white p-10">
        <h2 className="font-condensed-semiBold text-2xl md:text-3xl">
          {t('text')}
          <span className="bg-black text-white px-7 py-4 rounded-lg">
            {t('spanText')}
          </span>
        </h2>
        <p className="font-regular  p-10 tracking-wide  text-xl text-white">
          {t('spotDescription')}
        </p>
      </div>

      <div>
        <div className={styles.container}>
          <div>
            <div className={styles.content}>
              <h2>{t('container1')}</h2>
              <span>{t('slogan1')}</span>
            </div>
          </div>
          <div>
            <div className={styles.content}>
              <h2>{t('container2')}</h2>
              <span>{t('slogan2')}</span>
            </div>
          </div>
          <div>
            <div className={styles.content}>
              <h2>{t('container3')}</h2>
              <span>{t('slogan3')}</span>
            </div>
          </div>
          <div>
            <div className={styles.content}>
              <h2>{t('container4')}</h2>
              <span>{t('slogan4')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spots;
