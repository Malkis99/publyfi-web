import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start">
          <Link href="/" passHref>
            <div className="text-accent hover:text-highlight transition-colors duration-300 font-semibold cursor-pointer">
              &larr; Back to Home
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;