import React from 'react';
import { CommonProps } from 'react-images';
import '../index.less';

const FooterCount = (props: CommonProps) => {
  const { currentIndex, views } = props;
  const activeView = currentIndex + 1;
  const totalViews = views.length;
  if (!activeView || !totalViews) return null;
  return (
    <div className={'lidig-gallery-footer-left'}>
      {activeView} of {totalViews}
    </div>
  );
};
export default FooterCount;
