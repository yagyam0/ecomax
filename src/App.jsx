import React from 'react'
import CustomRoutes from './routes/CustomRoutes';
import Header from './components/Header';

const App = () => {
  
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Header />
      <CustomRoutes />

    </div>
  )
}

export default App;