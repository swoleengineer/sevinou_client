import React, { FC } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from '../../hooks/useTranslation';
import Navbar from './navbar';

interface Props {
  style?: React.CSSProperties;
  titleKey: string;
  descriptionKey?: string;
}

// home layout
const Layout_001: FC<Props> = ({ children, style, titleKey, descriptionKey }) => {
  const { t } = useTranslation();
  return (
    <>
      <NextSeo
        title={t(titleKey)}
        description={t(descriptionKey || '')}
      />
      <Navbar />
      <div 
        style={{
          width: '100%',
          height: '100%',
          ...(style || {})
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Layout_001;
