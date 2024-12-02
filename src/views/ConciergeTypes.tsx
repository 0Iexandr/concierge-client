import Button from '../components/Button';

import personal from '../assets/img/personal-concierge.jpg';
import personal2 from '../assets/img/personal-concierge2.jpg';
import business from '../assets/img/business-concierge.jpg';
import business2 from '../assets/img/business-concierge2.jpg';

const ConciergeTypes = () => {
  return (
    <section className="grain-effect container max-w-none section__padding">
      <div className="flex justify-between mb-16">
        <h2 className="section__title">CONCIERGE TYPES</h2>
        <span className="section__title">02</span>
      </div>
      <div className="flex justify-between md:mb-16 flex-col md:flex-row mb-3 xxl:justify-center xxl:gap-24">
        <img
          src={personal2}
          alt="personal boat"
          className="rounded-md max-h-[28rem] object-cover saturate-50 hidden lg:inline-block"
        />
        <div className="flex flex-col md:gap-y-16 gap-y-8 md:items-start items-center md:px-4 pb-8 md:pb-0">
          <h3 className="section__subtitle max-w-sm text-start">
            PERSONAL <span className="italic">concierge</span>
          </h3>
          <p className="section__description max-w-sm md:text-start text-center">
            Personal concierge services revolve around meeting the individual
            needs of clients, offering tailored assistance and support for their
            personal affairs and lifestyle management.
          </p>
          <hr className="w-5/6 border-t-2 border-additionalText m-0 opacity-50" />
          <Button variant="black" text="Discover more" />
        </div>
        <img
          src={personal}
          alt="personal boat"
          className="rounded-md lg:max-h-[46rem] md:max-h-[30rem] object-cover saturate-50"
        />
      </div>
      <div className="flex justify-between flex-col md:flex-row xxl:justify-center xxl:gap-24">
        <img
          src={business}
          alt="personal boat"
          className="rounded-md lg:max-h-[46rem] md:max-h-[30rem] object-cover saturate-50"
        />
        <div className="flex flex-col md:gap-y-16 gap-y-8 md:items-start items-center md:px-4 pt-8 md:pt-0">
          <h3 className="section__subtitle max-w-sm text-start">
            BUSINESS <span className="italic">concierge</span>
          </h3>
          <p className="section__description max-w-sm md:text-start text-center">
            Сoncierge services are designed to provide added value to businesses
            by offering comprehensive support to employees as an additional
            benefit. This strategic initiative aims to enhance employee
            satisfaction, productivity, and overall well-being through curated
            assistance programs customised to the diverse needs and preferences
            of the workforce.
          </p>
          <hr className="w-5/6 border-t-2 border-additionalText m-0 opacity-50" />
          <Button variant="black" text="Discover more" />
        </div>
        <img
          src={business2}
          alt="personal boat"
          className="rounded-md max-h-[28rem] self-end object-cover saturate-50 hidden lg:inline-block"
        />
      </div>
    </section>
  );
};

export default ConciergeTypes;
