import React, { FC } from 'react';

interface Props {
  title: string;
  subTitle?: string;
}
export const SectionTitle: FC<Props> = ({ title, subTitle }) => {
  return (
    <div className='sv_section_title'>
      <div className='sv_section_title_text_section'>
        <span className='sv_section_title_title'>{title}</span>
        {subTitle && (
          <span className='sv_section_title_subTitle'>{subTitle}</span>
        )}
      </div>
    </div>
  );
}
