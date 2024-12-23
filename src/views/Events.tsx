import { FC } from 'react';

import Button from '../components/Button';

import boat from '../assets/img/private-boat.jpg';

interface EventsProps {
  setIsContactOpen: (isOpen: boolean) => void;
}

const Events: FC<EventsProps> = ({ setIsContactOpen }) => {
  return (
    <section className="grain-effect container max-w-none section__padding">
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
            WE HAVE the EXPERTISE to TRANSFORM EVERY DREAM INTO an EXTRAVAGANT
            REALIY
          </h3>
          <p className="section__description md:text-start text-center">
            We command the expertise necessary to turn each aspiration into a
            lavish reality, whether it’s an intimate birthday soirée, a surprise
            wedding proposal, or a spontaneous escapade to the farthest reaches
            of the globe with friends. From meticulous planning and bespoke
            design to seamless execution, we handle every intricate detail of
            the event, from catering and staffing to the guest list and beyond.
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
