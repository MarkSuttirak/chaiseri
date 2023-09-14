import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import Service from './pages/service';
import NewsMedia from './pages/news-media';
import Runflat50km from './pages/Runflat50km';
import FirstWinAfv from './pages/FirstWinAfv';
import FirstWinAtv from './pages/FirstWinAtv';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/news-media" element={<NewsMedia />} />
        <Route path="/runflat-50-km" element={<Runflat50km />} />
        <Route path="/first-win-afv" element={<FirstWinAfv />} />
        <Route path="/first-win-atv" element={<FirstWinAtv />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
