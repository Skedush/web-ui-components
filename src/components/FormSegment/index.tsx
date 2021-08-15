import React from 'react';
import { Row, Col } from '@/components';
import TreasureBox, {
  onInputChange,
  onTimePickerChange,
  onDatePickerChange,
  onSelectChange,
  onCascaderChange,
  TreasureBoxItem,
} from '../TreasureBox';
import './index.less';

interface Props {
  value?: Object;
  separator?: string;
  items: TreasureBoxItem[];
  onChange?: Function;
}

const FormSegment = (props: Props) => {
  const { onChange, value = [], separator = '-', items } = props;

  const getChangeEvent = (type: string) => {
    let onChange = null;
    switch (type) {
      case 'input':
        onChange = (e => e.target.value) as onInputChange;
        break;

      case 'timePicker':
        onChange = (time => time) as onTimePickerChange;
        break;

      case 'datePicker':
        onChange = (date => date) as onDatePickerChange;
        break;

      case 'select':
        onChange = (value => value) as onSelectChange;
        break;

      case 'cascader':
        onChange = (value => value) as onCascaderChange;
        break;

      default:
        onChange = (value => value) as any;
        break;
    }

    return onChange;
  };

  const handleChange = (newValue: any, key: string) => {
    triggerChange({ [key]: newValue });
  };

  const triggerChange = (changedValue: Object) => {
    if (onChange) {
      onChange({
        ...value,
        ...changedValue,
      });
    }
  };

  const cols = [];
  items.forEach((item, index) => {
    const key = item.field;
    const { type, span } = item.value;
    const onChange = getChangeEvent(type);
    cols.push(
      <Col key={`${key}${index}`} span={span}>
        {TreasureBox.getElement({
          ...item.value,
          span,
          value: value ? value[key] : null,
          onChange: (...args) => handleChange(onChange(...args), key),
        })}
      </Col>,
    );

    if (separator && index < items.length - 1) {
      cols.push(
        <Col span={1}>
          <div className={'lidig-from-segment-separator'}>{separator}</div>
        </Col>,
      );
    }
  });

  return <Row className={'lidig-form-segment'}>{cols}</Row>;
};

export default FormSegment;
