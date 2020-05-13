import React from 'react';

export const SectionTitle = ({ title, subTitle }) => {
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
