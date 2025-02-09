import { FC } from 'react';
import { motion } from 'framer-motion';

import car from '../assets/img/car-rental.webp';
import dining from '../assets/img/dining.webp';
import yacht from '../assets/img/yacht.webp';
import dentist from '../assets/img/dentist.webp';
import outfits from '../assets/img/outfits.webp';
import flowers from '../assets/img/flowers.webp';
import events from '../assets/img/events.webp';
import exchange from '../assets/img/exchange.webp';
import fitness from '../assets/img/fitness.webp';
import safari from '../assets/img/safari.webp';

const servicesData = {
  cards: {
    images: [
      dining,
      car,
      yacht,
      flowers,
      dentist,
      outfits,
      events,
      exchange,
      fitness,
      safari,
    ],
    titles: [
      'Restaurants&nightlife',
      'Car rental',
      'Yachts rentals',
      'Flowers',
      'Dentist',
      'Designer outfits',
      'Events',
      'Currency exchange',
      'Personal Fitness Training',
      'Safari',
    ],
    descriptions: [
      'Exclusive dining & nightlife',
      'Luxury car rentals',
      'Premium yacht charters',
      'Exclusive flower delivery',
      'Elite dental services',
      'High-end fashion',
      'VIP event access',
      'Secure & Fast Transactions',
      '(Offline and Online)',
      'Wild & Unforgettable Adventures',
    ],
  },
};

interface ServicesProps {
  setIsContactOpen: (isOpen: boolean) => void;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
}

const Services: FC<ServicesProps> = ({
  setIsContactOpen,
  setSelectedService,
}) => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: index * 0.3 },
    }),
  };

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsContactOpen(true);
  };

  return (
    <section
      className="grain-effect container max-w-none section__padding"
      id="services"
    >
      <div className="flex justify-between mb-16">
        <h2 className="section__title">SERVICES</h2>
        <span className="section__title">01</span>
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <motion.h3
          className="section__subtitle max-w-5xl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          GUIDED <span className="italic">by</span> INDUSTRY-LEADING EXPERTS,
          OUR SPECIALIZED TEAM ENSURES REQUESTS{' '}
          <span className="italic">are</span> FULFILLED IN JUST HOURS
        </motion.h3>
        <motion.p
          className="section__description"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          We create tailored experiences that consistently surpass every
          expectation.
        </motion.p>
      </div>
      <ul className="flex gap-8 flex-wrap justify-center mt-16">
        {servicesData.cards.images.map((image, idx) => (
          <motion.li
            key={idx}
            className="flex flex-col gap-y-4 cursor-pointer"
            variants={imageVariants}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => openModal(servicesData.cards.titles[idx])}
          >
            <div className="rounded-md overflow-hidden">
              <img
                src={image}
                alt={servicesData.cards.titles[idx]}
                className="rounded-md lg:max-h-[46rem] md:max-h-[30rem] object-cover saturate-50 transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="flex justify-between">
              <h4 className="text-main font-playfair text-2xl sm:text-3xl md:text-4xl text-start">
                {servicesData.cards.titles[idx]}
              </h4>
              <span className="text-main font-playfair text-base sm:text-lg md:text-xl text-start">
                {idx < 9 ? `0${idx + 1}` : idx + 1}
              </span>
            </div>
            <hr className="w-full border-t-2 border-additionalText m-0 opacity-50" />
            <motion.p
              className="section__description text-start opacity-60"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {servicesData.cards.descriptions[idx]}
            </motion.p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
