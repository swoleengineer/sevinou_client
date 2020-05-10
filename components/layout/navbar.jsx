import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../logo';


const Navlink = ({ href, text }) => {
  const router = useRouter();
  const className = 'sv_header_nav_option';
  const isSelected = router.pathname === href;
  return (
    <Link href={href}>
      <a
        className={`${className} ${isSelected ? 'sv_header_selected' : ''}`}
      >
        {text}
      </a>
    </Link>
  );
};

const navbar = () => {
  

  return (
    <header className='sv_header_wrapper'>
      <nav className='sv_header_container'>
        <div className='container'>
          <div className='sv_header_logo'>
            <Logo />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default navbar;
