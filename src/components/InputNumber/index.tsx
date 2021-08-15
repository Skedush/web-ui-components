import { InputNumber as AntdInputNumber } from 'antd';
import React from 'react';
import { InputNumberProps as AntdInputNumberProps } from 'antd/lib/input-number';
import './index.less';
import classNames from 'classnames';

export interface InputNumberProps extends AntdInputNumberProps {}

const InputNumber = (props: InputNumberProps) => {
  const { className, ...option } = props;
  return (
    <div className={classNames('input', className)}>
      <AntdInputNumber maxLength={50} {...option} />
    </div>
  );
};
export default InputNumber;
