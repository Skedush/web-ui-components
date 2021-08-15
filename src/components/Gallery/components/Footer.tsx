import React from 'react';
import '../index.less';
import { CommonProps } from 'react-images';
import { FooterProps } from '../index';

export interface Props {
  footer: FooterProps[] | React.ReactElement;
  components: CommonProps & Children;
}

interface Children {
  Caption: React.ComponentType<any>;
  Count: React.ComponentType<any>;
}

const Footer = (props: Props) => {
  const { footer, components } = props;
  const { Caption, Count } = components;
  return (
    <div className={'lidig-gallery-footer'}>
      <Caption {...props} />
      <div className={'lidig-gallery-footer-center'}>{footer}</div>
      <Count {...props} />
    </div>
  );
};

export default Footer;
