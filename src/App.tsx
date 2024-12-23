import Layout from './layout/Layout';
import ConciergeTypes from './views/ConciergeTypes';
import About from './views/About';
import Hero from './views/Hero';
import Services from './views/Services';
import Events from './views/Events';
import EnquiryForm from './views/EnquiryForm';
import ContactModal from './components/ContactModal';

import { useState } from 'react';

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Layout>
      <Hero setIsContactOpen={setIsContactOpen} />
      <About />
      <ConciergeTypes setIsContactOpen={setIsContactOpen} />
      <Services />
      <Events setIsContactOpen={setIsContactOpen} />
      <EnquiryForm />
      <ContactModal
        isContactOpen={isContactOpen}
        setIsContactOpen={setIsContactOpen}
      />
    </Layout>
  );
};

export default App;
