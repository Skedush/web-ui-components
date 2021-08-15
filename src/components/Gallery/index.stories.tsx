import React from 'react';
// import { action } from '@storybook/addon-actions';
import { Gallery } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';
// import { lte } from 'lodash';

export default {
  title: 'Gallery',
  component: Gallery,
  decorators: [withKnobs],
};

export const basic = () => {
  let isOpen = true;
  const imgList = [
    {
      caption: '测试一下test1',
      source: 'http://www.lidig.com/u/cms/www/201905/24162642cnyg.png',
    },
    {
      caption: '测试一下test2',
      source: 'http://www.lidig.com/u/cms/www/201905/24162629entv.png',
    },
  ];

  const cb = index => {
    console.log(index);
  };

  return (
    <Gallery
      images={imgList}
      isOpen={isOpen}
      // onViewChange={index => {console.log(index);}}
      // footer={<Button>点击一下</Button>}
      footer={[
        { name: '获取索引', type: 'select', callback: cb },
        { name: '获取索引', type: 'select', callback: cb },
      ]}
    />
  );
};
