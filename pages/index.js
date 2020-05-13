import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout-001';
import { i18n, withTranslation } from '../i18n';
import Homehero from '../components/layout/home-hero';
import HomeCta from '../components/layout/home-cta';
import { SectionTitle } from '../components/typography';

const Home = () => {
  return (
    <Layout
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
          <div className='row' style={{ padding: '125px 0' }}>
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

export default Home;
