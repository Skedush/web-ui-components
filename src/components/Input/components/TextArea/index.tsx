import React from 'react';
import { Input as AntdInput } from 'antd';
import { TextAreaProps as AntdTextAreaProps } from 'antd/lib/input/TextArea';
import './index.less';

const AntdTextArea = AntdInput.TextArea;
export interface TextAreaProps extends AntdTextAreaProps {}

const TextArea = (props: TextAreaProps) => {
  return (
    <div className={'lidig-textarea'}>
      <AntdTextArea maxLength={50} {...props} />
    </div>
  );
};
export default TextArea;
