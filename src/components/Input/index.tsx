import React from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import './index.less';
import { GroupProps as AntdGroupProps } from 'antd/lib/input';
import MyPassword from './components/Password';
import TextArea from './components/TextArea';

export interface InputProps extends AntdInputProps {}
export interface GroupProps extends AntdGroupProps {}
const Input = (props: InputProps) => {
  const { hidden } = props;
  let style = {};
  if (hidden) {
    style = { display: 'none' };
  }
  return (
    <div className={'lidig-input'} style={style}>
      <AntdInput maxLength={50} {...props} />
    </div>
  );
};

Input.Password = MyPassword;
Input.TextArea = TextArea;
Input.Group = AntdInput.Group;
Input.Search = AntdInput.Search;
export default Input;
