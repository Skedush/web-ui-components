import React from 'react';
import { Radio as AntRadio, RadioProps as AntdRadioProps } from 'antd';
import './index.less';
import classNames from 'classnames';
import Group from '../RadioGroup';

export interface RadioProps extends AntdRadioProps {}

const Radio = (props: RadioProps) => {
  const { className } = props;
  return (
    <AntRadio className={classNames(className, 'lidig-radio')} {...props}>
      {props.children}
    </AntRadio>
  );
};

Radio.Group = Group;
Radio.Button = AntRadio.Button;
export default Radio;
