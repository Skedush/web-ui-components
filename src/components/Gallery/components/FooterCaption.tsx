import React from 'react';
import { CommonProps } from 'react-images';
import '../index.less';

const FooterCaption = (props: CommonProps) => {
  const { currentView } = props;
  const { caption } = currentView;
  return <div className={'lidig-gallery-footer-left'}>{caption}</div>;
};
export default FooterCaption;
