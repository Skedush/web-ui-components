import React from 'react';
import { CheckboxGroup } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';
export default {
  title: 'CheckBoxGroup',
  component: CheckboxGroup,

  decorators: [withKnobs],
};

export const basic = () => {
  const CheckboxGroupProps = {
    options: [
      { value: '1', label: '报名中', color: '#108ee9' },
      { value: '2', label: '活动中', color: '#00ff33' },
      { value: '3', label: '报名截止', color: '#ff9900' },
      { value: '4', label: '未发布', color: '#9bd6ff' },
      { value: '5', label: '已结束', color: '#abbad1' },
    ],
    hasCheckAll: false,
    onChangeAll: () => console.log('111111'),
    onChange: () => console.log('222222'),
  };
  return <CheckboxGroup {...CheckboxGroupProps} />;
};
