import React, { useState } from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import { RangePickerProps as AntdRangePickerProps } from 'antd/lib/date-picker';
import classNames from 'classnames';
import './RangePicker.less';
import moment, { Moment } from 'moment';
export type RangePickerProps = {
  monthsRange?: any[];
  timeBegin?: Moment;
  showTime: any;
} & AntdRangePickerProps;

export declare type RangePickerValue = Moment;
const AntdRangePicker = AntdDatePicker.RangePicker;

const RangePicker = (props: RangePickerProps) => {
  const [earlyTime, setEarlyTime] = useState(null);
  const {
    dropdownClassName,
    className,
    placeholder,
    suffixIcon,
    picker = 'date',
    showTime = true,
    ...options
  } = props;

  const onCalendarChange = dates => {
    if (dates && dates.length > 0) {
      setEarlyTime(dates[0]);
    } else {
      setEarlyTime(moment());
    }
  };

  let { monthsRange = [1, 3, 6, 12, 24, 36, '永久'], timeBegin = moment() } = props;

  timeBegin
    .set('hour', 0)
    .set('minute', 0)
    .set('second', 0);

  const rangesGroup: any = {};

  if (earlyTime) {
    timeBegin = earlyTime;
  }

  const timeEnd = moment(timeBegin)
    .add(1, 'day')
    .subtract(1, 'seconds');

  if (monthsRange) {
    monthsRange.forEach(item => {
      if (item === '永久') {
        rangesGroup[item] = [timeBegin, moment(timeEnd).add(100, 'year')];
      } else if (item < 12) {
        rangesGroup[item + '个月'] = [timeBegin, moment(timeEnd).add(item, 'months')];
      } else if (item >= 12) {
        rangesGroup[item / 12 + '年'] = [timeBegin, moment(timeEnd).add(item, 'months')];
      }
    });
  }

  return (
    <AntdRangePicker
      picker={picker}
      ranges={rangesGroup}
      placeholder={placeholder as [string, string]}
      showTime={
        showTime || {
          hideDisabledOptions: true,
          defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
        }
      }
      suffixIcon={suffixIcon}
      onCalendarChange={onCalendarChange}
      className={classNames('lidig-rp-rangePicker', className)}
      dropdownClassName={classNames('lidig-rp-rangePickerDropddwn', dropdownClassName)}
      {...options}
    />
  );
};

export default RangePicker;
