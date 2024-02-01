
import './App.css';
import About from './component/about/About';
import Home from './component/home/Home';
import Portofolio from './component/portofolio/Portofolio';
import Resume from './component/resume/Resume';
import Services from './component/services/Services';
import Sidebar from './component/sidebar/Sidebar';
import Bolg from './component/blog/Bolg';
import Contact from './component/contact/Contact';
import Pricing from './component/pricing/Pricing';
import Test from './component/testimonial/Test';


function App() {
  return (
    <>
    
    <Sidebar/>

    <main className="main">
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portofolio/>
      <Pricing/>
      <Test/>
      <Bolg/>
      <Contact/>
    </main>

    </>
  );
}

export default App;
