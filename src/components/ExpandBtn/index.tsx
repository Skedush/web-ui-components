import React from 'react';
import { Icon } from '@ant-design/compatible';
import './index.less';

interface ExpandBtnProps {
  isExpand?: boolean;
  onClick?: Function;
}

const ExpandBtn = (props: ExpandBtnProps) => {
  const onClick = () => {
    const { onClick } = props;
    if (onClick) {
      onClick();
    }
  };
  const { isExpand } = props;
  const type = isExpand ? 'up' : 'down';
  const text = isExpand ? '收起' : '展开';

  return (
    <div className={'lidig-ebtn-container'} onClick={onClick}>
      <Icon type={type} />
      <span className={'lidig-ebtn-text'}>{text}</span>
    </div>
  );
};

export default ExpandBtn;
