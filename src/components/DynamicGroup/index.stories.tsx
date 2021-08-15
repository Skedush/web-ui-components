import React from 'react';
import { DynamicGroup } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'DynamicGroup',
  component: DynamicGroup,
  decorators: [withKnobs],
};

export const basic = () => {
  const value = [
    {
      person: 'wdw',
      phone: '1235',
    },
  ];
  const items = [
    {
      field: 'person',
      value: {
        type: 'input',
        initialValue: 'wdw',
        span: 12,
      },
    },
    {
      field: 'phone',
      value: {
        type: 'number',
        initialValue: '13681812640',
        span: 12,
      },
    },
  ];

  // return Form.create({ name: 'customized_form_controls' })(Demo);
  return <DynamicGroup value={value} items={items} />;
};
