import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';

import envelope from '../assets/img/envelope.webp';

const EnquiryForm = () => {
  return (
    <section
      className="grain-effect container max-w-none section__padding"
      id="form"
    >
      <div className="flex justify-between mb-16">
        <h2 className="section__title">ENQUIRY FORM</h2>
        <span className="section__title">05</span>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row lg:gap-24 gap-8">
        <div className="relative">
          <img
            src={envelope}
            alt="envelope"
            className="rounded-md object-cover saturate-50"
          />
          <Logo
            className="absolute md:-top-10 md:-left-10 -top-8 -left-4 border -rotate-[25deg] border-main bg-main rounded-full md:w-40 md:h-40 w-32 h-32 md:p-6 p-4"
            isWhite
          />
        </div>
        <div className="flex flex-col gap-y-8 md:w-2/5 w-full md:items-start items-center">
          <h3 className="section__subtitle max-w-sm leading-none md:text-start text-center">
            Let us know how we can help
          </h3>
          <p className="section__description md:text-start text-center md:pb-14 pb-4">
            Fill the form and we will contact you shortly.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
