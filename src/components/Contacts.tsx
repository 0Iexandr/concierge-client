const Contacts = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-4">
        <p className="font-inter text-lg opacity-60">Email:</p>
        <a
          href="mailto:apexconciergedubai@gmail.com"
          className="font-inter md:text-2xl text-xl break-words"
        >
          apexconciergedubai@gmail.com
        </a>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="font-inter text-lg opacity-60">Phone:</p>
        <a
          href="tel:+971000000000"
          className="font-inter md:text-2xl text-xl break-words"
        >
          +971 00 000 0000
        </a>
      </div>
    </div>
  );
};

export default Contacts;
