import React from 'react';
import './App.css';
import Header from './components/Header';
import TopMenuBar from './components/TopMenuBar';
import Banner from './components/Banner';
import ImageVoucher from './components/ImageVoucher';
import ImagePrice from './components/ImagePrice';
import ImageWithText from './components/ImageWithText';
import SecondaryBanner from './components/SecondaryBanner';
import ProductCard from './components/ProductCard';
import CollectionFirst from './components/CollectionFirst';
import Product from './components/Product';
import Exam from './components/Exam';
import Exam2 from './components/exam2';
import Exam4 from './components/Exam4';
import Exam5 from './components/Exam5';
import ImageLayout from './components/ImageLayout';
import Footer from './components/Footer';
import Product2 from './components/Product';
import Product1 from './components/Product2';
import ProductList2 from './components/ProductCard2';

function App() {
  return (
    <div className="App">
      < Header />
      < TopMenuBar />
      < Banner />
      < ImageVoucher />
      < ImagePrice />
      < ImageWithText />
      < SecondaryBanner />
      < ProductCard />
      < Exam />
      < Product1/>
      < Exam2 />
      < Product2/>
      < Exam4 />
      < Product1/>
      < ProductList2 />
      < Exam5/>
      < ImageLayout/>
      < Footer/>
    </div>
  );
}

export default App;
