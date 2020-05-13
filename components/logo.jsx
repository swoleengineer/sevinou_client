import React from 'react';
import Link from 'next/link';

const LOGO = '/assets/sevinou_s_6.png';

const logo = ({ large, dark, noText } = {
  large: false,
  dark: false,
  noText: false
}) => {
  return (
    <Link href='/'>
      <a className='sv_logo'>
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
