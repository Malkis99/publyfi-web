import { FC } from 'react';

const IconPlanet: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block h-6 w-6 mr-2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 18" />
      <path d="M12 2a15.3 15.3 0 0 0-4 18" />
    </svg>
  );
};

export default IconPlanet;