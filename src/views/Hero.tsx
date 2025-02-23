import { FC } from 'react';
import { motion } from 'framer-motion';

import restaurant from '../assets/img/hero/restaurant.jpg';
import car from '../assets/img/hero/car.jpg';
import yacht from '../assets/img/hero/yacht.jpg';
import flowers from '../assets/img/hero/flowers.jpg';
import dentist from '../assets/img/hero/dentist.jpg';
import outfits from '../assets/img/hero/outfits.jpg';
import events from '../assets/img/hero/events.jpg';
import currency from '../assets/img/hero/currency.jpg';
import fitness from '../assets/img/hero/fitness.jpg';
import safari from '../assets/img/hero/safari.jpg';

const heroData = {
  services: [
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
  images: [
    restaurant,
    car,
    yacht,
    flowers,
    dentist,
    outfits,
    events,
    currency,
    fitness,
    safari,
  ],
};

interface HeroProps {
  setIsContactOpen: (isOpen: boolean) => void;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
}

const Hero: FC<HeroProps> = ({ setIsContactOpen, setSelectedService }) => {
  const containerVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsContactOpen(true);
  };

  return (
    <section className="grain-effect" id="services">
      <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl text-center max-w-6xl sm:leading-snug md:leading-snug hidden">
        <span className="uppercase">Experience</span> the epitome of luxury
        service <span className="italic">with</span>{' '}
        <span className="uppercase">Apex concierge dubai</span>
      </h1>
      <div className="flex flex-wrap justify-center overflow-hidden cursor-pointer">
        {heroData.services.map((service, idx) => (
          <div
            key={idx}
            className="relative w-full md:w-1/2 h-[45vh] md:h-[50vh] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10 vignette-container"
            onClick={() => openModal(service)}
          >
            <img
              src={heroData.images[idx]}
              alt={service}
              className="w-full h-full object-cover saturate-50"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="flex flex-col gap-2 items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <h4 className="font-playfair text-3xl md:text-4xl text-center">
                  {service}
                </h4>
                <hr className="w-full border-t-2 border-white m-0" />
                <p className="section__description text-white">
                  {heroData.descriptions[idx]}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
