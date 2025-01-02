import React from 'react';
import Hero from '../../components/HeroSection';
import LatestCollection from '../../components/LatestCollection';
import { features } from '../../assets/assets';
import Highlights from '../../components/Highlights';
import Subscribe from '../../components/Subscribe';

const Home = () => {
  return (
    <div className="bg-slate-50">
      <Hero />
      {/* Latest Collection Section */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-6 lg:px-12">
          <LatestCollection
            primaryText="Latest"
            secondaryText="Collection"
            productsToShow={10}
            filterBy={(product) => !product.bestseller}
          />
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-6 lg:px-12">
          <LatestCollection
            primaryText="Best"
            secondaryText="Sellers"
            productsToShow={5}
            filterBy={(product) => product.bestseller}
          />
        </div>
      </section>

      {/* Features Section */}
      <Subscribe />
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center justify-around sm:flex-row gap-8">
          {features?.map((item) => (
            <Highlights key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
