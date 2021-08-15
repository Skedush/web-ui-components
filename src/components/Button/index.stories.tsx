import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@/components';
import { withKnobs, select } from '@storybook/addon-knobs';
import { customType } from './index';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const basic = () => {
  const customtype = select('type', customType, 'primary');
  return (
    <Button customtype={customtype} onClick={action('clicked')}>
      Hello Button
    </Button>
  );
};
