import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { BookingProvider } from './context/BookingContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Secondary pages are code-split and loaded on demand (Suspense lives in Layout).
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Destinations = lazy(() => import('./pages/Destinations'));
const DestinationDetails = lazy(() => import('./pages/DestinationDetails'));
const Fleet = lazy(() => import('./pages/Fleet'));
const Faq = lazy(() => import('./pages/Faq'));
const RoutesPage = lazy(() => import('./pages/RoutesPage'));
const RouteDetails = lazy(() => import('./pages/RouteDetails'));
const ImageCredits = lazy(() => import('./pages/ImageCredits'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetails />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/help" element={<Faq />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/routes/:slug" element={<RouteDetails />} />
            <Route path="/image-credits" element={<ImageCredits />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
