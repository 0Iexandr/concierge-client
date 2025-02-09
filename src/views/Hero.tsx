import { FC } from 'react';
import { motion } from 'framer-motion';

import background from '../assets/video/hero-background.mp4';
import Button from '../components/Button';

const services = [
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
];

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
    <section className="relative md:h-screen pt-44 pb-16 md:pt-0 md:pb-0">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-main opacity-70 grain-effect" />
      <motion.div
        className="relative flex flex-col justify-center items-center h-full gap-y-10 container max-w-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl text-center max-w-6xl sm:leading-snug md:leading-snug">
          <span className="uppercase">Experience</span> the epitome of luxury
          service <span className="italic">with</span>{' '}
          <span className="uppercase">Apex concierge dubai</span>
        </h1>
        <p className="font-inter md:text-xl text-center max-w-xl md:leading-normal leading-normal">
          It is a premium and exclusive provider of personalized assistance and
          luxury services
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {services.map(title => (
            <Button
              key={title}
              text={title}
              variant="white"
              onClick={() => openModal(title)}
              className="min-w-72"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
