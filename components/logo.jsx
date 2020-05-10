import React from 'react';
import Link from 'next/link';

const LOGO = '/assets/sevinou_logo.png';

const logo = ({ large, dark, noText } = {
  large: false,
  dark: false,
  noText: false
}) => {
  return (
    <Link href='/'>
      <a
        className={}
      >
        <img src={LOGO} alt='Sevinou' />
        {noText
          ? null
          : (
            <>
              <span className='logoText_sevi'>Sevi</span>
              <span className='logoText_nou'>nou</span>
            </>
          )
        }
      </a>
    </Link>
  );
}

export default logo;
