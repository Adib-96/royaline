import React from "react";

function page() {
  return (
    <div className="w-10/12 m-auto">
      <h1 className="text-6xl font-semiBold text-center p-10">Conditions Générales d’Utilisation (CGU)</h1>
      <p className=" p-4">📅 Dernière mise à jour : [Date]</p>

      <h2 className="text-3xl font-regular p-4">1. Introduction</h2>
      <p className="text-xl font-regular_normal px-4">
        Les présentes Conditions Générales d’Utilisation (CGU) régissent
        l’utilisation du site <strong>royaline</strong>. En accédant
        à ce site, vous acceptez ces conditions.
      </p>

      <h2 className="text-3xl font-regular p-4">2. Réservations et Services</h2>
      <ul className="text-xl font-regular_normal px-4">
        <li>Toutes les réservations sont soumises à disponibilité.</li>
        <li>
          Vous devez fournir des informations exactes lors de votre réservation.
        </li>
        <li>
          Nous nous réservons le droit d’annuler une réservation en cas de
          nécessité.
        </li>
      </ul>

      <h2 className="text-3xl font-regular p-4">3. Responsabilités des Utilisateurs</h2>
      <ul className="text-xl font-regular_normal px-4">
        <li>Vous vous engagez à fournir des informations exactes et à jour.</li>
        <li>
          Vous ne devez pas utiliser ce site pour des activités frauduleuses ou
          illégales.
        </li>
      </ul>

      <h2 className="text-3xl font-regular p-4">4. Limitation de Responsabilité</h2>
      <p className="text-xl font-regular_normal px-4">Nous ne sommes pas responsables des pertes causées par :</p>
      <ul className="text-xl font-regular_normal px-4">
        <li>
          ❌ Des informations erronées fournies par l’utilisateur.
        </li>
        <li>
          ❌ Des problèmes techniques affectant l’accessibilité du site.
        </li>
        <li >❌ Des défaillances de services tiers.</li>
      </ul>

      <h2 className="text-3xl font-regular p-4">5. Protection des Données et Confidentialité</h2>
      <p className="text-xl font-regular_normal px-4">
        Notre <strong>politique de confidentialité</strong> régit la gestion de
        vos données personnelles. En utilisant ce site, vous acceptez nos
        pratiques de collecte de données.
      </p>

      <h2 className="text-3xl font-regular p-4">6. Modifications des CGU</h2>
      <p className="text-xl font-regular_normal px-4">
        Nous pouvons mettre à jour ces conditions à tout moment. En continuant à
        utiliser le site, vous acceptez les nouvelles conditions.
      </p>

      <h2 className="text-3xl font-regular p-4">7. Contact</h2>
      <p className="text-xl font-regular_normal p-4">Pour toute question, contactez-nous :</p>
      <p className="text-xl font-regular_normal px-4">
        📧 <strong>E-mail :</strong> royalline.cannes@gmail.com
      </p>
      <p className="text-xl font-regular_normal px-4">
        📍 <strong>Adresse :</strong> 26 avenue sainte rosalie, Cannes, France
      </p>
    </div>
  );
}

export default page;
