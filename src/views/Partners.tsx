import verde from '../assets/img/verde.jpg';
import verdeBeach from '../assets/img/verde-beach.jpg';
import coucou from '../assets/img/coucou.jpg';

const partnersData = {
  cards: {
    images: [verde, verdeBeach, coucou],
    titles: ['Verde', 'Verde Beach', 'Coucou'],
    descriptions: [
      'In the heart of the most beautiful palace in Dubai, the Four Seasons Hotel at Jumeirah Beach, Verde Dubai offers you a unique and immersive experience.',
      'Verde Beach, the festive brand of the Yeeels Group, opens its famous St Tropez beach club restaurant at the Jumeirah Beach Hotel.',
      'Whether it’s a romantic date, a milestone celebration, drinks with friends, or a family gathering, the rooftop at The View at The Palm is ideal for every occasion.',
    ],
    links: [
      'https://verde-dubai.com/',
      'https://verdebeach-dubai.com/',
      'https://coucou-dubai.com/',
    ],
  },
};

const Partners = () => {
  return (
    <section
      className="grain-effect container max-w-none section__padding"
      id="about"
    >
      <div className="flex justify-between mb-16">
        <h2 className="section__title">PARTNERS</h2>
        <span className="section__title">05</span>
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <h3 className="section__subtitle max-w-5xl">
          OUR PARTNERS - EXCLUSIVE RESTAURANTS, HOTELS{' '}
          <span className="italic">and</span> SERVICES FOR YOU
        </h3>
        <p className="section__description max-w-2xl">
          Collaborating with industry leaders to craft unique and unforgettable
          experiences.
        </p>
      </div>
      <ul className="flex gap-8 flex-wrap justify-center mt-16">
        {partnersData.cards.images.map((image, idx) => (
          <li key={idx} className="max-w-[34rem]">
            <a
              href={partnersData.cards.links[idx]}
              className="flex flex-col gap-y-4"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-md overflow-hidden">
                <img
                  src={image}
                  alt={partnersData.cards.titles[idx]}
                  className="min-h-[30rem] lg:min-h-[34rem] rounded-md lg:max-h-[46rem] md:max-h-[30rem] object-cover saturate-50 transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex justify-between">
                <h4 className="text-main font-playfair text-2xl sm:text-3xl md:text-4xl text-start">
                  {partnersData.cards.titles[idx]}
                </h4>
                <span className="text-main font-playfair text-base sm:text-lg md:text-xl text-start">
                  {`0${idx + 1}`}
                </span>
              </div>
              <hr className="w-full border-t-2 border-additionalText m-0 opacity-50" />
              <p className="section__description text-start opacity-60">
                {partnersData.cards.descriptions[idx]}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
