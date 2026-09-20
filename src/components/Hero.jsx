import { useEffect, useRef } from 'react';

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

const CONFIG = {
  name: 'Taha',
  nameOutline: 'Nazir',
  logo: 'TN.',
  availability: 'Available for select projects • 2026',
  email: 'hello@tahanazir.com',
  taglineTitle: 'Video editor & digital content storyteller',
  taglineText: 'Turning raw footage into stories people remember.',
  image: '/talha-profile.png',
  imageAlt: 'Taha Nazir, video editor and digital storyteller',
  badgeLabel: 'Crafting',
  badgeValue: 'Visual rhythm',
  reelLabel: 'Showreel',
  reelValue: '01:24',
  disciplines: ['Film Editing', 'Color Grading', 'Motion Design', 'Storytelling'],
};

const Hero = () => {
  const titleRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const title = titleRef.current;
    const portrait = portraitRef.current;

    if (!title || !portrait || reduceMotion) {
      return;
    }

    let currentY = 0;
    let targetY = 0;
    let ticking = false;

    const update = () => {
      currentY += (targetY - currentY) * 0.09;
      if (Math.abs(targetY - currentY) < 0.1) {
        currentY = targetY;
        ticking = false;
      } else {
        requestAnimationFrame(update);
      }

      const p = Math.min(currentY / window.innerHeight, 1);
      title.style.transform = `translateY(${ -70 * p }px)`;
      title.style.opacity = String(Math.max(1 - p * 1.25, 0));
      portrait.style.transform = `translateY(${ 100 * p }px)`;
    };

    const onScroll = () => {
      targetY = window.scrollY || window.pageYOffset;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const marqueeItems = [...CONFIG.disciplines, ...CONFIG.disciplines]
    .map((d) => `<span>${d}</span>`)
    .join('');

  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      padding: '0 20px',
      background: '#26211a',
      color: '#f6f1e6',
      fontFamily: 'Manrope, sans-serif',
      boxSizing: 'border-box',
    }}>
      <style>{`
        .hero-section *,.hero-section *::before,.hero-section *::after{box-sizing:border-box;margin:0;padding:0}
        .hero-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(to right,rgba(246,241,230,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(246,241,230,0.05) 1px,transparent 1px),radial-gradient(circle at 50% 42%,rgba(221,156,79,0.19),transparent 35%);background-size:72px 72px,72px 72px,100% 100%;-webkit-mask-image:linear-gradient(to bottom,black 72%,transparent 100%);mask-image:linear-gradient(to bottom,black 72%,transparent 100%)}
        .hero-header{position:relative;z-index:30;max-width:1500px;margin:0 auto;height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(246,241,230,0.16)}
        .hero-logo{font-family:"Archivo",sans-serif;font-size:18px;font-weight:800;text-transform:uppercase;color:#f6f1e6;text-decoration:none}
        .hero-logo span{color:#dd9c4f}
        .hero-availability{display:none;font-size:12px;font-weight:600;text-transform:uppercase;color:#b8ac97}
        @media (min-width:640px){.hero-availability{display:block}}
        .hero-cta{color:#f6f1e6;text-decoration:none;font-size:12px;font-weight:700;text-transform:uppercase;border-bottom:1px solid #dd9c4f;padding-bottom:4px;transition:color .25s ease}
        .hero-cta:hover{color:#dd9c4f}
        .hero-inner{position:relative;max-width:1500px;margin:0 auto;min-height:calc(100vh - 80px);display:flex;align-items:center;justify-content:center;padding:64px 0}
        .hero-title{position:absolute;left:0;right:0;top:0;z-index:0;display:flex;flex-direction:column;align-items:center;text-align:center;pointer-events:none;will-change:transform,opacity}
        .hero-title h1{font-family:"Archivo",sans-serif;font-size:clamp(4.6rem,14vw,13rem);font-weight:900;text-transform:uppercase;line-height:0.72;letter-spacing:0}
        .hero-title .outline{display:block;color:transparent;-webkit-text-stroke:1px rgba(246,241,230,0.48)}
        .hero-portrait{position:relative;z-index:10;margin-top:48px;height:58vh;min-height:420px;width:min(76vw,520px);will-change:transform}
        .hero-halo{position:absolute;left:8%;right:8%;top:10%;bottom:4%;border-radius:50%;background:radial-gradient(circle,rgba(221,156,79,0.28),transparent 68%);filter:blur(28px)}
        .hero-portrait img{position:relative;width:100%;height:100%;object-fit:contain;object-position:bottom;filter:drop-shadow(0 30px 34px rgba(0,0,0,0.44))}
        .hero-badge{position:absolute;border:1px solid rgba(246,241,230,0.16);background:rgba(51,44,35,0.85);backdrop-filter:blur(10px);padding:12px 16px;box-shadow:0 18px 50px rgba(0,0,0,0.28)}
        .hero-badge-label{display:block;font-size:10px;font-weight:700;text-transform:uppercase;color:#b8ac97}
        .hero-badge-value{display:block;font-family:"Archivo",sans-serif;font-size:18px;font-weight:700;color:#f6f1e6}
        .hero-badge-craft{left:-16px;top:24%;animation:hero-float-a 4.8s ease-in-out infinite}
        .hero-badge-reel{right:-12px;bottom:20%;display:flex;align-items:center;gap:12px;animation:hero-float-b 5.5s ease-in-out infinite}
        @media (min-width:768px){.hero-badge-craft{left:-96px}.hero-badge-reel{right:-96px}}
        .hero-play{width:32px;height:32px;border-radius:50%;background:#dd9c4f;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .hero-play::after{content:"";border-left:8px solid #26211a;border-top:5px solid transparent;border-bottom:5px solid transparent;margin-left:2px}
        @keyframes hero-float-a{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-10px) rotate(-1deg)}}
        @keyframes hero-float-b{0%,100%{transform:translateY(0) rotate(3deg)}50%{transform:translateY(12px) rotate(1deg)}}
        .hero-tagline{position:absolute;bottom:28px;left:0;z-index:20;max-width:224px;display:none}
        @media (min-width:768px){.hero-tagline{display:block}.hero-tagline h2{font-family:"Archivo",sans-serif;font-size:20px;font-weight:600;line-height:1.25;color:#f6f1e6}.hero-tagline p{margin-top:12px;font-size:12px;line-height:1.6;color:#b8ac97}}
        .hero-scroll-btn{position:absolute;bottom:24px;right:0;z-index:20;width:48px;height:48px;border-radius:50%;border:1px solid rgba(246,241,230,0.16);display:flex;align-items:center;justify-content:center;color:#f6f1e6;text-decoration:none;transition:border-color .25s ease,color .25s ease}
        .hero-scroll-btn:hover{border-color:#dd9c4f;color:#dd9c4f}
        .hero-scroll-btn svg{width:16px;height:16px;animation:hero-bounce 1.6s infinite}
        @keyframes hero-bounce{0%,100%{transform:translateY(-15%)}50%{transform:translateY(15%)}}
        .hero-marquee{border-top:1px solid rgba(246,241,230,0.16);border-bottom:1px solid rgba(246,241,230,0.16);background:#2e2820;padding:20px 0;overflow:hidden}
        .hero-marquee-track{display:flex;width:max-content;align-items:center;gap:40px;animation:hero-marquee 24s linear infinite}
        .hero-marquee-track span{display:flex;align-items:center;gap:40px;white-space:nowrap;font-family:"Archivo",sans-serif;font-size:14px;font-weight:700;text-transform:uppercase;color:#f6f1e6}
        .hero-marquee-track span::after{content:"";width:6px;height:6px;border-radius:50%;background:#dd9c4f}
        @keyframes hero-marquee{to{transform:translateX(-50%)}}
        .hero-fade-up{opacity:0;transform:translateY(28px) scale(0.96);transition:opacity 1.15s cubic-bezier(0.16,1,0.3,1),transform 1.15s cubic-bezier(0.16,1,0.3,1)}
        .hero-fade-up.is-visible{opacity:1;transform:translateY(0) scale(1)}
        @media (prefers-reduced-motion:reduce){.hero-marquee-track{animation-play-state:paused}.hero-badge-craft,.hero-badge-reel,.hero-scroll-btn svg{animation:none}.hero-fade-up{transition:none;opacity:1;transform:none}.hero-title,.hero-portrait{transform:none !important}}
      `}</style>

      <div className="hero-grid" />

      <header className="hero-header">
        <a href="#home" className="hero-logo">
          {CONFIG.logo.replace(/\.$/, '')}
          <span>.</span>
        </a>
        <p className="hero-availability">{CONFIG.availability}</p>
        <a href={`mailto:${CONFIG.email}`} className="hero-cta">Let’s talk</a>
      </header>

      <div className="hero-inner" id="home">
        <div className="hero-title" ref={titleRef}>
          <h1>
            {CONFIG.name}
            <span className="outline">{CONFIG.nameOutline}</span>
          </h1>
        </div>

        <div className="hero-portrait hero-fade-up is-visible" ref={portraitRef}>
          <div className="hero-halo" />
          <img src={CONFIG.image} alt={CONFIG.imageAlt} />

          <div className="hero-badge hero-badge-craft">
            <span className="hero-badge-label">{CONFIG.badgeLabel}</span>
            <span className="hero-badge-value">{CONFIG.badgeValue}</span>
          </div>

          <div className="hero-badge hero-badge-reel">
            <span className="hero-play" />
            <span>
              <span className="hero-badge-label">{CONFIG.reelLabel}</span>
              <span className="hero-badge-value">{CONFIG.reelValue}</span>
            </span>
          </div>
        </div>

        <div className="hero-tagline">
          <h2>{CONFIG.taglineTitle}</h2>
          <p>{CONFIG.taglineText}</p>
        </div>

        <a href="#work" className="hero-scroll-btn" aria-label="Scroll to selected work">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>

      <div className="hero-marquee" id="work">
        <div
          className="hero-marquee-track"
          dangerouslySetInnerHTML={{ __html: marqueeItems }}
        />
      </div>
    </section>
  );
};

export default Hero;
