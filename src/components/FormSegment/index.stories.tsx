import React from 'react';
import { FormSegment } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'FormSegment',
  component: FormSegment,
  decorators: [withKnobs],
};

export const basic = () => {
  const value = [
    {
      name: 'wdw',
      phone: '1235',
    },
  ];
  const items = [
    {
      field: 'name',
      value: {
        type: 'input',
        height: 'auto',
        label: '报名截止',
      },
    },
    {
      field: 'phone',
      value: {
        type: 'input',
        height: 'auto',
        label: '报名截止',
      },
    },
  ];

  // return Form.create({ name: 'customized_form_controls' })(Demo);
  return <FormSegment value={value} items={items} />;
};
