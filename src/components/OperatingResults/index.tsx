import React, { Fragment } from 'react';
import './index.less';
import Modal, { ModalProps } from '../Modal';
import Icon from '../Icon';
import Col from '../Col';
import Row from '../Row';
import classNames from 'classnames';
import Confirm from '../Confirm';
const { InfoCircleOutlined } = Icon;

interface ResultsProps extends ModalProps {
  data?: { [propName: string]: any };
}

const OperatingResults = (props: ResultsProps) => {
  function renderResultsTitle() {
    return (
      <Fragment>
        <div>操作结果</div>
        <InfoCircleOutlined />
      </Fragment>
    );
  }

  const renderCol = () => {
    const data = props.data;
    const greaterThanOne = data && data.error > 1;
    const items: any = [];
    if (data && data.message) {
      const { message: content } = data;
      for (let i = 0, len = content.length; i < len; i++) {
        const o = {
          key: i + 1,
          reason: content[i],
        };
        items.push(o);
      }
    } else {
      return;
    }

    items.unshift({ key: '序号', reason: '失败原因' });
    return items.map((item, index) => {
      return (
        <Col span={24} key={`element${index + 1}`}>
          <div className={'lidig-or-infoField'}>
            {greaterThanOne && <div className={'lidig-or-fieldName'}>{item.key}</div>}
            <div className={'lidig-or-fieldValue'} title={item.reason}>
              {item.reason}
            </div>
          </div>
        </Col>
      );
    });
  };

  const { visible, onCancel, ...options } = props;
  const data = props.data;
  const greaterThanOne = data && data.error > 1;
  if (!greaterThanOne) {
    return (
      <Confirm
        visible={visible}
        title={'错误信息'}
        type={'warning'}
        content={data && data.message && data.message[0]}
        onCancel={onCancel}
      />
    );
  }

  return (
    <Modal
      wrapClassName={classNames('lidig-or-container', !greaterThanOne ? 'lidig-or-container2' : '')}
      centered
      title={renderResultsTitle()}
      footer={null}
      onCancel={onCancel}
      visible={visible}
      {...options}
    >
      {greaterThanOne && (
        <div className={'lidig-or-number'}>
          <div className={'lidig-or-fail'}>{data ? data.error : ''}</div>
          <div className={'lidig-or-total'}>/{data ? data.error + data.success : ''}</div>
        </div>
      )}
      {greaterThanOne && <div className={'lidig-or-text'}>操作结果失败数据</div>}
      <div className={'lidig-or-infoList'}>
        <Row>{renderCol()}</Row>
      </div>
    </Modal>
  );
};
export default OperatingResults;
