import React, { useState } from 'react';
import { Input, Popover, message } from 'antd';
import { withTranslation } from '../../i18n';
import Icon, { IconTypeEnum } from '../icon';
const { Search } = Input;

const homeCta = ({ t, i18n }) => {
  const [searchText, setSearchText] = useState();
  return (
    <div className='sv_home_cta_wrapper'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 col-12'>
          <div className='sv_home_cta_container'>
            
            <div className='sv_home_address_search_container'>
              <span className='sv_cta_label'>{t('cta.label')}</span>
              <div className='sv_cta_search_input'>
                <Search
                  size='large'
                  placeholder={t('cta.placeholder')}
                  onSearch={() => {
                    message.info(`${t('cta.result_demo')} - ${searchText}`)
                  }}
                  value={searchText}
                  onChange={e => setSearchText(e.target.value)}
                />
              </div>
              
            </div>
            
            <div className='sv_cta_actions_wrapper'>
              <div className='sv_cta_actions_container'>
                <Popover
                  trigger='click'
                  content={(
                    <div>
                      Feature: Contact medical professionals near location (in haiti) or from around the world.
                    </div>
                  )}
                >
                  <span className='sv_cta_actions_action'>
                    <Icon icon='fa-user-md-chat' type={IconTypeEnum.regular} />
                    <span>{t('cta.contactBtn')}</span>
                  </span>
                </Popover>

                <Popover
                  trigger='click'
                  content={(
                    <div>
                      Feature: Search your symptoms by yourself on the platform &laquo; will need to tie in data from other websites.
                    </div>
                  )}
                >
                  <span className='sv_cta_actions_action'>
                    <Icon icon='fa-stethoscope' type={IconTypeEnum.regular} />
                    <span>{t('cta.symptoms')}</span>
                  </span>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

homeCta.getInitialProps = async () => ({
  namesspacesRequired: ['common']
})
export default withTranslation('common')(homeCta);
