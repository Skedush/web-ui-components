import React from 'react';
import { TimePicker } from 'antd';
import { TimeRangePickerProps as AntdTimeRangePickerProps } from 'antd/lib/time-picker';
import './index.less';
import classNames from 'classnames';
const AntdRangePicker = TimePicker.RangePicker;

export interface TimeRangePickerProps extends AntdTimeRangePickerProps {}

const RangePicker = (props: TimeRangePickerProps) => {
  const { className, ...options } = props;
  return <AntdRangePicker {...options} className={classNames(className, 'ld-timerange-picker')} />;
};
export default RangePicker;
