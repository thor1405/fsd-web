import React from 'react';
import { Button } from './ui/button'; 

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
 
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-x-4">
          <Button variant="default">Login</Button>
          <Button variant="ghost">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;