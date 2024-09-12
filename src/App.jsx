import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CTA from './components/CTA'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/home_page/HomePage'
import { Suspense, useState } from 'react';
import PrayerPage from './pages/prayer_page/PrayerPage';
import AboutPage from './pages/about/AboutPage';
import Give from './pages/give/Give';
import Youth from './pages/youth/Youth';
import Modal from './components/Modal';
import Loading from './components/loading/Loading'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [modal, setModal] = useState(false);
  const [showPage, setShowPage] = useState(true)

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <ScrollToTop />
        {showPage && (
          <>
            <CTA />
            <Header />
            <Routes>
              <Route path="/*" element={<HomePage />} />
              <Route path="/prayer" element={<PrayerPage />} />
              <Route path="/who_we_are" element={
                <AboutPage
                  openModal={() => {
                    setModal(true);
                    setShowPage(false);
                  }} />} />
              <Route path="/give" element={<Give />} />
              <Route path="/youth_ministry" element={<Youth />} />
            </Routes>
            <Footer
              openModal={() => {
                setModal(true);
                setShowPage(false);
              }} />
          </>
        )}
        {modal && (
          <Modal showModal={() => {
            setModal(false);
            setShowPage(true);
          }}
          />
        )}

      </Router>
    </Suspense>
  )
}

export default App
