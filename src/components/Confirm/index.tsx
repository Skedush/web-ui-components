import React, { forwardRef, ReactElement, useImperativeHandle, useState } from 'react';
import Modal, { ModalProps } from '../Modal';
import Button from '../Button';
// import { Icon } from '@ant-design/compatible';
import { Icon } from '..';
import classNames from 'classnames';
import './index.less';

const { WarningOutlined, QuestionCircleOutlined, CheckCircleOutlined, InfoCircleOutlined } = Icon;

export interface ConfirmCurrent {
  open: (
    fun: Function,
    title?: string,
    content?: string | ReactElement,
    type?: string,
    onCancel?: Function,
  ) => void;
}

export interface ConfirmProps extends ModalProps {
  type?: string;
  visible?: boolean;
  title?: string;
  content?: string | ReactElement;
}

// eslint-disable-next-line max-lines-per-function
const Confirm = forwardRef((props: ConfirmProps, ref) => {
  const [title, setTitle] = useState<string>('');
  const [type, setType] = useState<string>('info');
  const [content, setContent] = useState<string | ReactElement>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [callback, setCallback] = useState<Function | undefined>(undefined);
  const [cancelCallback, setCancelCallback] = useState<Function | undefined>(undefined);

  useImperativeHandle(ref, () => ({
    open(
      fun: Function,
      title?: string,
      content?: string | ReactElement,
      type?: string,
      onCancel?: Function,
    ) {
      setTitle(title);
      setContent(content);
      setType(type);
      setVisible(true);
      setCallback(() => fun);
      setCancelCallback(() => onCancel);
    },
  }));

  const onOk = async () => {
    if (callback) {
      const result = callback();
      if (result instanceof Promise) {
        await result;
      }
    }
    await new Promise(resolve => {
      closeModal();
      setTimeout(resolve, 200);
    });
  };

  const onCancel = () => {
    closeModal();
  };
  const closeModal = () => {
    setVisible(false);

    if (cancelCallback) {
      cancelCallback();
    }
  };

  let icon = InfoCircleOutlined;
  let color = 'lidig-confirm-info';
  switch (type) {
    case 'warning':
      icon = WarningOutlined;
      color = 'lidig-confirm-warning';
      break;
    case 'question':
      icon = QuestionCircleOutlined;
      color = 'lidig-confirm-question';
      break;
    case 'success':
      icon = CheckCircleOutlined;
      color = 'lidig-confirm-success';
      break;
    case 'info':
      icon = InfoCircleOutlined;
      color = 'lidig-confirm-info';
      break;
    default:
      icon = InfoCircleOutlined;
      color = 'lidig-confirm-info';
      break;
  }
  const titleNode = (
    <div className={classNames('lidig-confirm-title', color)}>
      {React.createElement(icon, {
        className: color,
      })}
      <span className={'lidig-confirm-titleColor'}>{title || props.title}</span>
    </div>
  );
  return (
    <Modal
      title={titleNode}
      footer={null}
      visible={visible || props.visible}
      wrapClassName={'lidig-confirm-modal'}
      onCancel={onCancel}
      destroyOnClose
    >
      <div className={'lidig-confirm-content'}>{content || props.content}</div>
      <div className={classNames('lidig-confirm-buttonGroup')}>
        <Button customtype={'second'} onClick={onCancel}>
          {props.cancelText || '取消'}
        </Button>
        <Button customtype={'master'} onClick={onOk}>
          {props.okText || '确认'}
        </Button>
      </div>
    </Modal>
  );
});

export default Confirm;
