'use client';

import CountryPhoneInput from '@/src/components/CountryPhoneInput';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactMe() {
  const t = useTranslations('contactPage')
  const [form, setForm] = useState({ name: '', email: '', message: '',phoneNumber:'' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), 
      });

      const result = await response.json();
      

      if (response.ok) {
        setMessage(result.success);
        setForm({ name: '', email: '', message: '',phoneNumber:'' }); 
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white shadow-lg rounded-xl p-8 md:p-16 relative">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:w-full md:col-span-7">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-semiBold">{t('text')}</h3>
              <p className="text-gray-600 mb-6 font-regular_normal">{t('descText')}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t('namePlaceHolder')}
                  value={form.name}
                  onChange={handleChange}
                  className="w-full font-regular_normal border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('emailPlaceHolder')}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full font-regular_normal border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2"
                  required
                />
                <CountryPhoneInput handleChange={handleChange} pN={form.phoneNumber}/>

                <textarea
                  name="message"
                  placeholder={t('messagePlaceHolder')}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full font-regular_normal border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2"
                  required
                />
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 rounded-full font-semibold uppercase font-regular_normal ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading} // Disable button while loading
                >
                  {loading ? t('loading') : t('sendbtn')}
                </button>
              </form>
              {message && <p className="mt-4 text-red-600">{message}</p>} {/* Display feedback message */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
