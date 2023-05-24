import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';



const App: React.FC = () => {
    const handleSearch = (value: string) => {
        console.log('검색어:', value);
        // 여기에 실제 검색 로직을 구현하면 됩니다.
    };

    return (
      <Router>
        <Header />
        <MenuBar />
          <SearchBar onSearch={handleSearch} />
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
