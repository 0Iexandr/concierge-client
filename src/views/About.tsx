import { FC } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import Logo from '../components/Logo';
import car from '../assets/img/rolls-royce.webp';
import hotel from '../assets/img/hotel.webp';
import boat from '../assets/img/boat.webp';

const aboutData = {
  images: {
    src: [boat, hotel, car],
    alt: ['boat', 'hotel', 'car'],
  },
};

const About: FC = () => {
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
      id="about"
    >
      <div className="flex justify-between mb-16">
        <h2 className="section__title">ABOUT</h2>
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
          <span className="italic">at the</span> PINNACLE OF LIFESTYLE
          MANAGEMENT, OUR COMPANY EMBODIES UNRIVALED GRACE{' '}
          <span className="italic">and</span> DISTINCTION
        </motion.h3>
        <motion.p
          className="section__description max-w-2xl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          With an expansive selection of services that elevate the standard of
          luxury concierge, we embark on a mission that surpasses expectations,
          enhancing the lives of our valued clients in extraordinary ways.
        </motion.p>
        <Logo className="h-32" />
        <motion.ul
          className="flex gap-3 flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.images.src.map((img, idx) => (
            <motion.li
              key={idx}
              className="rounded-md w-80 h-80 overflow-hidden"
              variants={imageVariants}
              custom={idx}
            >
              <img
                src={img}
                alt={aboutData.images.alt[idx]}
                className="w-full h-full object-cover saturate-50 transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </motion.li>
          ))}
        </motion.ul>
        <TypeAnimation
          sequence={[
            'Apex is Comfort',
            2000,
            'Apex is Lifestyle',
            2000,
            'Apex is Quality',
            2000,
            'Apex is Signature Service',
            2000,
            'Apex is Hospitality',
            2000,
            'Apex is Prestige',
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="font-inter text-additionalText text-2xl"
        />
        <hr className="w-2/3 md:w-1/4 lg:w-1/5 border-t-2 border-additionalText m-0 opacity-50" />
        <motion.p
          className="section__description max-w-2xl opacity-60"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Through effortless collaboration with a personal lifestyle manager,
          our realm provides unparalleled attentiveness and access, delivering
          experiences that are not only transformative but also truly
          unforgettable and deeply fulfilling.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
