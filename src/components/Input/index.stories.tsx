import React from 'react';
import { Input } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const basic = () => {
  return <Input />;
};
