import React from "react";

function page() {
  return (
    <div className="w-10/12 m-auto">
      <h1 className="text-6xl font-semiBold text-center p-10">Politique de Confidentialité</h1>
      <p className=" p-4">📅 Dernière mise à jour : [Date]</p>
      <h2 className="text-3xl font-regular p-4">1. Introduction</h2>
      <p className="text-xl font-regular_normal px-4">
      Bienvenue sur <strong>ROYAL LINE</strong>.
      Nous accordons une grande importance à votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web{" "}
        <strong>www.royalLine.com</strong>.
      </p>

      <h2 className="text-3xl font-regular p-4">2. Données Collectées</h2>
      <p className="text-xl font-regular_normal px-4">Nous collectons les informations suivantes lorsque vous effectuez une réservation :</p>
      <ul className="text-xl font-regular_normal px-4">
        <li>
          <strong>Nom complet</strong> 
        </li>
        <li>
          <strong>Destination de réservation</strong> 
        </li>
        <li>
          <strong>Adresse e-mail</strong>
        </li>
        <li>
          <strong>Numéro WhatsApp</strong>
        </li>
        <p>Nous ne collectons pas d’informations sensibles et nous n’utilisons pas de cookies à des fins de suivi, sauf indication contraire.</p>
      </ul>

      <h2 className="text-3xl font-regular p-4">3. Utilisation de Vos Informations</h2>
      <p className="text-xl font-regular_normal px-4">Nous utilisons vos données personnelles pour :</p>
      <ul className="text-xl font-regular_normal px-4">
        <li> Gérer et confirmer vos réservations.</li>
        <li>Vous envoyer des mises à jour importantes.</li>
        <li>
        Répondre à vos demandes et assurer un support client.
        </li>
      </ul>

      <h2 className="text-3xl font-regular p-4">4. Partage des Données</h2>
      <p className="text-xl font-regular_normal px-4">Nous ne vendons ni ne louons vos données personnelles. Cependant, nous pouvons les partager avec :</p>
      <ul className="text-xl font-regular_normal px-4">
        <li>Des prestataires de services (ex. services d’envoi d’e-mails pour confirmer votre réservation).</li>
        <li>Les autorités légales si la loi l’exige.</li>
      </ul>

      <h2 className="text-3xl font-regular p-4">5. Sécurité et Conservation des Données</h2>
      <p className="text-xl font-regular_normal px-4">
      Nous appliquons des mesures de sécurité strictes pour protéger vos données. Nous conservons vos informations uniquement aussi longtemps que nécessaire pour nos services et obligations légales.
      </p>

      <h2 className="text-3xl font-regular p-4">6. Vos Droits (Conformité RGPD)</h2>
      <div className="text-xl font-regular_normal px-4">
      Si vous êtes dans l’UE, vous avez le droit de :
      <ul className="text-xl font-regular_normal">
        <li>Accéder à vos données personnelles.</li>
        <li>Demander la modification ou la suppression de vos données.</li>
        <li>Retirer votre consentement à tout moment.</li>
        <li>Demander une copie de vos données.</li>
      </ul>
      <p>Pour exercer ces droits, contactez-nous à [votre e-mail].</p>
      </div>

      <h2 className="text-3xl font-regular p-4">7. Contact</h2>
      <p className="text-xl font-regular_normal p-4">Si vous avez des questions concernant cette politique, veuillez nous contacter :
      </p>
      <p className="text-xl font-regular_normal px-4">
        📧  E-mail :<strong>royalline.cannes@gmail.com</strong>
      </p>
      <p className="text-xl font-regular_normal px-4">
        📍 Address: <strong>26 avenue sainte rosalie, Cannes, France</strong>
      </p>
    </div>
  );
}

export default page;
