import React from 'react'
import CustomRoutes from './routes/CustomRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/Search/SearchBar';

const App = () => {
  
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Header />
      <SearchBar />
      <CustomRoutes />
      <Footer />
    </div>
  )
}

export default App;