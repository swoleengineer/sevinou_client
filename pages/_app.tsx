import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import location from '../i18n'
import SEO from '../utils/next-seo.config';
import '../styles/app.css';


const { appWithTranslation } = location ;

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"  />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" ></script>
    </Head>
    <DefaultSeo {...SEO()} />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp)
