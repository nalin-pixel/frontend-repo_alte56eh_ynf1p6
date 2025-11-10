import { useEffect, useMemo, useState } from 'react';

function TimeLoopBadge() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 60), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
      <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      Time-loop: {60 - tick}s reset
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">About JackpotReelSpin</h3>
            <p className="mt-3 text-slate-700">
              We craft social games experiences that focus on creativity, exploration, and playful interaction. Our shapeshifter layout morphs as you navigate, while a subtle time-loop refresh introduces new micro-variations. As you engage, the site reveals unlockable modules, leveling up your home base with an XP bar that grows across sessions.
            </p>
            <p className="mt-3 text-slate-700">
              The interface embraces a self-repairing nano motif, celebrating resilient design. When big milestones occur, a visual DNA-style mutation animates the UI. You can also browse a traveling caravan theme, where featured social games are showcased like visiting traders.
            </p>
            <div className="mt-4"><TimeLoopBadge /></div>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <ul className="space-y-3 text-slate-700">
              <li>• Morphing layout (shapeshifter) for dynamic feel</li>
              <li>• Subtle 60-second refresh that keeps things lively</li>
              <li>• Base builder modules unlocked through activity</li>
              <li>• XP progress reveals hidden content over time</li>
              <li>• Nano self-repair motifs and mutation celebratory effects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function XPBar({ value }) {
  return (
    <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
      <div className="h-full bg-gradient-to-r from-amber-400 via-fuchsia-500 to-violet-600" style={{ width: `${value}%` }} />
    </div>
  );
}

