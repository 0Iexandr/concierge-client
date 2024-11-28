import { TypeAnimation } from 'react-type-animation';
import Logo from '../components/Logo';
import car from '../assets/img/rolls-royce.jpg';
import hotel from '../assets/img/hotel.jpg';
import boat from '../assets/img/boat.jpg';

const About = () => {
  return (
    <section className="grain-effect container max-w-none section__padding">
      <div className="flex justify-between mb-16">
        <h2 className="section__title">ABOUT</h2>
        <span className="section__title">01</span>
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <h3 className="section__subtitle max-w-5xl">
          at the APEX of LIFESTYLE MANAGEMENT, COMPANY EPITOMISES UNPARALLELED
          SOPHISTICATION and REFINEMENT
        </h3>
        <p className="section__description max-w-2xl">
          With a sweeping array of services that redefine the very essence of
          luxury concierge, we embark on a journey that transcends the ordinary,
          enriching the lives of our esteemed clients in ways beyond
          imagination.
        </p>
        <Logo className="h-32" />
        <div className="flex gap-3 flex-wrap justify-center">
          <img
            src={boat}
            alt="yacht"
            className="rounded-md w-80 h-80 object-cover saturate-50"
          />
          <img
            src={hotel}
            alt="yacht"
            className="rounded-md w-80 h-80 object-cover saturate-50"
          />
          <img
            src={car}
            alt="yacht"
            className="rounded-md w-80 h-80 object-cover saturate-50"
          />
        </div>
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
          Through a seamless connection with a dedicated lifestyle manager, our
          world unfolds with unmatched responsiveness and access, crafting
          experiences that are not just transformative but also exquisitely
          memorable and profoundly meaningful.
        </p>
      </div>
    </section>
  );
};

export default About;
