import { TypeAnimation } from 'react-type-animation';
import Logo from '../components/Logo';
import car from '../assets/img/rolls-royce.jpg';
import hotel from '../assets/img/hotel.jpg';
import boat from '../assets/img/boat.jpg';

const aboutData = {
  images: {
    src: [boat, hotel, car],
    alt: ['boat', 'hotel', 'car'],
  },
};

const About = () => {
  return (
    <section
      className="grain-effect container max-w-none section__padding"
      id="about"
    >
      <div className="flex justify-between mb-16">
        <h2 className="section__title">ABOUT</h2>
        <span className="section__title">01</span>
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <h3 className="section__subtitle max-w-5xl">
          <span className="italic">at the</span> PINNACLE OF LIFESTYLE
          MANAGEMENT, OUR COMPANY EMBODIES UNRIVALED GRACE{' '}
          <span className="italic">and</span> DISTINCTION
        </h3>
        <p className="section__description max-w-2xl">
          With an expansive selection of services that elevate the standard of
          luxury concierge, we embark on a mission that surpasses expectations,
          enhancing the lives of our valued clients in extraordinary ways.
        </p>
        <Logo className="h-32" />
        <ul className="flex gap-3 flex-wrap justify-center">
          {aboutData.images.src.map((img, idx) => (
            <li key={idx} className="rounded-md w-80 h-80 overflow-hidden">
              <img
                src={img}
                alt={aboutData.images.alt[idx]}
                className="w-full h-full object-cover saturate-50 transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </li>
          ))}
        </ul>
        <TypeAnimation
          sequence={[
            'Apex is Comfort',
            2000,
            'Apex is Lifestyle',
            2000,
            'Apex is Quality',
            2000,
            'Apex is Signature Service',
            2000,
            'Apex is Hospitality',
            2000,
            'Apex is Prestige',
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="font-inter text-additionalText text-2xl"
        />
        <hr className="w-2/3 md:w-1/4 lg:w-1/5 border-t-2 border-additionalText m-0 opacity-50" />
        <p className="section__description max-w-2xl opacity-60">
          Through effortless collaboration with a personal lifestyle manager,
          our realm provides unparalleled attentiveness and access, delivering
          experiences that are not only transformative but also truly
          unforgettable and deeply fulfilling.
        </p>
      </div>
    </section>
  );
};

export default About;
