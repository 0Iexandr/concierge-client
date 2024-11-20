import background from '../assets/video/hero-background.mp4';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-main opacity-70 grain-effect" />
      <div className="relative flex flex-col justify-center items-center h-full gap-y-10 container max-w-none">
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl text-center max-w-6xl sm:leading-snug md:leading-snug">
          Experience the epitome and personalized of luxury service with COMPANY
        </h1>
        <p className="font-inter md:text-xl text-center max-w-xl md:leading-normal leading-normal">
          Artfully curating extraordinary experiences for those who recognize
          and appreciate their unparalleled value
        </p>
        <Button text="Submit your request" variant="white" />
      </div>
    </section>
  );
};

export default Hero;
