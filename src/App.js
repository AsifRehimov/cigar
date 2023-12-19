import './App.css';
import BestSeller from './bestSeller/BestSeller';
import Brands from './brands/Brands';
import CarouselComponent from './carousel/CarouselComponent';
import Footer from './footer/Footer';
import Header from './header/Header';
import NewProducts from './newProducts/NewProducts';
import OurStory from './ourStory/OurStory';
import Premium from './premium/Premium';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselComponent/>
      <BestSeller/>
      <NewProducts/>
      <Premium/>
      <Brands/>
      <OurStory/>
      <Footer/>
    </div>
  );
}

export default App;
