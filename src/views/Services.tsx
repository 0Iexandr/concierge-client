import { FC } from 'react';
import { motion } from 'framer-motion';

import travel from '../assets/img/travel.jpg';
import dining from '../assets/img/dining.jpg';
import yacht from '../assets/img/yacht.jpg';
import ticketing from '../assets/img/ticketing.jpg';
import wellness from '../assets/img/health-wellness.jpg';
import lifestyle from '../assets/img/lifestyle-management.jpg';

const servicesData = {
  cards: {
    images: [travel, dining, yacht, ticketing, wellness, lifestyle],
    titles: [
      'Travel',
      'Fine-dining&nightlife',
      'Jets&yachts rentals',
      'Ticketing',
      'Health&wellness',
      'Lifestyle management',
    ],
    descriptions: [
      'Crafting unforgettable moments',
      'Getting last-minute bookings anywhere',
      'Booking exclusive transportation',
      'VIP tickets and backstage access',
      'Taking care of your inner self',
      'Staying reachable 24/7',
    ],
  },
};

const Services: FC = () => {
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

  return (
    <section
      className="grain-effect container max-w-none section__padding"
      id="services"
    >
      <div className="flex justify-between mb-16">
        <h2 className="section__title">SERVICES</h2>
        <span className="section__title">03</span>
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
          OUR SPECIALISED TEAM ENSURES REQUESTS{' '}
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
            className="flex flex-col gap-y-4"
            variants={imageVariants}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                {`0${idx + 1}`}
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
