import React, { PureComponent } from 'react';
import { Slider, InputNumber } from '..';
import { SliderProps, SliderSingleProps } from '../Slider';
import { InputNumberProps } from '../InputNumber';
import './index.less';
import classNames from 'classnames';

export type SliderInputProps = {
  precision?: number;
  isInt?: boolean;
  parser?: ((displayValue: string | undefined) => string | number) | undefined;
} & SliderProps;

type onInputNumberChange = InputNumberProps['onChange'];

const SliderInput = (props: SliderInputProps) => {
  const { className, value, min, max, parser, precision, isInt, ...options } = props;

  const onInputNumberChange = value => {
    if (value === null || value === '') {
      value = 0;
    } else if (typeof value === 'string') {
      try {
        value = value.split('.')[0];
        value = parseInt(value);
        if (isNaN(value)) {
          value = props.value;
        }
      } catch (error) {
        console.error('error: ', error);
        value = 0;
      }
    }
    if (isInt) {
      value = Math.round(value);
    }
    onChange(value);
  };

  const onChange = changedValue => {
    const { onChange } = props;
    if (onChange) {
      onChange(changedValue);
    }
  };

  const onSliderChange = value => {
    onChange(value);
  };

  return (
    <div className={classNames('lidig-sliderInput', className, 'flexAround', 'itemCenter')}>
      <Slider
        className={'slider'}
        value={value as number}
        min={min}
        max={max}
        {...(options as SliderSingleProps)}
        onChange={onSliderChange}
      />
      <InputNumber
        min={min}
        max={max}
        parser={parser}
        precision={precision}
        className={'inputNumber'}
        value={value as number}
        onChange={onInputNumberChange as onInputNumberChange}
      />
    </div>
  );
};

export default SliderInput;
