import { Descriptions as AntdDescriptions } from 'antd';
import { DescriptionsProps } from 'antd/lib/descriptions';
import { DescriptionsItemProps } from 'antd/lib/descriptions/Item';
import classNames from 'classnames';
import React from 'react';
import './index.less';

interface Props extends DescriptionsProps {
  labelCol?: {
    span: number;
  };
  wrapperCol?: {
    span: number;
  };
}

interface ItemProps extends DescriptionsItemProps {}

const Item = (props: ItemProps) => {
  const Item = AntdDescriptions.Item;
  return <Item {...props}>{props.children}</Item>;
};

const Descriptions = (props: Props) => {
  const { className, ...options } = props;
  return (
    <AntdDescriptions className={classNames(className, 'lidig-descriptions')} {...options}>
      {props.children}
    </AntdDescriptions>
  );
};
Descriptions.Item = Item;
export default Descriptions;
