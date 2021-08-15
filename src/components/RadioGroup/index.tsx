import React from 'react';
import { Radio, RadioGroupProps as ANtdRadioGroupProps } from 'antd';
import classNames from 'classnames';
import './index.less';
const AntdGroup = Radio.Group;
export interface RadioGroupProps extends ANtdRadioGroupProps {
  customType?: 'border';
}

const Group = (props: RadioGroupProps) => {
  const { children, className, customType } = props;
  const classNameList: any[] = [];
  if (customType === 'border') {
    classNameList.push('lidig-or-border');
  }
  return (
    <AntdGroup {...props} className={classNames(className, 'lidig-radio-group', ...classNameList)}>
      {children}
    </AntdGroup>
  );
};

export default Group;
