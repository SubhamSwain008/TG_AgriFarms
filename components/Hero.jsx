"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const scrollHintRef = useRef(null);

  // Staggered fade-in on mount
  useEffect(() => {
    const items = [
      [badgeRef,       300],
      [headingRef,     600],
      [paraRef,        900],
      [buttonsRef,    1200],
      [statsRef,      1500],
      [scrollHintRef, 1800],
    ];
    const timers = items.map(([ref, delay]) =>
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0px)";
        }
      }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleVideoEnded = (e) => {
    // Seek just before the very end so the last frame stays frozen
    const v = e.currentTarget;
    v.currentTime = v.duration - 0.001;
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">

      {/* Background video — autoplay once, muted, no controls */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/products/Five_dried_red_1080p_202602181656.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
      />

      {/* Subtle blur to soften any compression artifacts */}
      <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />

      {/* Gradient overlays for text legibility */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/35 to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* Text content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-8">

            <div
              ref={badgeRef}
              style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 px-4 py-1.5 text-sm font-medium text-white"
            >
              <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
              Pure &middot; Spicy &middot; Authentic
            </div>

            <h1
              ref={headingRef}
              style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white"
            >
              Premium{" "}
              <span className="bg-linear-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
                Chilli Powder
              </span>{" "}
              &amp; Spices
            </h1>

            <p
              ref={paraRef}
              style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
              className="text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed"
            >
              Handcrafted from the finest sun-dried red chillies. No additives,
              no artificial colors — just pure, fiery flavor straight from our
              farms to your kitchen.
            </p>

            <div
              ref={buttonsRef}
              style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-red-600 to-red-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-900/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                View Products
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#about-product"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            <div
              ref={statsRef}
              style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
              className="flex gap-8 pt-2"
            >
              {[["5", "Spice Varieties"], ["10K+", "Happy Customers"], ["100%", "Pure & Natural"]].map(([val, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{val}</p>
                  <p className="text-sm text-white/55">{label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        style={{ opacity: 0, transition: "opacity 0.8s ease" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
}
