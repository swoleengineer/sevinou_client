import React from 'react';
import withLocale from '../../hocs/withLocale';
import Layout from '../../components/layout/layout-001';
import Homehero from '../../components/layout/home-hero';
import HomeCta from '../../components/layout/home-cta';
import { SectionTitle } from '../../components/typography';

interface HomeDetails {
  title: string;
  content: string;
  picture: string;
}
const involvedWays: Array<HomeDetails> = [{
  title: 'Licensed Medical Professionals',
  content: `Work with Haiti's healthcare workers in their efforts to serve their local areas via telemedicine.`,
  picture: '/assets/home_involve_medical.png'
}, {
  title: 'Medical Supplies & PPE',
  content: `Help source medical supplies and PPE for Haiti's medical centers.`,
  picture: '/assets/home_involve_supplies.png'
}, {
  title: 'Other Methods',
  content: `Support families in Haiti through food, clothing, and monetary donations.`,
  picture: '/assets/home_ed_boxes.png'
}];

const edWays: Array<HomeDetails> = [{
  title: 'What is Coronavirus?',
  content: `Gain a better understanding of what the virus is and how it works.`,
  picture: '/assets/home_ed_virus.png'
}, {
  title: 'How Can I Stay Safe?',
  content: `Understand proper social-distancing and self-quarantining guidelines.`,
  picture: '/assets/home_involve_help.png'
}];

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
                subTitle={`Volunteer your time or efforts to help Haiti's Covid-19 recovery`}
                border={true}
              />
            </div>
            {involvedWays.map(way => {
              const { title, content, picture } = way;
              return (
                <div
                  className='col-md-4'
                  key={title}
                >
                  <div className='sv_homepage_service'>
                    <img src={picture} alt={title} />
                    <span className='sv_hs_title'>{title}</span>
                    <span className='sv_hs_subtitle'>{content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </section>
      <section
        style={{
          backgroundColor: 'white',
          margin: '-50px 0 25px',
        }}
      >
        <div className='sv_bg_grey'>
        <div className='container' style={{ marginTop: 50 }}>
          <div className='row' >
            <div className='col-12'>
              <SectionTitle
                title='Get Informed'
                subTitle={`Learn how to take of yourself, your family, and your country.`}
                border={true}
              />
            </div>
            {edWays.map(way => {
              const { title, content, picture } = way;
              return (
                <div
                  className='col-md-6'
                  key={title}
                >
                  <div className='sv_homepage_ed'>
                    <div className='sv_homepage_ed_picture'>
                      <img src={picture} alt={title} />
                    </div>
                    
                    <div className='sv_homepage_ed_content'>
                      <span className='sv_hs_title'>{title}</span>
                      <span className='sv_hs_subtitle'>{content}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
        
      </section>
      
    </Layout>
    </>
  )
}

export default withLocale(Home);
