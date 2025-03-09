import { useState, useEffect } from "react";
import Select from "react-select";
import countryData from "./countryData";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CountryPhoneInput = ({ handleChange, pN }) => {
  const t = useTranslations('contactPage');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents rendering on the server

  // Handle phone number change and selected country change
  const handlePhoneNumberChange = (e) => {
    const updatedPhone = e.target.value;
    
    setPhoneNumber(updatedPhone);
    handleChange({ target: { name: "phoneNumber", value: updatedPhone } });
  };

  const handleCountryChange = (selectedOption) => {
    
    setSelectedCountry(selectedOption);
    handleChange({ target: { name: "country", value: selectedOption.value } });
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-semibold">{t('phoneNumberText')}</label>
      <div className="flex-col flex md:flex-row gap-2">
        <Select
          options={countryData}
          getOptionLabel={(e) => (
            <div className="flex items-center gap-2">
              <Image src={e.flag} alt="flag_icon" className="w-5 h-5 rounded-full" width={40} height={40} />
              {e.label} ({e.value})
            </div>
          )}
          onChange={handleCountryChange}
          className="w-full md:w-60"
        />
        <input
          type="tel"
          placeholder={t('phoneNPlaceHolder')}
          className="border p-2 rounded w-72"
          value={pN}
          onChange={handlePhoneNumberChange} // Handle change here
        />
      </div>
      {selectedCountry && (
        <p className="text-gray-600">
          📞 {t('numberSelected')}: {selectedCountry.value} {phoneNumber}
        </p>
      )}
    </div>
  );
};

export default CountryPhoneInput;
