import { FC } from 'react';

import Button from '../components/Button';

import personal from '../assets/img/personal-concierge.jpg';
import personal2 from '../assets/img/personal-concierge2.jpg';
import business from '../assets/img/business-concierge.jpg';
import business2 from '../assets/img/business-concierge2.jpg';

interface ConciergeTypesProps {
  setIsContactOpen: (isOpen: boolean) => void;
}

const ConciergeTypes: FC<ConciergeTypesProps> = ({ setIsContactOpen }) => {
  return (
    <section
      className="grain-effect container max-w-none section__padding"
      id="types"
    >
      <div className="flex justify-between mb-16">
        <h2 className="section__title">CONCIERGE TYPES</h2>
        <span className="section__title">02</span>
      </div>
      <div className="flex justify-between md:mb-16 flex-col md:flex-row mb-3 xxl:justify-center xxl:gap-24">
        <div className="rounded-md overflow-hidden hidden lg:inline-block">
          <img
            src={personal2}
            alt="personal boat"
            className="rounded-md max-h-[28rem] object-cover saturate-50 transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="flex flex-col md:gap-y-16 gap-y-8 md:items-start items-center md:px-4 pb-8 md:pb-0">
          <h3 className="section__subtitle max-w-sm text-start">
            PERSONAL <span className="italic">concierge</span>
          </h3>
          <p className="section__description max-w-sm md:text-start text-center">
            Personal concierge services focus on addressing the unique needs of
            clients, delivering bespoke support and solutions for their personal
            matters and lifestyle management.
          </p>
          <hr className="w-5/6 border-t-2 border-additionalText m-0 opacity-50" />
          <Button
            variant="black"
            text="Discover more"
            onClick={() => setIsContactOpen(true)}
          />
        </div>
        <div className="rounded-md overflow-hidden self-center">
          <img
            src={personal}
            alt="personal boat"
            className="rounded-md lg:max-h-[46rem] md:max-h-[30rem] object-cover saturate-50 transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row xxl:justify-center xxl:gap-24">
        <div className="rounded-md overflow-hidden self-center">
          <img
            src={business}
            alt="personal boat"
            className="rounded-md lg:max-h-[46rem] md:max-h-[30rem] object-cover saturate-50 transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="flex flex-col md:gap-y-16 gap-y-8 md:items-start items-center md:px-4 pt-8 md:pt-0">
          <h3 className="section__subtitle max-w-sm text-start">
            BUSINESS <span className="italic">concierge</span>
          </h3>
          <p className="section__description max-w-sm md:text-start text-center">
            Concierge services are crafted to bring value to businesses by
            offering dedicated support to employees as a supplemental perk. This
            thoughtful approach seeks to boost employee satisfaction,
            efficiency, and overall well-being through tailored assistance
            programs aligned with the diverse demands and preferences of the
            team.
          </p>
          <hr className="w-5/6 border-t-2 border-additionalText m-0 opacity-50" />
          <Button
            variant="black"
            text="Discover more"
            onClick={() => setIsContactOpen(true)}
          />
        </div>
        <div className="rounded-md overflow-hidden hidden lg:inline-block self-end">
          <img
            src={business2}
            alt="personal boat"
            className="rounded-md max-h-[28rem] object-cover saturate-50 transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default ConciergeTypes;
