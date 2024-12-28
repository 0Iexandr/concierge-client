import { FC } from 'react';
import { motion } from 'framer-motion';

import Button from '../components/Button';

import boat from '../assets/img/private-boat.jpg';

interface EventsProps {
  setIsContactOpen: (isOpen: boolean) => void;
}

const Events: FC<EventsProps> = ({ setIsContactOpen }) => {
  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="grain-effect container max-w-none section__padding overflow-hidden"
      id="events"
    >
      <div className="flex justify-between mb-16">
        <h2 className="section__title">EVENTS</h2>
        <span className="section__title">04</span>
      </div>
      <div className="flex justify-between flex-col md:flex-row lg:gap-24 md:gap-8">
        <motion.img
          src={boat}
          alt="personal boat"
          className="rounded-md lg:max-h-[46rem] md:max-h-[30rem] object-cover saturate-50"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <div className="flex flex-col md:gap-y-16 gap-y-8 md:items-start items-center pt-8 md:pt-0">
          <motion.h3
            className="section__subtitle md:text-start text-center"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="italic">our</span> EXPERTISE ALLOWS US TO TURN
            EVERY DREAM INTO <span className="italic">a</span> LAVISH REALITY
          </motion.h3>
          <motion.p
            className="section__description md:text-start text-center"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We possess the skill to turn any aspiration into an extravagant
            experience, whether it is an intimate birthday celebration, a
            surprise proposal, or an impromptu trip to distant corners of the
            world with friends. From precise planning and custom design to
            flawless execution, we manage every detail, including catering,
            staffing, and guest coordination.
          </motion.p>
          <hr className="w-4/5 border-t-2 border-additionalText m-0 opacity-50" />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button
              variant="black"
              text="Submit request"
              onClick={() => setIsContactOpen(true)}
            />
          </motion.div>
          <motion.p
            className="section__description md:text-start text-center opacity-60"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            VENUE SELECTION | EVENT PLANNING | GUEST LIST MANAGEMENT |
            ENTERTAINMENT ARRANGEMENTS | EVENT STAFFING | TRANSPORTATION
            LOGISTICS | ON-SITE SUPERVISION | POST-EVENT SERVICES
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Events;
