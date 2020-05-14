import React, { FC, useCallback } from 'react';
import Link from 'next/link';
import Flag from 'react-country-flag';
import {  Menu, Dropdown } from 'antd';
import useTranslation from '../../hooks/useTranslation';
import { locales } from '../../translations/config';
import { useRouter } from 'next/router';
import Logo from '../logo';
import Icon, { IconTypeEnum } from '../icon';

interface NavlinkProps {
  href: string;
  text: string;
}

const Navlink: FC<NavlinkProps> = ({ href, text }) => {
  const { locale } = useTranslation();
  const router = useRouter();
  const className = 'sv_header_nav_option';
  const isSelected = router.pathname === href;
  return (
    <Link href={`/[lang]${href}`} as={`/${locale}${href}`}>
      <a
        className={`${className} ${isSelected ? 'sv_header_selected' : ''}`}
      >
        {text}
      </a>
    </Link>
  );
};


const Switcher: FC = () => {
  const { locale } = useTranslation();
  const router = useRouter();
  const handleSwitch = useCallback((language: string) => {
    const regex = new RegExp(`^/(${locales.join('|')})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${language}`));
  }, [router]);
  const languageMap: { [key: string]: string; } = {
    ht: {
      en: 'Angle',
      fr: 'franse',
      ht: 'Kreyol'
    },
    fr: {
      en: 'Anglais',
      fr: 'Français',
      ht: 'Creole'
    },
    en: {
      en: 'English',
      fr: 'French',
      ht: 'Kreole'
    }
  }[locale];

  return (
    <Dropdown
      overlay={(
        <Menu>
          {['ht', 'fr', 'en'].map(language => {
            return (
              <Menu.Item
                key={language}
                onClick={() => handleSwitch(language)}
              >
                <span className='sv_language'>
                  <Flag svg={true} countryCode={language === 'en' ? 'us' : language} />
                  <span className='sv_language_title'>{languageMap[language]}</span>
                    {locale === language && (
                      <Icon icon='fa-check' type={IconTypeEnum.light} />
                    )}
                  </span>
                </Menu.Item>
              );
            })}
          </Menu>
        )}
      trigger={['click']}
    >
      <div className='sv_language_selector_container'>
        <span
          className='sv_ls_flag'
        >
          <Flag svg={true} countryCode={locale === 'en' ? 'us' : locale} />
        </span>
        <span
          className='sv_ls_lc'
        >
          {languageMap[locale]}
        </span>
        <span
          className='sv_ls_icon'
        >
          <Icon icon='fa-caret-down' type={IconTypeEnum.solid} />
        </span>
      </div>
    </Dropdown>
  );
}

const Navbar = () => {
  const { t } = useTranslation()
  return (
    <header className='sv_header_wrapper'>
      <nav className='container'>
        <div className='sv_header_container'>
          <div className='sv_header_logo'>
            <Logo />
            <div className='sv_language_selector_wrapper'>
              <Switcher />              
            </div>
          </div>
          <div className='sv_nav_menucontainer'>
            <ul className='sv_main_nav_wrapper'>
              <li className='sv_main_nav_menu_item'>
                <Navlink
                  href='/'
                  text={t('common.nav.home')}
                />
              </li>
              <li className='sv_main_nav_menu_item'>
                <Navlink
                  href='/'
                  text={t('common.nav.about')}
                />
              </li>
              <li className='sv_main_nav_menu_item'>
                <Navlink
                  href='/'
                  text={t('common.nav.support')}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
