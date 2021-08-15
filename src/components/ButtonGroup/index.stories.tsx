import React from 'react';
// import { action } from '@storybook/addon-actions';
import { ButtonGroup } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const basic = () => {
  const actions: any = [
    {
      title: '提交',
      // loading: submitLoading,
      customtype: 'master',
      // onClick: this.submit,
    },
    {
      title: '关闭',
      customtype: 'second',
      // onClick: this.props.onCancel,
    },
  ];
  return <ButtonGroup actions={actions} titleVisible={true} />;
};
