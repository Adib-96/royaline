import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";

export default async function ClientReview() {
  const t = useTranslations("avis_de_clients");

  // Fetch data from Firestore
  const querySnapshot = await getDocs(collection(db, "clients-review"));
  const reviews = querySnapshot.docs.map((doc) => doc.data());

  const avs_clts = [
    { clt1: { tweet: t('client1.tweet'), commentaire: t('client1.commentaire') } },
    { clt2: { tweet: t('client2.tweet'), commentaire: t('client2.commentaire') } },
    { clt3: { tweet: t('client3.tweet'), commentaire: t('client3.commentaire') } },
    { clt4: { tweet: t('client4.tweet'), commentaire: t('client4.commentaire') } },
    { clt5: { tweet: t('client5.tweet'), commentaire: t('client5.commentaire') } }
  ];

  // Update reviews based on language
  async function trackLanguage() {
    const response = await cookies();
    const language = response.get('MYNEXTAPP_LOCALE')?.value;

    switch (language) {
      case 'fr':
        reviews.map((rev, index) => {
          const clientReview = avs_clts[index];
          if (clientReview) {
            rev.tweet = clientReview[`clt${index + 1}`].tweet;
            rev.commentaire = clientReview[`clt${index + 1}`].commentaire;
          }
        });
        break;
      case 'en':
        reviews.map((rev, index) => {
          const clientReview = avs_clts[index];
          if (clientReview) {
            rev.tweet = clientReview[`clt${index + 1}`].tweet;
            rev.commentaire = clientReview[`clt${index + 1}`].commentaire;
          }
        });
        break;
      case 'ar':
        reviews.map((rev, index) => {
          const clientReview = avs_clts[index];
          if (clientReview) {
            rev.tweet = clientReview[`clt${index + 1}`].tweet;
            rev.commentaire = clientReview[`clt${index + 1}`].commentaire;
          }
        });
        break;
      case 'ru':
        reviews.map((rev, index) => {
          const clientReview = avs_clts[index];
          if (clientReview) {
            rev.tweet = clientReview[`clt${index + 1}`].tweet;
            rev.commentaire = clientReview[`clt${index + 1}`].commentaire;
          }
        });
      default:
        break;
    }
  }

  // Call trackLanguage to ensure the reviews have the correct language translations
  await trackLanguage();

  return (
    <div>
      <div className="my-24 text-center bg-darkslategrey text-white p-10">
        <h2 className="font-condensed-semiBold text-2xl md:text-3xl">
          {t("text")}
          <span className="bg-black text-white px-4 sm:px-7 py-2 sm:py-4 rounded-lg inline-block">
            {t("spanText")}
          </span>
          <p className="font-regular pt-10 tracking-wide text-xl text-white">
            {t("desc")}
          </p>
        </h2>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              className={`m-3 sm:m-6 bg-gray-50 p-4 sm:p-6 rounded-3xl flex flex-col justify-center items-center text-center
                ${index === 2 ? "lg:col-span-2" : ""}`}
              key={index}
            >
              <h2 className="font-condensed-semiBold text-lg sm:text-2xl md:text-3xl">
              {review.tweet}
              </h2>
              <p className="font-regular text-md sm:text-lg md:text-xl py-4">
                {review.commentaire}
              </p>
              <p className="font-regular font-bold text-md sm:text-lg md:text-xl">
                {review.pseudonyme}
              </p>
              <p className="py-4 text-lg">⭐⭐⭐⭐⭐</p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg sm:text-xl">
            Aucun avis disponible
          </p>
        )}
      </div>
    </div>
  );
}
