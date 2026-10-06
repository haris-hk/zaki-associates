import PageEffects from './components/PageEffects';
import { createBrowserRouter, Outlet, Link } from 'react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TeamProfile from './pages/TeamProfile';

function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <PageEffects />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'team/:id', Component: TeamProfile },
      { path: '*', element: <section className="px-6 py-40 text-center"><h1 className="font-display text-5xl mb-6">Page not found</h1><p className="mb-8">The page may have moved. Let’s get you back on track.</p><Link to="/" className="underline underline-offset-4">Return home →</Link></section> },
    ],
  },
]);
