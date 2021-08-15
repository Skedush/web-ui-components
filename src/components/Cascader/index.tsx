// import { Cascader } from 'antd';
// export default Cascader;
import React, { memo } from 'react';
import { Cascader as AntdCascader } from 'antd';
import {
  CascaderProps as AntdCascaderProps,
  CascaderOptionType as AntdCascaderOptionType,
} from 'antd/lib/cascader';
import './index.less';
import classNames from 'classnames';
export interface CascaderOptionType extends AntdCascaderOptionType {}

export interface CascaderProps extends AntdCascaderProps {}

const Cascader = memo((props: CascaderProps) => {
  const { popupClassName, onChange, ...option } = props;
  return (
    <div className={'lidig-cascaderBox'}>
      <AntdCascader
        popupClassName={classNames(popupClassName, 'lidig-cascaderPopupDown')}
        onChange={onChange}
        {...option}
      />
    </div>
  );
});
export default Cascader;
