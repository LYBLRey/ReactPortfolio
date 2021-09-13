import React, { useState } from 'react';
import NavTabs from './pages/NavTabs/NavTab';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer';
import './portfolioContainer.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;  
      case 'Contact':
        return <Contact />;  
      default: 
        return <Home />;
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="profile">
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="site-content">{renderPage()}</div>
      <Footer />
    </div>
  );

  
};
