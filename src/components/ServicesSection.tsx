import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    title: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    title: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    title: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    title: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0 w-full"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="font-black uppercase text-[#0C0C0C] font-size-clamp leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full border-t border-[#0C0C0C]/15">
          {servicesData.map((item, i) => (
            <FadeIn key={item.number} delay={i * 0.1} y={30} className="w-full">
              <div className="py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
                {/* Number */}
                <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none select-none min-w-[120px] md:min-w-[200px]">
                  {item.number}
                </div>

                {/* Title & Description stacked vertically */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] tracking-wide">
                    {item.title}
                  </h3>
                  <p className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
