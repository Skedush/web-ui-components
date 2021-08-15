import React, { Fragment, memo } from 'react';
import './index.less';
import Button from '../Button';
import classNames from 'classnames';

interface ButtonProps {
  customtype?: string;
  render?: Function;
  icon?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

interface ButtonGroupProps {
  actions: Array<ButtonProps | null>;
  titleVisible?: boolean;
  flexState?: 'left' | 'right' | 'center';
  title?: string;
}
const ButtonGroup = memo((props: ButtonGroupProps) => {
  const getAction = (actions: ButtonProps[]) => {
    if (!actions) {
      return;
    }
    if (!Array.isArray(actions)) {
      console.error('data of from action is not array');
      return null;
    }

    return actions.map((item, index) => {
      if (!item) {
        return;
      }
      const { title } = item;
      if (item.customtype === 'custom' && item.render) {
        return item.render();
      }

      return (
        <Button key={`actionBtn${index}`} {...item}>
          {title}
        </Button>
      );
    });
  };
  const { actions, titleVisible, title, flexState = 'left' } = props;
  if (!actions) {
    return null;
  }

  const actionsElements = getAction(actions);

  return (
    <Fragment>
      {titleVisible && <div className={'lidig-btn-group-GroupHeader'}>{title || '信息筛选'}</div>}
      <div
        className={classNames(
          'lidig-btn-group-actionWrapper',
          flexState === 'left' ? 'flexStart' : flexState === 'center' ? 'flexCenter' : 'flexEnd',
        )}
      >
        <div className={'lidig-btn-group-btnWrapper'}>{actionsElements}</div>
      </div>
    </Fragment>
  );
});

export default ButtonGroup;
