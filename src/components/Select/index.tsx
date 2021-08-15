import React from 'react';
import { Select as AntdSelect, SelectProps as AntdSelectProps } from 'antd';
import { OptionProps as AntdOptionProps } from 'antd/lib/select';
import './index.less';
import classNames from 'classnames';

export interface OptionProps extends AntdOptionProps {}
export interface SelectProps extends AntdSelectProps<string> {}

const Select = (props: SelectProps) => {
  const filterOptionDefault = () => {
    if (props.onSearch) {
      return true;
    } else {
      // return PinyinMatch.match(props.children, inputValue);
    }
  };

  const {
    dropdownClassName,
    showSearch = true,
    optionFilterProp = 'label',
    filterOption,
    className,
    allowClear,
    ...options
  } = props;
  return (
    <div className={classNames('lidig-select-selectBox', className)}>
      <AntdSelect
        allowClear={typeof allowClear === 'boolean' ? allowClear : true}
        showSearch={showSearch}
        filterOption={typeof filterOption === 'boolean' ? filterOption : filterOptionDefault}
        optionFilterProp={optionFilterProp}
        dropdownClassName={classNames('lidig-select-option', dropdownClassName)}
        {...options}
      />
    </div>
  );
};

Select.Option = AntdSelect.Option;

export default Select;
