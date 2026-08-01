import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection = () => {
  const aboutText =
    "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

  return (
    <section id="about" className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Corner 3D Image 1: Top-Left Moon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
          />
        </FadeIn>
      </div>

      {/* Corner 3D Image 2: Bottom-Left 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D object icon"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none"
          />
        </FadeIn>
      </div>

      {/* Corner 3D Image 3: Top-Right Lego */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
          />
        </FadeIn>
      </div>

      {/* Corner 3D Image 4: Bottom-Right 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Group 3D icon"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none"
          />
        </FadeIn>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Text */}
        <FadeIn delay={0.2} y={20}>
          <AnimatedText text={aboutText} />
        </FadeIn>

        {/* Gap between text and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
