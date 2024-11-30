import Layout from './layout/Layout';
import ConciergeTypes from './views/ConciergeTypes';
import About from './views/About';
import Hero from './views/Hero';
import Services from './views/Services';
import Events from './views/Events';
import EnquiryForm from './views/EnquiryForm';

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <ConciergeTypes />
      <Services />
      <Events />
      <EnquiryForm />
    </Layout>
  );
};

export default App;
