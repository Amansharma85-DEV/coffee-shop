import { useRef, useState, useEffect } from 'react';

const row1Images = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const row2Images = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const row1Tripled = [...row1Images, ...row1Images, ...row1Images];
const row2Tripled = [...row2Images, ...row2Images, ...row2Images];

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Transform = scrollOffset - 200;
  const row2Transform = -(scrollOffset - 200);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: `translate3d(${row1Transform}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((url, i) => (
            <div
              key={`row1-${i}`}
              className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-900 border border-white/5"
            >
              <img
                src={url}
                alt={`Portfolio showcase item ${i}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl select-none"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: `translate3d(${row2Transform}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((url, i) => (
            <div
              key={`row2-${i}`}
              className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-900 border border-white/5"
            >
              <img
                src={url}
                alt={`Portfolio showcase item ${i}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
