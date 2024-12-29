import React from 'react';
import Hero from '../../components/HeroSection';
import LatestCollection from '../../components/LatestCollection';
import { features } from '../../assets/assets';
import Highlights from '../../components/Highlights';
import Footer from '../../components/Footer';

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
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center justify-around sm:flex-row gap-8">
          {features?.map((item) => (
            <Highlights key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className="py-8 bg-slate-50">
        <div className="flex flex-col gap-6 items-center max-w-lg mx-auto text-center">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-xl text-gray-800">
              Subscribe Now & Get <span className="text-yellow-400">20% Off</span>
            </h3>
            <span className="mt-2 text-sm text-gray-600 leading-relaxed">
              Stay updated with our latest news, offers, and discounts. Sign up now!
            </span>
          </div>
          <div className="flex w-full">
            <input
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button
              className="bg-yellow-400 px-6 py-3 text-white text-sm font-medium rounded-r-md hover:bg-yellow-500 transition-all duration-300"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className='bg-slate-50'>
        <Footer />
      </section>

      <section>
        <div>
          <hr />
          <p className="py-5 text-sm text-center text-gray-600 leading-relaxed">Copyright 2024@ cloudpl - All Right Reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
