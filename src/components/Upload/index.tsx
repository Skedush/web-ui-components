import React, { Fragment, ReactElement, ReactNode, useState } from 'react';
import { Upload as AntdUpload } from 'antd';
import Gallery, { ViewType } from '../Gallery';
import classNames from 'classnames';
import './index.less';
import {
  UploadProps as AntdUploadProps,
  UploadChangeParam,
  UploadFile,
} from 'antd/lib/upload/interface';
import { getBase64 } from '@/utils';
import Button from '../Button';

const { Dragger } = AntdUpload;
export { UploadChangeParam, UploadFile };
export interface UploadProps extends AntdUploadProps {
  uploadType: 'file' | 'picture' | 'thumbnail';
  title?: string;
  fileList?: UploadFile[];
  maxFiles?: Number;
  textContent?: string | ReactElement;
  hiddenList?: boolean;
  icon?: ReactNode;
  onClick?: (event) => void;
}

// eslint-disable-next-line max-lines-per-function
const Upload = (props: UploadProps) => {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [images, setImages] = useState<Array<ViewType>>([]);
  const [fileList, setFileList] = useState<UploadFile[]>(props.fileList || []);

  let beforeUpload: any = (_file, FileList) => {
    return false;
  };
  if (props.beforeUpload) {
    beforeUpload = props.beforeUpload;
  }

  const onChange = (info: UploadChangeParam) => {
    setFileList(info.fileList);
    if (props.onChange) {
      props.onChange(info);
    }
  };

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file);
    }
    const images = [{ source: file.url || file.preview }];
    setImages(images);
    setPreviewVisible(previewVisible);
  };

  const handleClose = (previewVisible: boolean) => {
    setPreviewVisible(previewVisible);
  };

  const renderFile = () => {
    const { title, beforeUpload, hiddenList, ...option } = props;
    return (
      <AntdUpload
        className={hiddenList ? 'lidig-up-hiddenList' : ''}
        beforeUpload={beforeUpload}
        {...option}
      >
        <Button customtype={'master'}>{title}</Button>
      </AntdUpload>
    );
  };

  const renderPicture = () => {
    const {
      title,
      onChange,
      maxFiles = 1,
      beforeUpload,
      accept,
      onClick,
      icon,
      textContent,
      ...option
    } = props;
    const filesCount = (fileList && fileList.length) || 0;
    return (
      <Fragment>
        <Dragger
          className={classNames(
            { 'lidig-up-upload': true },
            { 'lidig-up-hidden': filesCount >= maxFiles },
          )}
          // className={styles.upload}
          accept={accept || '.jpg,.jpeg,.png,.bmp'}
          onChange={onChange}
          fileList={fileList}
          beforeUpload={beforeUpload}
          onPreview={handlePreview}
          listType={'picture-card'}
          {...option}
        >
          <div onClick={onClick}>
            {icon}
            <p className={'lidig-up-title'}>{title}</p>
            <p className={'lidig-up-subTitle'}>
              {textContent ||
                `(单击或拖放文件到此区域上传，最多上传${maxFiles}张，大小不能超过200KB)`}
            </p>
          </div>
        </Dragger>
        <Gallery images={images} isOpen={previewVisible} onClose={handleClose} />
      </Fragment>
    );
  };

  // 附件控件
  const renderThumbnail = () => {
    const { action, title, maxFiles = 1, ...option } = props;
    if (!action) {
      console.error('action is required');
      return <div />;
    }

    const uploadButton = (
      <div>
        <div className={'ant-upload-text'}>{title}</div>
      </div>
    );
    return (
      <AntdUpload
        {...option}
        action={action}
        listType={'picture-card'}
        fileList={fileList}
        beforeUpload={beforeUpload || (() => true)}
        onChange={onChange}
      >
        {fileList.length >= maxFiles ? null : uploadButton}
      </AntdUpload>
    );
  };

  const { uploadType } = props;
  let cpt;
  switch (uploadType) {
    case 'picture':
      cpt = renderPicture();
      break;

    case 'file':
      cpt = renderFile();
      break;

    case 'thumbnail':
      cpt = renderThumbnail();
      break;

    default:
      cpt = <div />;
      break;
  }

  return cpt;
};
export default Upload;
