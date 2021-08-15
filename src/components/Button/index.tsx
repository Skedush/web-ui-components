import React, { memo } from 'react';
import { Button as AntdButton, ButtonProps as AntButtonProps } from 'antd';
import { ButtonType } from 'antd/lib/button/button';
import './index.less';
import IconFont from '../IconFont';
import classNames from 'classnames';
import { tuple } from '@/utils/type';

export const customType = tuple('master', 'ghost', 'dashed', 'icon', 'second', 'reset', 'warning');

const isButtonType = (x: any): x is ButtonType => customType.includes(x);

export type ButtonProps = {
  customtype?: string;
  className?: string;
  beforeIcon?: string;
} & AntButtonProps;

const Button = memo((props: ButtonProps) => {
  const { customtype, className, loading, beforeIcon } = props;

  let cn = className;
  if (customtype && isButtonType(customtype)) {
    cn = className ? `${className} ${'lidig-btn-' + customtype}` : `${'lidig-btn-' + customtype}`;
  }
  return (
    <AntdButton {...props} loading={loading} onClick={props.onClick} className={classNames(cn)}>
      {beforeIcon && <IconFont type={beforeIcon} className={'lidig-btn-beforeIcon'} />}
      {props.children}
    </AntdButton>
  );
});

export default Button;
