interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  text?: string;
}

export const LiveProjectButton = ({
  className = '',
  href = '#',
  text = 'Live Project',
}: LiveProjectButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none text-center ${className}`}
    >
      {text}
    </a>
  );
};
