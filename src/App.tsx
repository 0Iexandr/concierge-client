import { Suspense, lazy, useState } from 'react';
import Layout from './layout/Layout';
import ContactModal from './components/ContactModal';
import Loader from './components/Loader';

const Hero = lazy(() => import('./views/Hero'));
const About = lazy(() => import('./views/About'));
const ConciergeTypes = lazy(() => import('./views/ConciergeTypes'));
// const Services = lazy(() => import('./views/Services'));
const Events = lazy(() => import('./views/Events'));
const EnquiryForm = lazy(() => import('./views/EnquiryForm'));
const Partners = lazy(() => import('./views/Partners'));

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Hero
          setIsContactOpen={setIsContactOpen}
          setSelectedService={setSelectedService}
        />
        {/* <Services
          setSelectedService={setSelectedService}
          setIsContactOpen={setIsContactOpen}
        /> */}
        <About />
        <Partners />
        <ConciergeTypes setIsContactOpen={setIsContactOpen} />
        <Events setIsContactOpen={setIsContactOpen} />
        <EnquiryForm />
        <ContactModal
          isContactOpen={isContactOpen}
          setIsContactOpen={setIsContactOpen}
          setSelectedService={setSelectedService}
          selectedService={selectedService}
        />
      </Layout>
    </Suspense>
  );
};

export default App;
