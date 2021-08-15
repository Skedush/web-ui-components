import React from 'react';
import { Result as AntdResult } from 'antd';
import { ResultProps as AntdResultProps } from 'antd/lib/result';
export interface ResultProps extends AntdResultProps {}

const Result = (props: ResultProps) => {
  return <AntdResult {...props} />;
};
export default Result;
