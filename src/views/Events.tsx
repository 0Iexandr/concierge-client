import { FC } from 'react';

import Button from '../components/Button';

import boat from '../assets/img/private-boat.jpg';

interface EventsProps {
  setIsContactOpen: (isOpen: boolean) => void;
}

const Events: FC<EventsProps> = ({ setIsContactOpen }) => {
  return (
    <section
      className="grain-effect container max-w-none section__padding"
      id="events"
    >
      <div className="flex justify-between mb-16">
        <h2 className="section__title">EVENTS</h2>
        <span className="section__title">04</span>
      </div>
      <div className="flex justify-between flex-col md:flex-row lg:gap-24 md:gap-8">
        <img
          src={boat}
          alt="personal boat"
          className="rounded-md lg:max-h-[46rem] md:max-h-[30rem] object-cover saturate-50"
        />
        <div className="flex flex-col md:gap-y-16 gap-y-8 md:items-start items-center pt-8 md:pt-0">
          <h3 className="section__subtitle md:text-start text-center">
            <span className="italic">our</span> EXPERTISE ALLOWS US TO TURN
            EVERY DREAM INTO <span className="italic">a</span> LAVISH REALITY
          </h3>
          <p className="section__description md:text-start text-center">
            We possess the skill to turn any aspiration into an extravagant
            experience, whether it is an intimate birthday celebration, a
            surprise proposal, or an impromptu trip to distant corners of the
            world with friends. From precise planning and custom design to
            flawless execution, we manage every detail, including catering,
            staffing, and guest coordination.
          </p>
          <hr className="w-4/5 border-t-2 border-additionalText m-0 opacity-50" />
          <Button
            variant="black"
            text="Submit request"
            onClick={() => setIsContactOpen(true)}
          />
          <p className="section__description md:text-start text-center opacity-60">
            VENUE SELECTION | EVENT PLANNING | GUEST LIST MANAGEMENT |
            ENTERTAINMENT ARRANGEMENTS | EVENT STAFFING | TRANSPORTATION
            LOGISTICS | ON-SITE SUPERVISION | POST-EVENT SERVICES
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
