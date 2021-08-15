import React, { ReactNode, Props as ReactProps } from 'react';
import { message as AntdMessage } from 'antd';
import { Icon } from '@ant-design/compatible';
import './index.less';
import classNames from 'classnames';

interface Props extends ReactProps<any> {
  className?: string;
  icon?: ReactNode;
}

function BaseMessage(props: Props) {
  return (
    <div
      className={classNames('lidig-baseMessage', props.className)}
      style={{
        fontSize: '16px',
      }}
    >
      {props.icon}
      <label className={'lidig-textColor'}>{props.children}</label>
    </div>
  );
}

function Success(props) {
  return (
    <BaseMessage
      className={'lidig-success'}
      icon={
        <Icon
          style={{
            fontSize: '22px',
          }}
          type={'check-circle'}
          theme={'filled'}
        />
      }
    >
      {props.children}
    </BaseMessage>
  );
}

function Warning(props) {
  return (
    <BaseMessage
      className={'lidig-warning'}
      icon={
        <Icon
          style={{
            fontSize: '22px',
          }}
          type={'question-circle'}
          theme={'filled'}
        />
      }
    >
      {props.children}
    </BaseMessage>
  );
}

function Error(props) {
  return (
    <BaseMessage
      className={'lidig-error'}
      icon={
        <Icon
          style={{
            fontSize: '22px',
          }}
          type={'exclamation-circle'}
          theme={'filled'}
        />
      }
    >
      {props.children}
    </BaseMessage>
  );
}

function Loading(props) {
  return (
    <BaseMessage
      className={'lidig-loading'}
      icon={
        <Icon
          style={{
            fontSize: '22px',
          }}
          type={'loading'}
        />
      }
    >
      {props.children}
    </BaseMessage>
  );
}

export default {
  ...AntdMessage,
  success: (content, duration?: number, onClose?) => {
    return AntdMessage.success({
      content: <Success>{content}</Success>,
      duration,
      onClose,
      icon: <span />,
    });
  },
  warning: (content, duration?: number, onClose?) => {
    return AntdMessage.warning({
      content: <Warning>{content}</Warning>,
      duration,
      onClose,
      icon: <span />,
    });
  },
  error: (content, duration?: number, onClose?) => {
    return AntdMessage.error({
      content: <Error>{content}</Error>,
      duration,
      onClose,
      icon: <span />,
    });
  },
  loading: (content, duration?: number, onClose?) => {
    return AntdMessage.loading({
      content: <Loading>{content}</Loading>,
      duration,
      onClose,
      icon: <span />,
    });
  },
};
