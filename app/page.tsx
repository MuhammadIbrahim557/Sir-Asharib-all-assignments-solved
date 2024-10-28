import Footer from './pages/Footer';
import GallerySection from './pages/GallerySection';
import HeroSection from './pages/HeroSection';
import Navbar from './pages/Navbar';
import Newsletter from './pages/Newsletter';
import ProductsSection from './pages/ProductsSection';


export default function HoneyShop() {
  return (
    <>
       <Navbar/>
       <HeroSection/>
       <Newsletter/>
       <ProductsSection/>
       <GallerySection/>
       <Footer/>
    </>
  );
}

