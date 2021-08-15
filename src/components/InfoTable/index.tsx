import React from 'react';
import './index.less';
import classNames from 'classnames';
import Descriptions from '../Descriptions';
const { Item } = Descriptions;

interface ChildProps {
  label: string;
  /*
   * 24等分每行
   */
  value: any;
  span?: number;
}
export interface InfoTableProps {
  list: ChildProps[];
  title?: string;
  className?: string;
}

const InfoTable = (props: InfoTableProps) => {
  const { list, className, title } = props;
  return (
    <Descriptions title={title} bordered className={classNames(className, 'infoTable')} column={24}>
      {list.map((item, index) => (
        <Item label={item.label} span={item.span} key={index}>
          {item.value}
        </Item>
      ))}
    </Descriptions>
  );
};

export default InfoTable;
