import React, { FC } from 'react';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';

const LOGO = '/assets/sevinou_s_6.png';

interface LogoProps {
  large?: boolean;
  dark?: boolean;
  noText?: boolean;
}
const Logo: FC<LogoProps> = ({ noText } = {
  large: false,
  dark: false,
  noText: false
}) => {
  const { locale } = useTranslation();
  return (
    <Link href='/[lang]' as={`/${locale}`}>
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

export default Logo;
