import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { Modal, Button } from '@/components';

export default {
  title: 'Modal',
  component: Modal,
};

export function Basic() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setModalVisible(true);
        }}
      >
        Toggle Modal
      </Button>
      <Modal
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        onOk={() => {
          setModalVisible(false);
        }}
      >
        This is a Modal
      </Modal>
    </div>
  );
}
