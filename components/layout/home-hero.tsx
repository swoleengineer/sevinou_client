import React, { useState, useEffect } from 'react';
import { Dropdown, Menu, message } from 'antd';
import * as moment from 'moment';
import { withTranslation } from '../../i18n';
import Icon, { IconTypeEnum } from '../icon';
import { SectionTitle } from '../typography';
const HaitiMap = '/assets/haiti_map_001.png';



const LocaleNumbers = ({ reported, death, t }) => {
  return (
    <>
      <li className='sv_hero_data_row'>
        <strong>{reported}</strong><span>{t('hero.reported')}</span>
      </li>
      <li className='sv_hero_data_row'>
        <strong>{death}</strong><span>{t('hero.death')}</span>
      </li>
    </>
  );
}

const locales = [{
  title: 'Artibonite',
  reported: 86,
  death: 6
}, {
  title: 'Sud',
  reported: 25,
  death: 0
}];

const homeHero = ({ t, i18n }) => {
  const [selectedLocale, setLocale] = useState(0);
  useEffect(() => {
    message.info(`${t('hero.updated_to')} ${locales[selectedLocale].title}`)
  }, [selectedLocale])
  
  return (
    <section className='sv_hero'>
      <div className='sv_hero_wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 sv_hero_section'>
              <div 
                className='sv_map_demo_wrapper'
              >
                <img src={HaitiMap} />
                <div className='sv_hero_titleText'>
                  <span className='sv_hero_title'>{t('hero.title')}</span>
                  <span className='sv_hero_subtitle'>{t('hero.subtitle')}</span>
                </div>
              </div>
            </div>
            <div className='col-md-4 sv_hero_section'>
              <div className='sv_hero_data_wrapper'>
                <SectionTitle
                  title={t('hero.dataTitle')}
                  subTitle={`Last updated ${moment().subtract(1, 'd').fromNow()}`}
                />
                <div className='sv_hero_data_section'>
                  <Dropdown
                    overlay={(
                      <Menu>
                        {locales.map((locale, i) => {
                          const isSelected = selectedLocale === i;
                          return (
                            <Menu.Item
                              key={i}
                              onClick={() => {
                                setLocale(i);
                              }}
                              style={isSelected ? {
                                fontWeight: 500
                              } : {}}
                            >
                              {locale.title}
                            </Menu.Item>
                          );
                        })}
                      </Menu>
                    )}
                    trigger={['click']}
                  >
                    <span
                      className='sv_hero_data_title'
                      style={{ cursor: 'pointer' }}
                    >
                      {locales[selectedLocale].title}&nbsp;&nbsp;<Icon icon='fa-caret-down' type={IconTypeEnum.solid} />
                    </span>
                  </Dropdown>
                  <ul className='sv_hero_data_numbers'>
                    <LocaleNumbers
                      reported={locales[selectedLocale].reported}
                      death={locales[selectedLocale].death}
                      t={t}
                    />
                  </ul>
                </div>
                <div className='sv_hero_data_section'>
                  <span className='sv_hero_data_title'>Haiti</span>
                  <ul className='sv_hero_data_numbers'>
                    <LocaleNumbers
                      reported={182}
                      death={15}
                      t={t}
                    />
                  </ul>
                </div>
                <div className='sv_hero_data_section'>
                  <span className='sv_hero_data_title'>{t('hero.global')}</span>
                  <ul className='sv_hero_data_numbers'>
                    <LocaleNumbers
                      reported={`4.23M`}
                      death={`290K`}
                      t={t}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

homeHero.getInitialProps = async () => ({
  namesspacesRequired: ['common']
})
export default withTranslation('common')(homeHero);
