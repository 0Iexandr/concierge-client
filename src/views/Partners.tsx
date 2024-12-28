import { FC } from 'react';
import { motion } from 'framer-motion';

import verde from '../assets/img/verde.jpg';
import verdeBeach from '../assets/img/verde-beach.jpg';
import coucou from '../assets/img/coucou.jpg';

const partnersData = {
  cards: {
    images: [verde, verdeBeach, coucou],
    titles: ['Verde', 'Verde Beach', 'Coucou'],
    descriptions: [
      'In the heart of the most beautiful palace in Dubai, the Four Seasons Hotel at Jumeirah Beach, Verde Dubai offers you a unique and immersive experience.',
      'Verde Beach, the festive brand of the Yeeels Group, opens its famous St Tropez beach club restaurant at the Jumeirah Beach Hotel.',
      'Whether it’s a romantic date, a milestone celebration, drinks with friends, or a family gathering, the rooftop at The View at The Palm is ideal for every occasion.',
    ],
    links: [
      'https://verde-dubai.com/',
      'https://verdebeach-dubai.com/',
      'https://coucou-dubai.com/',
    ],
  },
};

const Partners: FC = () => {
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
        <h2 className="section__title">PARTNERS</h2>
        <span className="section__title">05</span>
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <motion.h3
          className="section__subtitle max-w-5xl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          OUR PARTNERS - EXCLUSIVE RESTAURANTS, HOTELS{' '}
          <span className="italic">and</span> SERVICES FOR YOU
        </motion.h3>
        <motion.p
          className="section__description max-w-2xl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Collaborating with industry leaders to craft unique and unforgettable
          experiences.
        </motion.p>
      </div>
      <ul className="flex gap-8 flex-wrap justify-center mt-16">
        {partnersData.cards.images.map((image, idx) => (
          <motion.li
            key={idx}
            className="max-w-[34rem]"
            variants={imageVariants}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a
              href={partnersData.cards.links[idx]}
              className="flex flex-col gap-y-4"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-md overflow-hidden">
                <img
                  src={image}
                  alt={partnersData.cards.titles[idx]}
                  className="min-h-[30rem] lg:min-h-[34rem] rounded-md lg:max-h-[46rem] md:max-h-[30rem] object-cover saturate-50 transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex justify-between">
                <h4 className="text-main font-playfair text-2xl sm:text-3xl md:text-4xl text-start">
                  {partnersData.cards.titles[idx]}
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
                {partnersData.cards.descriptions[idx]}
              </motion.p>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