function Dashboard() {
  const [xp, setXp] = useState(24);
  useEffect(() => {
    const id = setInterval(() => setXp((v) => (v >= 96 ? 12 : v + 4)), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="dashboard" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-slate-900">Player Dashboard</h3>
          <TimeLoopBadge />
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-600">XP Progress</div>
            <div className="mt-2"><XPBar value={xp} /></div>
            <div className="mt-2 text-xs text-slate-500">{xp}% towards next unlock</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-600">Unlocked Modules</div>
            <ul className="mt-2 text-slate-700 text-sm space-y-1">
              <li>• Base Builder layout presets</li>
              <li>• Caravan showcase for featured social games</li>
              <li>• Nano-repair visual theme</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-600">Milestones</div>
            <ul className="mt-2 text-slate-700 text-sm space-y-1">
              <li>• First session complete</li>
              <li>• 3 social games explored</li>
              <li>• XP level up animation triggered</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function GameCard({ title, onPlay, img }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video bg-slate-100" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      <div className="p-4">
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="mt-1 text-sm text-slate-600">A quick-to-learn social games mini experience.</p>
        <button onClick={onPlay} className="mt-3 inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">
          Play now
        </button>
      </div>
    </div>
  );
}

function Modal({ open, onClose, src }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-4xl bg-white rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="font-semibold">Social game preview</div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900">Close</button>
        </div>
        <div className="aspect-video">
          <iframe title="social-game" src={src} className="w-full h-full" allow="autoplay" />
        </div>
      </div>
    </div>
  );
}

function Games() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ');
  const cards = useMemo(() => [
    { title: 'Neon Reels Social Game', img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop', src: 'https://www.youtube.com/embed/ysz5S6PUM-U' },
    { title: 'Treasure Grid Social Game', img: 'https://images.unsplash.com/photo-1520975922215-caf8c3366fb0?q=80&w=1600&auto=format&fit=crop', src: 'https://www.youtube.com/embed/oHg5SJYRHA0' },
    { title: 'Quantum Spin Social Game', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop', src: 'https://www.youtube.com/embed/ScMzIvxBSi4' },
    { title: 'Punk Street Social Game', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop', src: 'https://www.youtube.com/embed/ysz5S6PUM-U' },
    { title: 'Caravan Trader Social Game', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop', src: 'https://www.youtube.com/embed/oHg5SJYRHA0' },
    { title: 'Nano Repair Social Game', img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop', src: 'https://www.youtube.com/embed/ScMzIvxBSi4' },
  ], []);

  return (
    <section id="social-games" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Featured Social Games</h3>
            <p className="mt-2 text-slate-700">Browse six quick social games. Click play now to open a modal with an embedded preview.</p>
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <GameCard key={c.title} title={c.title} img={c.img} onPlay={() => { setSrc(c.src); setOpen(true); }} />
          ))}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} src={src} />
    </section>
  );
}

function Testimonial() {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h3 className="text-2xl font-bold text-slate-900">Community Voices</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Avery', text: 'The social games flow is delightful, and the UI morphs keep it fresh.' },
            { name: 'Jordan', text: 'Love the base builder modules and the progress bar reveals.' },
            { name: 'Kai', text: 'The self-repairing nano vibe is unique and playful.' },
          ].map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-slate-900">{t.name}</div>
              <p className="mt-2 text-slate-700 text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: 'What are social games here?', a: 'Short, interactive social games you can try instantly in your browser.' },
    { q: 'Do I need an account?', a: 'You can browse without one. Progress features for social games may use your device storage.' },
    { q: 'Any purchases or payouts?', a: 'No. This site is for social games entertainment only, with no purchases or rewards.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h3 className="text-2xl font-bold text-slate-900">FAQ</h3>
        <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {items.map((it, i) => (
            <details key={it.q} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} className="group">
              <summary className="list-none cursor-pointer px-6 py-4 flex items-center justify-between">
                <span className="font-medium text-slate-900">{it.q}</span>
                <span className="text-slate-500">{open === i ? '−' : '+'}</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section id="disclaimer" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h3 className="text-2xl font-bold text-slate-900">Disclaimer</h3>
        <div className="mt-4 text-slate-700 space-y-3">
          <p>JackpotReelSpin hosts social games designed purely for interactive fun and community engagement. This is not a platform for purchases, rewards, or payouts. Participation in social games does not yield prizes of any kind.</p>
          <p>All content is intended for audiences seeking creative, casual social games. If you are under applicable age for online experiences in your region, please visit with guidance from a guardian. See Terms & Conditions and Privacy Policy for details on data handling and fair-use guidelines.</p>
          <p>By using this site, you accept that social games are provided as-is, without any warranties. We may adjust features, reset progress in the time-loop cycle, or introduce morphing UI updates for quality and accessibility.</p>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <main>
      <About />
      <Dashboard />
      <Games />
      <Testimonial />
      <FAQ />
      <Disclaimer />
    </main>
  );
}

export function ContactPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Contact Us</h2>
        <p className="mt-2 text-slate-700">We’d love to hear your feedback about our social games and evolving layout.</p>
        <form className="mt-8 grid gap-4">
          <input type="text" placeholder="Your name" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" required />
          <input type="email" placeholder="Email address" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" required />
          <textarea placeholder="Message" rows={5} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" />
          <button className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">Send message</button>
        </form>
      </div>
    </main>
  );
}

export function TermsPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Terms & Conditions</h2>
        <p className="text-slate-700">These terms govern access to social games and related features offered by JackpotReelSpin. By accessing the site, you agree to these conditions.</p>
        <ol className="list-decimal pl-5 space-y-2 text-slate-700">
          <li>Purpose: Social games are provided solely for interactive fun with no purchases or rewards.</li>
          <li>Eligibility: Access may be limited by regional age guidelines. Use with guardian guidance where required.</li>
          <li>Content: We may modify, rotate, or reset experiences as part of the time-loop and shapeshifter design.</li>
          <li>Data: Minimal data is processed. See the Privacy Policy for details.</li>
          <li>Prohibited Use: Misuse, scraping, or attempts to circumvent UI protections are not allowed.</li>
        </ol>
      </div>
    </main>
  );
}

export function PrivacyPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h2>
        <p className="text-slate-700">We respect your privacy. This policy describes how we handle information for social games usage.</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Data Collection: We may store progress indicators for social games locally on your device.</li>
          <li>Analytics: We may use anonymized analytics to improve social games and site performance.</li>
          <li>Cookies/Storage: Local storage may support the XP bar and unlockable modules.</li>
          <li>Contact: Use the contact page for questions or data requests.</li>
        </ul>
      </div>
    </main>
  );
}
