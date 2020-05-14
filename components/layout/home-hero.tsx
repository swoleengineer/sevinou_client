import React, { useState, useEffect, FC } from 'react';
import { Dropdown, Menu, message } from 'antd';
import * as moment from 'moment';
import useTranslation from '../../hooks/useTranslation';
import Icon, { IconTypeEnum } from '../icon';
import { SectionTitle } from '../typography';
const HaitiMap = '/assets/haiti_map_001.png';


interface NumbersProp {
  reported: number | string;
  death: number | string;

}

const LocaleNumbers: FC<NumbersProp> = ({ reported, death }) => {
  const { t } = useTranslation();
  return (
    <>
      <li className='sv_hero_data_row'>
        <strong>{reported}</strong><span>{t('common.hero.reported')}</span>
      </li>
      <li className='sv_hero_data_row'>
        <strong>{death}</strong><span>{t('common.hero.death')}</span>
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


const HomeHero: FC = () => {
  const { t } = useTranslation();
  const [selectedLocale, setLocale] = useState(0);

  useEffect(() => {
    message.info(`${t('common.hero.updated_to')} ${locales[selectedLocale].title}`)
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
                <img src={HaitiMap} alt='Haiti Map'/>
                <div className='sv_hero_titleText'>
                  <span className='sv_hero_title'>{t('common.hero.title')}</span>
                  <span className='sv_hero_subtitle'>{t('common.hero.subtitle')}</span>
                </div>
              </div>
            </div>
            <div className='col-md-4 sv_hero_section'>
              <div className='sv_hero_data_wrapper'>
                <SectionTitle
                  title={t('common.hero.dataTitle')}
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
                    />
                  </ul>
                </div>
                <div className='sv_hero_data_section'>
                  <span className='sv_hero_data_title'>Haiti</span>
                  <ul className='sv_hero_data_numbers'>
                    <LocaleNumbers
                      reported={182}
                      death={15}
                    />
                  </ul>
                </div>
                <div className='sv_hero_data_section'>
                  <span className='sv_hero_data_title'>{t('common.hero.global')}</span>
                  <ul className='sv_hero_data_numbers'>
                    <LocaleNumbers
                      reported={`4.23M`}
                      death={`290K`}
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

export default HomeHero;
