import { useMemo } from 'react';

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Social Games', href: '#/social-games' },
  { label: 'Contact', href: '#/contact' },
  { label: 'Terms', href: '#/terms' },
  { label: 'Privacy', href: '#/privacy' },
];

export default function Header() {
  const morphStyle = useMemo(() => {
    return {
      animation: 'morph 12s ease-in-out infinite',
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#/" className="flex items-center gap-2">
            <div
              className="h-10 w-10 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg"
              style={morphStyle}
            />
            <div className="leading-tight">
              <span className="block text-xs tracking-wide text-slate-500">Welcome to</span>
              <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
                JackpotReelSpin
              </h1>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-slate-700 hover:text-violet-600 transition-colors font-medium"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <a href="#/contact" className="inline-flex items-center px-3 py-2 rounded-md bg-slate-900 text-white text-sm font-semibold">
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes morph {
          0% { border-radius: 24% 76% 63% 37% / 37% 35% 65% 63%; }
          25% { border-radius: 43% 57% 33% 67% / 53% 45% 55% 47%; }
          50% { border-radius: 65% 35% 57% 43% / 48% 66% 34% 52%; }
          75% { border-radius: 38% 62% 70% 30% / 40% 60% 40% 60%; }
          100% { border-radius: 24% 76% 63% 37% / 37% 35% 65% 63%; }
        }
      `}</style>
    </header>
  );
}
