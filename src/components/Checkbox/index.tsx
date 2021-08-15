import React from 'react';
import { Checkbox as AntdCheckbox, CheckboxProps as AntdCheckboxProps } from 'antd';
import './index.less';
import {
  CheckboxGroupProps as AntdCheckboxGroupProps,
  CheckboxChangeEvent as AntCheckboxChangeEvent,
} from 'antd/lib/checkbox';

export interface CheckboxChangeEvent extends AntCheckboxChangeEvent {}
export interface CheckboxProps extends AntdCheckboxProps {}
export interface CheckboxGroupProps extends AntdCheckboxGroupProps {}
const Checkbox = (props: CheckboxProps) => {
  return (
    <div className={'checkbox'}>
      <AntdCheckbox {...props} />
    </div>
  );
};
Checkbox.Group = AntdCheckbox.Group;
export default Checkbox;
