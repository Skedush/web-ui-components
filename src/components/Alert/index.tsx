import { Alert as AntdAlert } from 'antd';
import { AlertProps as AntdAlertProps } from 'antd/lib/alert';
import React, { Component, ReactNode } from 'react';
import './index.less';

export interface AlertProps extends AntdAlertProps {
  beforeIcon?: ReactNode;
  messageTitle?: string;
}

class Alert extends Component<AlertProps> {
  renderMessage() {
    const { message, beforeIcon, messageTitle } = this.props;
    return (
      <div className={'lidig-alert-message'}>
        {beforeIcon && <div className={'lidig-alert-Img'}>{beforeIcon}</div>}
        {beforeIcon && <label className={'lidig-alert-messageTitle'}>{messageTitle}</label>}
        {message}
      </div>
    );
  }

  render() {
    return (
      <AntdAlert {...this.props} message={this.renderMessage()}>
        {this.props.children}
      </AntdAlert>
    );
  }
}

export default Alert;
