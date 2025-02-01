import { FC } from 'react';
import Button from './Button';

const inputs = [
  {
    id: 'name',
    label: 'First and Last Name*',
    placeholder: 'Name',
    type: 'text',
  },
  { id: 'email', label: 'Email*', placeholder: 'Email', type: 'email' },
  {
    id: 'number',
    label: 'Phone number*',
    placeholder: 'Phone number',
    type: 'tel',
  },
];

interface ContactFormProps {
  selectedService?: string;
}

const ContactForm: FC<ContactFormProps> = ({ selectedService }) => (
  <form
    className="flex flex-col gap-y-10 w-full"
    action="https://formspree.io/f/xgvoyzpw"
    method="POST"
  >
    <input
      type="hidden"
      id="service"
      name="Service"
      value={
        !selectedService || selectedService === ''
          ? 'Luxury Concierge'
          : selectedService
      }
    />
    {inputs.map(({ id, label, placeholder, type }) => (
      <div key={id} className="relative">
        <input
          type={type}
          id={id}
          name={label}
          placeholder={placeholder}
          required
          className="peer w-full bg-transparent border-b-2 border-additionalText text-additionalText text-lg outline-none placeholder-transparent py-2"
        />
        <label
          htmlFor={id}
          className="absolute left-0 top-4 text-gray-400 text-2xl transition-all duration-300 font-inter
            peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:text-skin 
            peer-focus:-top-4 peer-focus:text-base peer-focus:text-additionalText 
            peer-valid:-top-4 peer-valid:text-base peer-valid:text-additionalText cursor-text pointer-events-none"
        >
          {label}
        </label>
      </div>
    ))}
    <div className="relative">
      <textarea
        id="help"
        name="How we can help"
        placeholder="Let us know how we can help"
        required
        className="peer w-full bg-transparent border-b-2 border-additionalText text-additionalText text-lg outline-none placeholder-transparent py-2 resize-y min-h-20"
      />
      <label
        htmlFor="help"
        className="absolute left-0 top-4 text-gray-400 text-2xl transition-all duration-300 font-inter
          peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:text-skin 
          peer-focus:-top-4 peer-focus:text-base peer-focus:text-additionalText 
          peer-valid:-top-4 peer-valid:text-base peer-valid:text-additionalText cursor-text pointer-events-none"
      >
        Let us know how we can help
      </label>
    </div>
    <Button text="SUBMIT REQUEST" variant="black" className="md:w-fit" />
    <p className="section__description md:text-start text-center opacity-30">
      By leaving data in the form you agree to the Privacy Policy
    </p>
  </form>
);

export default ContactForm;
