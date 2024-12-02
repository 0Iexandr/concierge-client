import Button from './Button';

const inputs = [
  {
    id: 'name',
    label: 'First and Last Name*',
    placeholder: 'Name',
    type: 'text',
  },
  { id: 'email', label: 'Email*', placeholder: 'Email', type: 'text' },
  {
    id: 'number',
    label: 'Phone number*',
    placeholder: 'Phone number',
    type: 'text',
  },
];

const ContactForm = () => (
  <form className="flex flex-col gap-y-10 w-full">
    {inputs.map(({ id, label, placeholder, type }) => (
      <div key={id} className="relative">
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required
          className="peer w-full bg-transparent border-b-2 border-additionalText text-additionalText text-lg outline-none placeholder-transparent py-2"
        />
        <label
          htmlFor={id}
          className="absolute left-0 top-4 text-gray-400 text-2xl transition-all duration-300 font-inter
            peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:text-skin 
            peer-focus:-top-4 peer-focus:text-base peer-focus:text-additionalText 
            peer-valid:-top-4 peer-valid:text-base peer-valid:text-additionalText cursor-text"
        >
          {label}
        </label>
      </div>
    ))}
    <div className="relative">
      <textarea
        id="help"
        name="help"
        placeholder="Let us know how we can help"
        required
        className="peer w-full bg-transparent border-b-2 border-additionalText text-additionalText text-lg outline-none placeholder-transparent py-2 resize-y min-h-20"
      />
      <label
        htmlFor="help"
        className="absolute left-0 top-4 text-gray-400 text-2xl transition-all duration-300 font-inter
          peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:text-skin 
          peer-focus:-top-4 peer-focus:text-base peer-focus:text-additionalText 
          peer-valid:-top-4 peer-valid:text-base peer-valid:text-additionalText cursor-text"
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
