import Layout from './layout/Layout';
import ConciergeTypes from './views/ConciergeTypes';
import About from './views/About';
import Hero from './views/Hero';

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <ConciergeTypes />
    </Layout>
  );
};

export default App;
