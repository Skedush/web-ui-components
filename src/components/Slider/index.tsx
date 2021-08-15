import React from 'react';
import { Slider as AntdSlider } from 'antd';
import { SliderSingleProps, SliderRangeProps } from 'antd/lib/slider';
import './index.less';
import classNames from 'classnames';

export { SliderSingleProps, SliderRangeProps };
export type SliderProps = {} & (SliderSingleProps | SliderRangeProps);

const Slider = (props: SliderProps) => {
  const { className, ...options } = props;
  return (
    <div className={classNames('slider', className)}>
      <AntdSlider {...options} />
    </div>
  );
};

export default Slider;
