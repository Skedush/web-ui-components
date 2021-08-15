import React from 'react';
import { Cascader } from '@/components';

export default {
  title: 'Cascader',
  component: Cascader,
};

export const basic = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      isLeaf: false,
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      isLeaf: false,
    },
  ];
  return <Cascader options={options} changeOnSelect />;
};
