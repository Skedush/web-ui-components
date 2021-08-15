import React from 'react';
import { PageHeader as AntdPageHeader } from 'antd';
import { PageHeaderProps as AntdPageHeaderProps } from 'antd/lib/page-header';
// import styles from './index.less';
// import classNames from 'classnames';

export interface PageHeaderProps extends AntdPageHeaderProps {}

const PageHeader = (props: PageHeaderProps) => {
  return <AntdPageHeader {...props} />;
};
export default PageHeader;
