import React from 'react';
import Link from 'next/link';
import Flag from 'react-country-flag';
import { Popover, Menu, Dropdown } from 'antd';
import { withTranslation } from '../../i18n';
import { useRouter } from 'next/router';
import Logo from '../logo';
import Icon, { IconTypeEnum } from '../icon';

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

const navbar = ({ t, i18n }) => {
  
  const languageMap = {
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
  }[i18n.language];
  return (
    <header className='sv_header_wrapper'>
      <nav className='container'>
        <div className='sv_header_container'>
          <div className='sv_header_logo'>
            <Logo />
            <div className='sv_language_selector_wrapper'>
              <Dropdown
                overlay={(
                  <Menu>
                    {['ht', 'fr', 'en'].map(language => {
                      return (
                        <Menu.Item
                          key={language}
                          onClick={() => i18n.changeLanguage(language)}
                        >
                          <span className='sv_language'>
                            <Flag svg={true} countryCode={language === 'en' ? 'us' : language} />
                            <span className='sv_language_title'>{languageMap[language]}</span>
                            {i18n.language === language && (
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
                    <Flag svg={true} countryCode={i18n.language === 'en' ? 'us' : i18n.language} />
                  </span>
                  <span
                    className='sv_ls_lc'
                  >
                    {languageMap[i18n.language]}
                  </span>
                  <span
                    className='sv_ls_icon'
                  >
                    <Icon icon='fa-caret-down' type={IconTypeEnum.solid} />
                  </span>
                </div>
              </Dropdown>
              
            </div>
          </div>
          <div className='sv_nav_menucontainer'>
            <ul className='sv_main_nav_wrapper'>
              <li className='sv_main_nav_menu_item'>
                <Navlink
                  href='/'
                  text={t('nav.home')}
                />
              </li>
              <li className='sv_main_nav_menu_item'>
                <Navlink
                  href='/'
                  text={t('nav.about')}
                />
              </li>
              <li className='sv_main_nav_menu_item'>
                <Navlink
                  href='/'
                  text={t('nav.support')}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

navbar.getInitialProps = async () => ({
  namesspacesRequired: ['common']
})

export default withTranslation('common')(navbar);
