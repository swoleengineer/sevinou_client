import React from 'react';
import withLocale from '../../hocs/withLocale';
import Layout from '../../components/layout/layout-001';
import Homehero from '../../components/layout/home-hero';
import HomeCta from '../../components/layout/home-cta';
import { SectionTitle } from '../../components/typography';

const Home = () => {
  return (
    <Layout
      titleKey={'nav.home'}
      style={{
        marginTop: 56,
        position: 'relative',
        overflow: 'auto'
      }}
    >
      <Homehero />
      <section 
        className='sv_home_content_wrapper'
      >
        <div className='container' style={{ position: 'relative' }}>
          <HomeCta />
          <div className='row' style={{ padding: '100px 0' }}>
            <div className='col-12'>
              <SectionTitle
                title='Get Involved'
              />
            </div>
            {['Medical Professionals', 'Supplies', 'Donate'].map(service => {
              return (
                <div className='col-md-4' key={service}>
                  <div className='sv_homepage_service'>
                    {service}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default withLocale(Home);
