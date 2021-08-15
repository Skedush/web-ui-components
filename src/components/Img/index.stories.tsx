import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Img } from '@/components';

export default {
  title: 'Image',
  component: Img,
  decorators: [
    withKnobs({
      escapeHTML: false,
    }),
  ],
};

export const basic = () => {
  const galleryUri = [
    'https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1594781944&t=eebf8123cb91d5b806ade38b3069fa66',
    'https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1594781944&t=eebf8123cb91d5b806ade38b3069fa66',
    'https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1594781944&t=eebf8123cb91d5b806ade38b3069fa66',
  ];
  const preview = boolean('preview', true);
  return (
    <Img
      image={
        'https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1594781944&t=eebf8123cb91d5b806ade38b3069fa66'
      }
      previewImg={preview}
      defaultImg={''}
      onClick={action('clicked')}
      galleryImage={galleryUri}
    />
  );
};
