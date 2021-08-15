import React, { useState } from 'react';
import Img from 'react-image';
import './index.less';
import Gallery from '../Gallery';
import classNames from 'classnames';
// import defaultImg from '../assets/images/defaultuser.png';
// import defaultImg2 from '../assets/images/defaultImg2.png';
export interface ImgProps {
  image: string;
  previewImg?: boolean;
  onClick?: Function;
  defaultImg?: any;
  className?: any;
  type?: 'others';
  noDefaultImg?: boolean;
  galleryImage?: [];
}

const Image = (props: ImgProps) => {
  const [galleryImage, setGalleryImage] = useState([]);
  const [openImage, setOpenImage] = useState(false);

  const {
    image,
    defaultImg = 'lidig-Img-defaultImgClass',
    type,
    className,
    previewImg = false,
    noDefaultImg,
    ...option
  } = props;

  const onClick = e => {
    e.stopPropagation();
    props?.onClick(e);
  };

  const sendImage = (image, e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setGalleryImage([{ source: image }]);
    setOpenImage(true);
  };

  const handleClose = () => {
    setOpenImage(false);
  };

  const defaultImage = noDefaultImg ? '' : type === 'others' ? '' : defaultImg;
  return (
    <div className={classNames(className, 'lidig-img-box')} onClick={onClick}>
      <Img
        src={[image]}
        loader={<Img src={[defaultImage]} className={'lidig-img-image'} />}
        unloader={<Img src={[defaultImage]} className={'lidig-img-image'} />}
        onClick={previewImg ? e => sendImage(image || (defaultImage as string), e) : () => {}}
        className={classNames('lidig-img-image', className)}
        {...option}
      />
      <Gallery images={galleryImage} isOpen={openImage} onClose={handleClose} />
    </div>
  );
};

export default Image;
