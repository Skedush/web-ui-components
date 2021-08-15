import React, { CSSProperties } from 'react';
import classNames from 'classnames';

interface IconFontProps {
  style?: CSSProperties;
  type: string;
  iconType?: 'symbol';
  className?: string;
}

const IconFont = (props: IconFontProps) => {
  const defaultStyle: object = {
    color: 'white',
  };

  const { iconType, type, style, ...option } = props;

  // 支持iconfont Symbol类型， 支持图片色彩
  if (iconType === 'symbol') {
    return (
      <svg className={classNames('icon', option.className)} aria-hidden={true}>
        <use xlinkHref={`#anticon-${type}`} />
      </svg>
    );
  } else {
    return (
      <i
        className={classNames('iconfont', type)}
        style={{ ...defaultStyle, ...style }}
        {...option}
      />
    );
  }
};

export default IconFont;
