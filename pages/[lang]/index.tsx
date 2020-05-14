import React from 'react';
import withLocale from '../../hocs/withLocale';
import Layout from '../../components/layout/layout-001';
import Homehero from '../../components/layout/home-hero';
import HomeCta from '../../components/layout/home-cta';
import { SectionTitle } from '../../components/typography';

const Home = () => {
  return (
    <>
    <Homehero />
    <Layout
      titleKey={'nav.home'}
      style={{
        marginTop: 56,
        position: 'relative',
      }}
    >
      
      <section 
        className='sv_home_content_wrapper'
      >
        <div className='container' style={{ position: 'relative', height: 150 }}>
          <HomeCta />
        </div>
        <div className='container'>
          <div className='row' >
            <div className='col-12'>
              <SectionTitle
                title='Get Involved'
              />
            </div>
            <div className='col-md-4'>
              <div 
                className='sv_homepage_service'
                style={{
                  backgroundImage: `url(/assets/home_engage_medical.png)`
                }}
              >
                <span className='sv_hs_title'>Medical Professionals</span>
                <span className='sv_hs_subtitle'>Collaborate with Medical Professionals in Haiti</span>
              </div>
            </div>
            <div className='col-md-4'>
              <div 
                className='sv_homepage_service'
                style={{
                  backgroundImage: `url(/assets/home_engage_supplies.png)`
                }}
              >
                <span className='sv_hs_title'>Supplies</span>
                <span className='sv_hs_subtitle'>Help source/provide medical &amp; PPE</span>
              </div>
            </div>
            <div className='col-md-4'>
              <div 
                className='sv_homepage_service'
                style={{
                  backgroundImage: `url(/assets/home_engage_other.png)`
                }}
              >
                <span className='sv_hs_title'>Supplies</span>
                <span className='sv_hs_subtitle'>Help source/provide medical &amp; PPE</span>
              </div>
            </div>
            {/* {['Medical Professionals', 'Supplies', 'Donate'].map(service => {
              return (
                <div className='col-md-4' key={service}>
                  <div className='sv_homepage_service'>
                    {service}
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}

export default withLocale(Home);
