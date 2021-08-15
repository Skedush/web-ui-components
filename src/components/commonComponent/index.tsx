import React from 'react';
import { Spin, Tooltip, Dropdown, Menu, Icon, Badge } from '../index';
import './index.less';
import { ButtonProps } from '../type';
import Button from '../Button';
import classNames from 'classnames';
const { CaretDownOutlined } = Icon;

const defaultOptions: CommonComponentProps = {
  delay: 500,
  size: 'default',
};
type CommonComponentProps = {
  delay: number;
  size: 'default' | 'small' | 'large' | undefined;
};

class CommonComponent {
  static renderLoading(options = defaultOptions) {
    return (
      <div className={'lidig-componentLoading'}>
        <Spin {...defaultOptions} {...options} />
      </div>
    );
  }

  static renderTableCol(text: any) {
    return (
      <div
        className={'lidig-overflow-hidden'}
        style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}
      >
        {text}
      </div>
    );
  }

  static renderTableOverFlowHidden(text: any) {
    return (
      <div
        className={'lidig-overflow-hidden'}
        style={{
          wordWrap: 'break-word',
          wordBreak: 'break-all',
        }}
      >
        <Tooltip placement={'top'} title={text}>
          {text}
        </Tooltip>
      </div>
    );
  }

  static renderTableImgCol(text: any) {
    return (
      <div style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
        <img className={'lidig-componentImg'} src={text} />
      </div>
    );
  }

  static renderMoreOperate(btnList: ButtonProps[], showNum: number = 2) {
    const first = showNum === btnList.length ? btnList : btnList.filter((v, i) => i < showNum - 1);
    const back = showNum === btnList.length ? [] : btnList.filter((v, i) => i >= showNum - 1);
    const menu = (
      <Menu>
        {back.map((prop, i) => (
          <Menu.Item key={i} onClick={prop.onClick as any}>
            {prop.icon}
            {prop.title}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <div className={classNames('lidig-componentOperate', 'flexCenter', 'itemCenter')}>
        {first.map((props, i) => (
          <Button key={i} {...props}>
            {props.title}
          </Button>
        ))}
        {back.length ? (
          <Dropdown
            overlay={menu}
            placement={'bottomCenter'}
            overlayClassName={'lidig-componentDropdownOverlay'}
            trigger={['click']}
          >
            <span className={classNames('flexCenter', 'itemCenter')}>
              <span className={'lidig-componentmore'}>更多</span>
              <CaretDownOutlined className={'lidig-componentmoreIcon'} />
            </span>
          </Dropdown>
        ) : null}
      </div>
    );
  }

  static renderConfigCloseMask(modelName: string, tips: string, onClick: any) {
    return (
      <div className={'lidig-omponentConfigMask'}>
        <div className={'lidig-componentMaskTitle'}>[{modelName}]未启用</div>
        <div className={'lidig-componentContent'}>
          {modelName}未启用，请前往启用
          <br />
          {tips}
        </div>
        <Button customtype={'master'} onClick={onClick}>
          立即前往
        </Button>
      </div>
    );
  }

  static renderTableBadgeCol(text: any, color: string) {
    return (
      <div style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
        <Badge color={color} />
        {text}
      </div>
    );
  }
}

export default CommonComponent;
