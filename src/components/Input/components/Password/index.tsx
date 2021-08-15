import React from 'react';
import { Input as AntdInput } from 'antd';
import { PasswordProps as AntdPasswordProps } from 'antd/lib/input/Password';
import './index.less';

const AntdPassword = AntdInput.Password;
export interface PasswordProps extends AntdPasswordProps {}

const Password = (props: PasswordProps) => {
  return (
    <div className={'lidig-password'}>
      <AntdPassword maxLength={50} {...props} />
    </div>
  );
};
export default Password;
