import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-slate-700 uppercase">Shapeshifter • Time-Loop • Nanobot • DNA Mutation</p>
            <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
              JackpotReelSpin — Social games for curious minds
            </h2>
            <p className="mt-4 text-slate-700 text-lg">
              Explore a living interface that subtly morphs every 60 seconds, self-repairs with nanobot flair, and reveals modules as you progress.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#/home#social-games" className="inline-flex items-center px-5 py-3 rounded-md bg-slate-900 text-white font-semibold shadow hover:bg-slate-800">
                Explore social games
              </a>
              <a href="#/contact" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-slate-900 font-semibold border border-slate-300 hover:border-slate-900">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
