import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { HomePage, ContactPage, TermsPage, PrivacyPage } from './components/Pages';

function useHashRoute() {
  const getRoute = () => {
    const h = window.location.hash || '#/';
    const clean = h.replace('#', '');
    return clean;
  };
  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

export default function App() {
  const route = useHashRoute();
  const page = useMemo(() => {
    if (route.startsWith('/contact')) return 'contact';
    if (route.startsWith('/terms')) return 'terms';
    if (route.startsWith('/privacy')) return 'privacy';
    return 'home';
  }, [route]);

  useEffect(() => {
    const titles = {
      home: 'JackpotReelSpin — Social games hub',
      contact: 'Contact — JackpotReelSpin',
      terms: 'Terms & Conditions — JackpotReelSpin',
      privacy: 'Privacy Policy — JackpotReelSpin',
    };
    document.title = titles[page];
  }, [page]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      {page === 'home' && (
        <>
          <Hero />
          <HomePage />
        </>
      )}
      {page === 'contact' && (
        <main>
          <section className="py-10 border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <h1 className="text-4xl font-extrabold">Contact JackpotReelSpin</h1>
              <p className="mt-2 text-slate-700">Reach out with ideas about our social games and evolving UI.</p>
            </div>
          </section>
          <ContactPage />
        </main>
      )}
      {page === 'terms' && (
        <main>
          <section className="py-10 border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <h1 className="text-4xl font-extrabold">Terms & Conditions</h1>
              <p className="mt-2 text-slate-700">Please review how our social games and features are provided.</p>
            </div>
          </section>
          <TermsPage />
        </main>
      )}
      {page === 'privacy' && (
        <main>
          <section className="py-10 border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
              <p className="mt-2 text-slate-700">Understand how we treat information for social games usage.</p>
            </div>
          </section>
          <PrivacyPage />
        </main>
      )}
      <Footer />
    </div>
  );
}
