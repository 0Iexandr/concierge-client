const Socials = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-4">
        <p className="font-inter text-lg opacity-60">Follow us:</p>
        <a
          href="https://t.me/apexconcierge"
          className="font-inter md:text-2xl text-xl break-words"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
        <a
          href="https://www.instagram.com/apex_concierge"
          className="font-inter md:text-2xl text-xl break-words"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Socials;
