import React, { FC } from 'react';

interface Props {
  title: string;
  subTitle?: string;
  border?: boolean;
}
export const SectionTitle: FC<Props> = ({ title, subTitle, border = false }) => {
  return (
    <div className={`sv_section_title ${border ? 'sv_section_title_border' : ''}`}>
      <div className='sv_section_title_text_section'>
        <span className='sv_section_title_title'>{title}</span>
        {subTitle && (
          <span className='sv_section_title_subTitle'>{subTitle}</span>
        )}
      </div>
    </div>
  );
}
