'use client';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-8">
          {/* The "Back to Home" button was previously here. It will be moved to its own component. */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;