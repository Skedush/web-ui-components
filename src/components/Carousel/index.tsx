import { Carousel as AntdCarousel } from 'antd';
import React, { PureComponent } from 'react';
import { CarouselProps as AntCarouselProps } from 'antd/lib/carousel';

export interface CarouselProps extends AntCarouselProps {}

class Carousel extends PureComponent<CarouselProps> {
  carouselRef = React.createRef<any>();

  next() {
    if (this.carouselRef) {
      this.carouselRef.current.next();
    }
  }

  prev() {
    if (this.carouselRef) {
      this.carouselRef.current.prev();
    }
  }

  render() {
    return (
      <AntdCarousel ref={this.carouselRef} {...this.props}>
        {this.props.children}
      </AntdCarousel>
    );
  }
}
export default Carousel;
