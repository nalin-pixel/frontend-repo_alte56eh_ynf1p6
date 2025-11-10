const footerLinks = [
  { label: 'Home', href: '#/' },
  { label: 'Contact', href: '#/contact' },
  { label: 'Terms & Conditions', href: '#/terms' },
  { label: 'Privacy Policy', href: '#/privacy' },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">JackpotReelSpin</div>
            <p className="mt-3 text-sm text-slate-600">
              A hub for interactive social games experiences. Crafted for playfulness, discovery, and community-driven fun.
            </p>
          </div>
          <nav className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-700 hover:text-violet-600 font-medium">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} JackpotReelSpin. All rights reserved.
          </p>
          <p>
            Disclaimer: This site hosts social games solely for entertainment and learning. No purchases, prizes, or monetary rewards. See terms for full details.
          </p>
        </div>
      </div>
    </footer>
  );
}
