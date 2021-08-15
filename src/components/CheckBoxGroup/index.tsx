import React, { PureComponent } from 'react';
import Checkbox, {
  CheckboxProps,
  CheckboxGroupProps as AntCheckboxGroupProps,
  CheckboxChangeEvent,
} from '../Checkbox';
import './index.less';

import classNames from 'classnames';
const { Group } = Checkbox;

export type CheckboxGroupProps = CheckboxProps &
  AntCheckboxGroupProps & {
    hasCheckAll?: boolean;
    onChangeAll?: (e: CheckboxChangeEvent) => void;
    checkAll?: boolean;
  };

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    options,
    disabled,
    autoFocus,
    defaultChecked,
    defaultValue,
    name,
    indeterminate,
    onChangeAll,
    checkAll,
    value,
    onChange,
    hasCheckAll = false,
  } = props;

  return (
    <div className={classNames('lidig-checkbox-group', 'flexStart', 'itemCenter')}>
      {hasCheckAll && (
        <div className={classNames('lidig-checkbox-all')}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onChangeAll}
            checked={checkAll}
            disabled={disabled}
            autoFocus={autoFocus}
            defaultChecked={defaultChecked}
          >
            全部
          </Checkbox>
        </div>
      )}
      <div className={classNames('lidig-group')}>
        <Group
          disabled={disabled}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          options={options}
          name={name}
        ></Group>
      </div>
    </div>
  );
};
export default CheckboxGroup;
