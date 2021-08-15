import React, { PureComponent } from 'react';
import { Tag as AntdTag, TagProps as AntdTagProps } from 'antd';

export interface TagProps extends AntdTagProps {}

const Tag = (props: TagProps) => {
  return <AntdTag {...props} />;
};

export default Tag;
