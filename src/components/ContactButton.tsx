interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  text?: string;
}

export const ContactButton = ({
  className = '',
  onClick,
  text = 'Contact Me',
}: ContactButtonProps) => {
  return (
    <a
      href="#contact"
      onClick={onClick}
      className={`inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none text-center ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      {text}
    </a>
  );
};
