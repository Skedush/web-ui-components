import React from 'react';
import { TimePicker as AntdTimePicker } from 'antd';
import { TimePickerProps as AntdDatePickerProps } from 'antd/lib/time-picker';
import RangePicker from './RangePicker';

export interface TimePickerProps extends AntdDatePickerProps {}

const TimePicker = (props: TimePickerProps) => {
  return <AntdTimePicker {...props} />;
};

TimePicker.RangePicker = RangePicker;

export default TimePicker;
