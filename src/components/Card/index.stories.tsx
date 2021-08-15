import React from 'react';
import { Card } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};

export const basic = () => {
  return (
    <Card title={'卡片'}>
      <Card.Grid></Card.Grid>
    </Card>
  );
};
