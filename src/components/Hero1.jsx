import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const HERO_NAME = 'Taha Nazir';
const HERO_TAGLINE = 'Video editor & digital content storyteller';

export function BackgroundVideo({ flipped = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: flipped
            ? 'linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.35))'
            : 'linear-gradient(180deg, rgba(5,8,12,0.32), rgba(0,0,0,0.45))',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_60%)]" />
    </div>
  );
}

const STRIP = [
  { videoSrc: '/youtube-cow-cash.mp4', label: 'Social ads' },
  { videoSrc: '/luxary-brand.mp4', label: 'Cinematic grade' },
  { videoSrc: '/wedding-edit.mp4', label: 'Wedding films' },
  { videoSrc: '/fatima-faisal.mp4', label: 'Brand reels' },
  { videoSrc: '/badass-edit.mov', label: 'Commercials' },
];

const MARQUEE = [
  'Premiere Pro',
  'DaVinci Resolve',
  'After Effects',
  'Color Science',
  'Sound Design',
  'Motion Graphics',
];

function Frame({ item, index, progress }) {
  const center = 0.46 + index * 0.1;
  const scale = useTransform(
    progress,
    [center - 0.14, center, center + 0.14],
    [0.86, 1, 0.86],
  );
  const rotate = useTransform(
    progress,
    [center - 0.14, center, center + 0.14],
    [5, 0, -5],
  );
  const opacity = useTransform(
    progress,
    [center - 0.2, center, center + 0.2],
    [0.55, 1, 0.55],
  );
  const y = useTransform(
    progress,
    [center - 0.14, center, center + 0.14],
    [18, 0, -18],
  );

  return (
    <motion.div
      style={{ scale, rotate, opacity, y }}
      className="relative h-[46vh] w-[62vw] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] will-change-transform md:w-[34vw]"
    >
      <video
        src={item.videoSrc}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
  });

  const headOpacity = useTransform(p, [0, 0.06, 0.3, 0.38], [1, 1, 1, 0]);
  const headY = useTransform(p, [0, 0.38], ['0vh', '-18vh']);
  const headScale = useTransform(p, [0, 0.38], [1, 0.92]);

  const stripY = useTransform(p, [0.22, 1], ['16%', '-28%']);
  const stripOpacity = useTransform(p, [0.18, 0.34], [0, 1]);

  const glowY = useTransform(p, [0, 1], ['0%', '-30%']);
  const gridY = useTransform(p, [0, 1], ['0%', '22%']);
  const ghostX = useTransform(p, [0, 1], ['8%', '-24%']);
  const ghostY = useTransform(p, [0, 1], ['-6%', '8%']);
  const ghostOpacity = useTransform(p, [0, 0.24, 0.7, 1], [0.12, 0.22, 0.18, 0.08]);
  const ghostRotate = useTransform(p, [0, 1], [0, -10]);

  return (
    <div ref={ref} id="home" className="relative h-[240vh] md:h-[320vh] bg-background">
      <section className="sticky top-0 flex h-screen flex-col overflow-hidden bg-[#05070a]">
        <motion.div
          style={{ y: glowY }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,136,60,0.32),transparent_28%),linear-gradient(90deg,#0b0f14_0%,#0b0f14_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,145,71,0.08),transparent_38%)]" />
        </motion.div>

        <motion.div
          style={{ y: gridY }}
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: headOpacity, y: headY, scale: headScale }}
          className="relative z-20 flex flex-1 items-center justify-center px-6 text-center will-change-transform"
        >
          <div className="relative w-full max-w-[1500px]">
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[18vw] font-black leading-[0.76] tracking-[-0.09em] text-white/90 md:text-[14vw]">
              TAHA NAZIR
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 26 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="relative z-10 mx-auto flex items-center justify-center"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute left-1/2 top-1/2 h-[30vw] w-[30vw] max-h-[500px] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,144,81,0.18),transparent_60%)] blur-3xl" />

                <div className="relative z-20 flex h-[42vw] max-h-[540px] w-[42vw] max-w-[540px] items-center justify-center rounded-full border border-white/10 bg-[#f4f0ec] p-8 shadow-[0_35px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                  <img
                    src="/talha-profile.png"
                    alt="Taha Nazir portrait"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>

                <div className="pointer-events-none absolute -left-12 top-[20%] flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4b78d7] text-2xl font-black text-white shadow-xl shadow-blue-500/20 md:-left-20 md:h-20 md:w-20">
                  Ps
                </div>

                <div className="pointer-events-none absolute left-[8%] bottom-[18%] flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2e4d9b] text-2xl font-black text-white shadow-xl shadow-blue-700/20 md:h-20 md:w-20">
                  Ae
                </div>

                <div className="pointer-events-none absolute right-[8%] top-[12%] flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1b2d4d] text-2xl font-black text-white shadow-xl shadow-slate-900/20 md:right-[4%] md:h-20 md:w-20">
                  Pr
                </div>

                <div className="pointer-events-none absolute right-[-4%] bottom-[22%] flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0d1628] text-2xl font-black text-white shadow-xl shadow-slate-900/20 md:h-20 md:w-20">
                  Lr
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: stripOpacity }}
          className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center md:flex"
        >
          <motion.div
            style={{ y: stripY }}
            className="flex flex-col items-center gap-6"
          >
            {STRIP.map((item, i) => (
              <Frame key={item.label} item={item} index={i} progress={p} />
            ))}
          </motion.div>
        </motion.div>

        <div className="relative z-20 hidden md:block overflow-hidden border-y border-white/10 py-3">
          <div className="flex w-max animate-[hero-marquee_26s_linear_infinite] gap-10">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span
                key={m + i}
                className="flex items-center gap-3 whitespace-nowrap text-[0.7rem] uppercase tracking-[0.2em] text-white/70"
              >
                {m}
                <span className="h-1 w-1 rounded-full bg-[oklch(0.78_0.16_60)]" />
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes hero-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </div>
  );
}
