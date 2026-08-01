import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface Project {
  number: string;
  name: string;
  category: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const projectsData: Project[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const ProjectCard = ({
  project,
  index,
  totalCards,
  progress,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const range = [index / totalCards, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-20 sm:top-24 md:top-28 flex items-center justify-center w-full mb-16"
      style={{
        top: `calc(4rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-5xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 shadow-2xl origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/15 pb-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] text-3xl sm:text-5xl md:text-6xl">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-medium uppercase text-[#D7E2EA] tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* Bottom Row: Image Grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full">
          {/* Left Column (40% width) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover h-[clamp(130px,16vw,230px)]"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover h-[clamp(160px,22vw,340px)]"
            />
          </div>

          {/* Right Column (60% width) */}
          <div className="w-full md:w-[60%]">
            <img
              src={project.col2Image}
              alt={`${project.name} showcase`}
              loading="lazy"
              className="w-full h-full min-h-[280px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover h-[clamp(300px,40vw,580px)]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full min-h-screen"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-24">
            Project
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="w-full flex flex-col relative pb-20">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projectsData.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
