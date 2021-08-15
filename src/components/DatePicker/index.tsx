import React from 'react';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { DatePicker as AntdDatePicker } from 'antd';
import RangePicker, { RangePickerValue } from './RangePicker';
import {
  DatePickerProps as AntdDatePickerProps,
  RangePickerProps as AntdRangePickerProps,
} from 'antd/lib/date-picker';
import classNames from 'classnames';
import './index.less';
import moment from 'moment';

export type DatePickerProps = {} & AntdDatePickerProps;
export type RangePickerProps = {} & AntdRangePickerProps;
export { RangePickerValue };

const DatePicker = (props: DatePickerProps) => {
  const {
    dropdownClassName,
    className,
    placeholder,
    suffixIcon,
    picker = 'date',
    ...option
  } = props;
  return (
    <AntdDatePicker
      // {...this.props}
      picker={picker}
      placeholder={placeholder as string}
      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
      className={classNames('lidig-datepicker-datePicker', className)}
      dropdownClassName={classNames('lidig-datepicker-datePickerDropddwn', dropdownClassName)}
      suffixIcon={suffixIcon || <LegacyIcon type={'pm-calendar'} />}
      {...option}
    />
  );
};
DatePicker.RangePicker = RangePicker;

export default DatePicker;
