
import {
  ShoppingCartIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative w-full min-h-[80vh] bg-white overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16 md:mt-25"
    >
      {/* Keyframe animation for shimmer wave */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes heroWave {
              0%, 100% { transform: translateX(0) translateY(0); }
              50% { transform: translateX(-30px) translateY(-10px); }
            }
            .hero-wave-animate {
              animation: heroWave 8s ease-in-out infinite;
            }
          `,
        }}
      />

      {/* Subtle decorative circles - light navy */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-main-900/30 rounded-full blur-3xl" />
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-main-800/20 rounded-full blur-3xl" />

      {/* Wave from bottom to top - layered for depth */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        {/* Deepest wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[38vh] min-h-[240px]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveDeep" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#012a4a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#012a4a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveDeep)"
            d="M0,320 C240,200 480,440 720,380 C960,320 1200,180 1440,280 L1440,600 L0,600 Z"
          />
        </svg>

        {/* Mid wave - navy */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[32vh] min-h-[200px]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#013a63" />
              <stop offset="100%" stopColor="#013a63" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveMid)"
            d="M0,400 C180,280 420,500 720,440 C1020,380 1260,260 1440,360 L1440,600 L0,600 Z"
          />
        </svg>

        {/* Front wave - lighter navy */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[25vh] min-h-[160px]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveFront" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#01497c" />
              <stop offset="100%" stopColor="#014f86" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveFront)"
            d="M0,460 C200,360 480,540 720,500 C960,460 1200,340 1440,440 L1440,600 L0,600 Z"
          />
        </svg>

        {/* Animated shimmer wave */}
        <svg
          className="hero-wave-animate absolute bottom-0 left-0 w-full h-[22vh] min-h-[140px]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2a6f97" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#61a5c2" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2a6f97" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveShimmer)"
            d="M0,500 C240,420 480,560 720,520 C960,480 1200,400 1440,480 L1440,600 L0,600 Z"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pb-32 sm:pb-40">
        {/* Cool "Velvet Shop" headline */}
        <h1 className="mb-6 flex flex-col items-center">
          <span
            dir="ltr"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-main-100 via-main-300 to-main-600 leading-none"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Velvet
          </span>
          <span
            dir="ltr"
            className="mt-2 flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.4em] sm:tracking-[0.5em] text-main-100/60 uppercase"
          >
            <span className="hidden sm:block h-px w-12 bg-main-100/30" />
            Shop
            <span className="hidden sm:block h-px w-12 bg-main-100/30" />
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-main-500 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          فروشگاه ولیوت با منتخبی از بهترین و خاص‌ترین محصولات، تجربه‌ای متفاوت از
          خرید آنلاین را برای شما رقم می‌زند. کیفیت، اصالت و ظرافت — همه در یک جا.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-l from-main-100 to-main-300 text-white font-bold rounded-2xl shadow-lg shadow-main-100/20 hover:shadow-main-100/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <ShoppingCartIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              مشاهده محصولات
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-main-200 to-main-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group w-full sm:w-auto px-8 py-4 bg-main-100/5 backdrop-blur-sm border border-main-100/15 text-main-100 font-bold rounded-2xl hover:bg-main-100/10 hover:border-main-100/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer">
            <span className="flex items-center justify-center gap-2">
              <InformationCircleIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              درباره ما
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}