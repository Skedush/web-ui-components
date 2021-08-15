import React, { memo, ReactNode } from 'react';
import './index.less';
import { FormSimpleProps } from '../FormSimple';
import { ModalProps } from '../Modal';
import { FormSimple, Modal } from '..';

export interface ModalFormProps extends FormSimpleProps, ModalProps {
  modalTitle: ReactNode | string;
  title?: string;
  formClassName?: string;
}

const ModalForm = memo((props: ModalFormProps) => {
  const {
    groups,
    actions,
    formItemLayout,
    colConfig,
    onGetFormRef,
    onFinish,
    modalTitle,
    footer = null,
    wrapClassName,
    formClassName,
    ...options
  } = props;
  const formProps = {
    groups,
    actions,
    colConfig,
    onFinish,
    onGetFormRef,
    formItemLayout,
  };

  return (
    <Modal {...options} centered footer={footer} title={modalTitle} wrapClassName={wrapClassName}>
      <FormSimple {...formProps} className={formClassName} />
    </Modal>
  );
});

export default ModalForm;
