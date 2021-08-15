import React from 'react';
import { Row, Col, Button } from '@/components';
import './index.less';
import { cloneDeep } from 'lodash';
import TreasureBox, {
  TreasureBoxItem,
  onInputChange,
  onTimePickerChange,
  onDatePickerChange,
  onSelectChange,
  onCascaderChange,
} from '../TreasureBox';
import Icon from '../Icon';
const { MinusCircleOutlined } = Icon;

interface Props {
  /**
   * Form受控的value值
   */
  value?: Object[];
  /**
   * 具体控件属性
   */
  items: TreasureBoxItem[];
  /**
   * Form受控的onChange方法
   */
  onChange?: Function;
  /**
   * 是否自动处理添加和删除操作
   */
  auto?: boolean;
  /**
   * 添加回调
   */
  onAdd?: (value: Object[]) => void;
  /**
   * 删除回调
   */
  onRemove?: (value: Object[], index: number) => void;

  maxLength?: number;
}

// eslint-disable-next-line max-lines-per-function
const DynamicGroup = (props: Props) => {
  const { value = [], items, auto = true, onAdd, onRemove, onChange, maxLength = 10 } = props;

  /**
   * 根据不同的控件类型返回更新值的回调方法
   *
   * @param type 表单控件类型
   */
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

      case 'timeRangePicker':
        onChange = ((dates, dateStrings) => dates) as any;
        break;

      default:
        onChange = (value => value) as any;
        break;
    }

    return onChange;
  };

  const add = () => {
    if (onAdd) {
      onAdd(value);
      if (!auto) {
        return;
      }
    }

    const newValue = {};
    items.forEach(item => {
      newValue[item.field] = item.value.initialValue;
    });
    value.push(newValue);
    triggerChange(value);
  };

  const remove = (index: number) => {
    if (onRemove) {
      onRemove(value, index);
      if (!auto) {
        return;
      }
    }

    value.splice(index, 1);
    triggerChange(value);
  };

  const handleChange = (newValue: any, key: string, index: number) => {
    const valueClone = cloneDeep(value);
    valueClone[index][key] = newValue;
    triggerChange(valueClone);
  };

  const triggerChange = (changedValue: Object[]) => {
    const value = cloneDeep(changedValue);
    onChange?.(value);
  };

  const cpts = value.map((v, index) => {
    if (!v) {
      return;
    }
    const els = items.map((item, i) => {
      const key = item.field;
      const { type, span } = item.value;
      const onChange = getChangeEvent(type);
      return (
        <Col key={`${key}${index}${i}`} span={Math.floor((span / 24) * (24 - 4))}>
          {TreasureBox.getElement({
            ...item.value,
            span,
            value: v ? v[key] : null,
            onChange: (...args) => handleChange(onChange(...args), key, index),
          })}
        </Col>
      );
    });

    return (
      <Row gutter={[16, 12]} key={`${index}`} style={{ marginBottom: '10px' }}>
        {els}
        {index > 0 && (
          <Col span={4}>
            <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(index)} />
          </Col>
        )}
      </Row>
    );
  });

  return (
    <div>
      {cpts}
      {value.length < maxLength && (
        <Button type="dashed" onClick={add} style={{ width: '83%' }}>
          添加
        </Button>
      )}
    </div>
  );
};

export default DynamicGroup;
