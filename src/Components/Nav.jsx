import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="w-full px-32 h-12 flex items-center justify-between bg-white border-b border-gray-200">
      <header className="flex items-center">
        <div className="hidden md:block">
          <div className="ml-10 mr-52 flex place-items-baseline space-x-4">
            <Link to={"/"} >
              <p className="text-sm text-gray-800 p-6">Home</p>
            </Link>
          </div>
        </div>
        {/* Logo
        <div className="flex-shrink-0">
        </div>*/}
      </header>
    </nav>
  );
}

export default Nav;