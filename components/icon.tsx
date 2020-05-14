import React from 'react';

export const IconTypeEnum = {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  duo: 'fad',
  brand: 'fab'
}

const Icon = (props) => {
  const { type = IconTypeEnum.duo, style = null, color = false, light = false, icon = '', push = false, intent = 'none', iconSize = undefined, className = '', onClick = () => null, reverse = false } = props;
  const iconColor = {
    none: {},
    primary: {
      '--fa-primary-color': reverse ? 'rgba(16,107,163,.85)' : '#106ba3',
      '--fa-secondary-color': reverse ? '#106ba3' : 'rgba(16,107,163,.85)'
    },
    success: {
      '--fa-primary-color': reverse ? 'rgba(13,128,80,.85)' : '#0d8050',
      '--fa-secondary-color': reverse ? '#0d8050' : 'rgba(13,128,80,.85)'
    },
    warning: {
      '--fa-primary-color': reverse ? 'rgba(191,115,38,.85)' : '#bf7326',
      '--fa-secondary-color': reverse ? '#bf7326' : 'rgba(191,115,38,.85)'
    },
    danger: {
      '--fa-primary-color': reverse ? 'rgba(194,48,48,.85)' : '#c23030',
      '--fa-secondary-color': reverse ? '#c23030' : 'rgba(194,48,48,.85)'
    }
  }
  return (
    <i
      onClick={() => onClick()}
      className={`${type} ${icon} ${(light && color) && intent !== 'none' ? 'fa-swap-opacity' : ''} ${className}`}
      style={{
        ...(iconSize ? { fontSize: `${iconSize}px`} : {}),
        ...(push ? {position: 'relative',
        top: '3px'} : {}),
        ...((type === IconTypeEnum.duo && color) && intent !== 'none'
          ? {
              '--fa-primary-color': reverse ? 'rgba(92,112,128,.85)' : '#5c7080',
              '--fa-secondary-color': reverse ? '#5c7080' : 'rgba(92,112,128,.85)'
            }
          : {}),
        ...iconColor[intent],
        ...(style || {})
      }}
    />
  )
}

export default Icon;
