"use client";

import { useEffect, useRef, useCallback } from "react";

const FRAME_COUNT = 240;
const getFramePath = (index) =>
  `/products/imgColl/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

// Clamp a value between 0 and 1 then interpolate
function remap(progress, inStart, inEnd, from, to) {
  const t = Math.min(Math.max((progress - inStart) / (inEnd - inStart), 0), 1);
  return from + (to - from) * t;
}

export default function Hero() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef(null);

  // Refs for scroll-driven text reveal
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const scrollHintRef = useRef(null);

  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[index];
    if (img && img.complete && img.naturalWidth > 0) {
      // Cover-fit: scale to fill entire canvas
      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const x = (canvas.width - img.naturalWidth * scale) / 2;
      const y = (canvas.height - img.naturalHeight * scale) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    }
  }, []);

  const updateText = useCallback((progress) => {
    // Each element: [ref, fadeInStart, fadeInEnd]
    // Staggered reveal as user begins scrolling; fade out near the end
    const items = [
      [badgeRef,    0.00, 0.10],
      [headingRef,  0.05, 0.18],
      [paraRef,     0.10, 0.23],
      [buttonsRef,  0.15, 0.28],
      [statsRef,    0.20, 0.33],
    ];

    items.forEach(([ref, inStart, inEnd]) => {
      if (!ref.current) return;
      const fadeIn  = remap(progress, inStart, inEnd, 0, 1);
      const fadeOut = remap(progress, 0.72, 0.90, 1, 0);
      const opacity = Math.min(fadeIn, fadeOut);
      const translateY = remap(progress, inStart, inEnd, 28, 0);
      ref.current.style.opacity = opacity;
      ref.current.style.transform = `translateY(${translateY}px)`;
    });

    if (scrollHintRef.current) {
      scrollHintRef.current.style.opacity = remap(progress, 0, 0.06, 1, 0);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrameRef.current);
    };

    // Preload all frames
    const images = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      images.push(img);
    }
    imagesRef.current = images;

    images[0].onload = setCanvasSize;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollableHeight = section.offsetHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1);

      updateText(progress);

      const frameIndex = Math.min(
        Math.floor(progress * (FRAME_COUNT - 1)),
        FRAME_COUNT - 1
      );
      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => renderFrame(frameIndex));
      }
    };

    // Init text state before any scroll
    updateText(0);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", setCanvasSize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setCanvasSize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [renderFrame, updateText]);

  return (
    <section id="home" ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Full-screen scroll-driven canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Text content — scroll-driven reveal */}
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl space-y-8">

              <div
                ref={badgeRef}
                style={{ opacity: 0 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 px-4 py-1.5 text-sm font-medium text-white"
              >
                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                Pure &middot; Spicy &middot; Authentic
              </div>

              <h1
                ref={headingRef}
                style={{ opacity: 0 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white"
              >
                Premium{" "}
                <span className="bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
                  Chilli Powder
                </span>{" "}
                &amp; Spices
              </h1>

              <p
                ref={paraRef}
                style={{ opacity: 0 }}
                className="text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed"
              >
                Handcrafted from the finest sun-dried red chillies. No additives,
                no artificial colors — just pure, fiery flavor straight from our
                farms to your kitchen.
              </p>

              <div
                ref={buttonsRef}
                style={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-900/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
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
                style={{ opacity: 0 }}
                className="flex gap-8 pt-2"
              >
                {[["50+", "Spice Varieties"], ["10K+", "Happy Customers"], ["100%", "Pure & Natural"]].map(([val, label]) => (
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </div>
    </section>
  );
}
