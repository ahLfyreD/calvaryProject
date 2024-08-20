import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CTA from './components/CTA'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/home_page/HomePage'
import { Suspense } from 'react';
import PrayerPage from './pages/prayer_page/PrayerPage';
import AboutPage from './pages/about/AboutPage';
import Give from './pages/give/Give';

function App() {

  return (
    <Suspense>
      <Router>
        <CTA />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prayer" element={<PrayerPage />} />
          <Route path="/who_we_are" element={<AboutPage />} />
          <Route path="/give" element={<Give />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  )
}

export default App
