import React from 'react';
import { Alert } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';
export default {
  title: 'Alert',
  component: Alert,

  decorators: [withKnobs],
};

export const basic = () => {
  return (
    <Alert
      showIcon
      // className={styles.firstLoginMessage}
      type={'error'}
      message={'为保障账户安全，建议修改登录帐号'}
    />
  );
};
