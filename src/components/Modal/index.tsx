import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd';
import React from 'react';
import classNames from 'classnames';
import './index.less';

export interface ModalProps extends AntdModalProps {
  children?: any;
}

const Modal = (props: ModalProps) => {
  const {
    centered = true,
    wrapClassName,
    maskClosable = false,
    destroyOnClose = true,
    footer = null,
    children,
    ...options
  } = props;
  return (
    <AntdModal
      centered={centered}
      destroyOnClose={destroyOnClose}
      wrapClassName={classNames('lidig-modal-box', wrapClassName)}
      maskClosable={maskClosable}
      footer={footer}
      {...options}
    >
      {children}
    </AntdModal>
  );
};

export default Modal;
