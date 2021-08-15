import React, { PureComponent } from 'react';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';
import Button from '../Button';
import Footer from './components/Footer';
import FooterCaption from './components/FooterCaption';
import FooterCount from './components/FooterCount';
import './index.less';
// import {Props} from "./components/Footer";

export { ViewType } from 'react-images';

interface GalleryProps {
  images: Array<ViewType>;
  isOpen: boolean;
  onClose?: Function;
  footer?: FooterProps[] | React.ReactElement;
  onViewChange?: (view: number) => void;
}

export interface FooterProps {
  name: string;
  type: string;
  callback: Function;
}

interface GalleryState {
  currentIndex: number;
}

class Gallery extends PureComponent<GalleryProps, GalleryState> {
  constructor(props: GalleryProps) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  renderFooter = props => {
    const footer = this.props.footer;
    const currentIndex = this.state.currentIndex;
    if (Array.isArray(footer)) {
      const footerArr = footer.map(current => {
        const clickTrigger = e => {
          e.stopPropagation();
          current.callback(currentIndex);
        };
        return (
          <Button
            customtype={current.type}
            onClick={clickTrigger}
            key={current.name}
            className={'lidig-gallery-footer-center-items '}
          >
            {current.name}
          </Button>
        );
      });
      return <Footer footer={footerArr} {...props} />;
    }
    return <Footer footer={footer} {...props} />;
  };

  render() {
    const { images, isOpen } = this.props;
    const styleFn = styleObj => ({ ...styleObj, zIndex: 1000 });
    const viewChange = currentIndex => {
      this.setState({ currentIndex });
      if (this.props.onViewChange) {
        this.props.onViewChange(currentIndex);
      }
    };
    return (
      <ModalGateway>
        {isOpen ? (
          <Modal
            onClose={this.handleClose}
            closeOnBackdropClick={true}
            styles={{ blanket: styleFn, positioner: styleFn }}
          >
            <Carousel
              views={images}
              currentIndex={this.state.currentIndex}
              components={{ Footer: this.renderFooter, FooterCaption, FooterCount }}
              trackProps={{ onViewChange: viewChange }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }

  handleClose = e => {
    e.stopPropagation();
    this.props?.onClose(e);
  };
}

export default Gallery;
