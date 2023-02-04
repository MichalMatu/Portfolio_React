import Header from './pages/Header';
import HomePages from './pages/HomePages';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

import {useState} from 'react';

function App() {

  const [page, setPage] = useState('HomePages');

  const swichPage = () => {
    switch (page) {
      case 'HomePages':
        return <HomePages />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <HomePages />;
    }
  };


  return (
    <>
      <Header setPage={setPage}/>
      
      {swichPage()}

      <Footer />


    </>
  );
}

export default App;
