import React from 'react'
import Image from 'next/image';
import { pictures } from './assets/images_export';
import { useTranslations } from 'next-intl';



function Services() {
  const t = useTranslations('Services');


  const servicesInfo = [
    {
      title : t('serv1'),
      icon : pictures.elegance,
      text:t('serv1Desc')
    },
    {
      title : t("serv2"),
      icon:pictures.flotte,
      text : t('serv2Desc')
    },
    {
      title : t("serv3"),
      icon:pictures.exellentService,
      text : t('serv3Desc')
    },
    {
      title :t("serv4"),
      icon :pictures.twenty_four_7,
      text : t('serv4Desc')
    }
  ]


  return (
    <div className='flex flex-wrap my-28 justify-evenly gap-10'>
      {servicesInfo.length !== 0 ? 
        servicesInfo.map((service, index) => (
          <div key={index} className='flex justify-center items-center flex-col gap-8'>
            <h3 className='font-condensed-semiBold text-lg'>{service.title}</h3>
            <div>
              <Image src={service.icon} alt={service.title} className='py-4'/>
            </div>
            <p className='text-center p-5 font-regular w-80 text-zinc-500 text-base'>{service.text}</p>
          </div>
        ))
        : ""}
    </div>
  );
}

export default Services