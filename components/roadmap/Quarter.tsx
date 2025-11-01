import { FC, ReactNode } from 'react';

interface QuarterProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Quarter: FC<QuarterProps> = ({ title, description, children }) => {
  return (
    <div id={title.split(' ')[0]} className="relative mb-12 pl-10 group">
      {/* This marker is positioned to be centered on the timeline. */}
      <div className="absolute -left-8 top-1 w-4 h-4 bg-accent rounded-full shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_#a38ad1]" />

      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5">
        <h2 className="text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-accent">
          {title}
        </h2>
        <div className="space-y-3">{children}</div>
      </div>

      {/* Quarter-level tooltip */}
      <div className="absolute left-full ml-8 w-max max-w-sm px-4 py-3 rounded-lg bg-[#140f22e6] backdrop-blur-sm shadow-[0_0_20px_rgba(163,138,209,0.25)] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:translate-x-0 pointer-events-none z-20 top-1/2 -translate-y-1/2 translate-x-4">
        <p className="text-sm text-white/90 font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Quarter;