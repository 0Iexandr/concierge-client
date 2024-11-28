import Layout from './layout/Layout';
import ConciergeTypes from './views/ConciergeTypes';
import About from './views/About';
import Hero from './views/Hero';
import Services from './views/Services';

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <ConciergeTypes />
      <Services />
    </Layout>
  );
};

export default App;
