import React, { ChangeEvent, CSSProperties } from 'react';
import TimePicker from '../TimePicker';
import DatePicker, { RangePickerValue } from '../DatePicker';
import InputNumber from '../InputNumber';
import { CascaderOptionType } from '../Cascader';
import TreeSelect from '../TreeSelect';
import moment, { Moment } from 'moment';
import { UploadFile, UploadChangeParam } from '../Upload';
import {
  Img,
  Checkbox,
  Slider,
  RadioGroup,
  Cascader,
  Switch,
  Button,
  Select,
  Col,
  Radio,
  Upload,
  DynamicGroup,
  Tree,
  CheckboxGroup,
} from '..';
import Input from '../Input';
import { SliderProps } from '../Slider';
import RichTextEditor from '../RichTextEditor';
import FormSegment from '../FormSegment';
import './index.less';
import { RadioChangeEvent } from 'antd';

const TextArea = Input.TextArea;

export type onUploadChange = (info: UploadChangeParam) => void;
export type onTimePickerChange = (time: moment.Moment | null, timeString: string) => void;
export type onDatePickerChange = (date: moment.Moment | null, dateString: string) => void;
export type onRangePickerChange = (
  dates: [RangePickerValue, RangePickerValue],
  dateStrings: [string, string],
) => void;
export type onSelectChange = (value: string, option: object | object[]) => void;
export type onInputChange = (event: ChangeEvent<HTMLInputElement>) => void;
export type onInputNumberChange = (value: number | undefined) => void;
export type onRadioChange = (e: RadioChangeEvent) => void;
export type onCascaderChange = (value: string[], selectedOptions?: CascaderOptionType[]) => void;
export type onLoadCascaderData = (selectedOptions?: CascaderOptionType[]) => void;
export type onSliderChange = SliderProps['onChange'];

interface Children {
  key: any;
  value: string | number;
  label: string;
}

export interface TreasureBoxItem {
  field: string;
  value: TreasureBoxProps;
}

export interface TreasureBoxProps {
  type: string;
  placeholder?: string | string[] | [string, string] | undefined;
  onChange?:
    | onSelectChange
    | onTimePickerChange
    | onDatePickerChange
    | onRangePickerChange
    | onUploadChange
    | onCascaderChange
    | onRadioChange
    | onSliderChange;
  loadData?: onLoadCascaderData;
  fileList?: UploadFile[];
  children?: Children[];
  // CascaderOptions?: CascaderOptions[];
  initialValue?: any;
  hidden?: boolean;
  fill?: boolean;
  className?: string;
  timeBegin?: Moment;
  span?: number;
  separator?: string;
  monthsRange?: any[];
  height?: string;
  render?: () => any;
  colStyle?: CSSProperties;
  items?: TreasureBoxItem[];
  [propName: string]: any;
}

const TreasureBox = (props: TreasureBoxProps) => {};

// eslint-disable-next-line max-lines-per-function
TreasureBox.getElement = (element: TreasureBoxProps, index?: number) => {
  let cpt: React.ReactNode = null;
  const {
    type,
    initialValue,
    placeholder,
    children = [],
    hidden,
    fill,
    span = 12,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    field,
    onChange,
    colAlign,
    loadData,
    monthsRange,
    showTime,
    cascaderOption,
    render,
    beforeUpload,
    timeBegin,
    height,
    label,
    separator,
    colStyle,
    items,
    ...option
  } = element;
  if (hidden && type !== 'hiddenInput') {
    return null;
  }
  const colHeight = height || (TreasureBox.autoHeightList.indexOf(type) > -1 ? 'auto' : '83px');
  switch (type) {
    case 'input':
      cpt = <Input placeholder={placeholder as string} {...option} />;
      break;
    case 'password':
      cpt = <Input placeholder={placeholder as string} type={'password'} {...option} />;
      break;
    case 'number':
      cpt = <InputNumber placeholder={placeholder as string} {...option} />;
      break;
    case 'segment':
      cpt = <FormSegment separator={separator} items={items} />;
      break;
    case 'label':
      return (
        <Col
          key={`element${index}`}
          span={fill ? 24 : span}
          style={{
            height: colHeight,
            padding: '0 8px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {label}：{option.value}
        </Col>
      );
    case 'button':
      const { title } = element;
      return (
        <Col
          key={`element${index}`}
          span={fill ? 24 : span}
          style={{
            height: colHeight,
            padding: '28px 8px 0 8px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Button {...option}>{title}</Button>
        </Col>
      );
    case 'textArea':
      cpt = <TextArea placeholder={placeholder as string} {...option} />;
      break;
    case 'timePicker':
      cpt = <TimePicker placeholder={placeholder as string} {...option} />;
      break;
    case 'timeRangePicker':
      cpt = (
        <TimePicker.RangePicker
          onChange={onChange as onRangePickerChange}
          placeholder={placeholder as [string, string]}
          {...option}
        />
      );
      break;
    case 'datePicker':
      cpt = <DatePicker placeholder={placeholder as string} {...option} />;
      break;
    case 'rangePicker':
      cpt = (
        <DatePicker.RangePicker
          timeBegin={timeBegin}
          monthsRange={monthsRange}
          placeholder={placeholder as [string, string]}
          showTime={showTime}
          {...option}
        />
      );
      break;
    case 'upload':
      cpt = (
        <Upload uploadType={'picture'} title={'上传图片'} beforeUpload={beforeUpload} {...option} />
      );
      break;
    case 'img':
      cpt = <Img image={initialValue} className={'Ld-formSimple-image'} {...option} />;
      break;
    case 'select':
      cpt = <Select placeholder={placeholder} {...option}></Select>;
      break;
    case 'radio':
      const ary = children || [];
      const radios = ary.map(item => {
        const { key, value } = item;
        return (
          <Radio key={key} value={key}>
            {value}
          </Radio>
        );
      });
      cpt = <RadioGroup {...option}>{radios}</RadioGroup>;
      break;
    case 'radioButton':
      cpt = <RadioGroup onChange={onChange as onRadioChange} {...option} />;
      break;
    case 'cascader':
      cpt = (
        <Cascader
          options={cascaderOption as CascaderOptionType[]}
          placeholder={placeholder as string}
          loadData={loadData}
          {...option}
        />
      );
      break;
    case 'checkBoxGroup':
      cpt = <CheckboxGroup options={children as any} {...option} />;
      break;
    case 'checkBox':
      cpt = (
        <Checkbox defaultChecked={initialValue} {...option}>
          {label}
        </Checkbox>
      );
      break;
    case 'switch':
      cpt = (
        <Switch
          defaultChecked={initialValue}
          // eslint-disable-next-line no-undef
          onClick={onclick as any}
          {...option}
        />
      );
      break;
    case 'slider':
      cpt = <Slider {...option} />;
      break;
    case 'treeSelect':
      delete element.initialValue;
      delete element.colAlign;
      cpt = TreasureBox.getTreeSelect(element);
      break;
    case 'tree':
      delete element.initialValue;
      delete element.colAlign;
      cpt = TreasureBox.getTree(element);
      break;
    case 'custom':
      return (
        <Col
          key={`element${index}`}
          span={fill ? 24 : span}
          style={{ height: colHeight, padding: '0 8px', ...colStyle }}
        >
          {render ? render() : ''}
        </Col>
      );
    case 'dynamicGroup':
      cpt = <DynamicGroup items={items} {...option} />;
      break;
    case 'richText':
      cpt = <RichTextEditor placeholder={placeholder as string} {...option} />;
      break;
    default:
      break;
  }
  return cpt;
};

TreasureBox.getTree = element => {
  return <Tree {...element}></Tree>;
};
TreasureBox.getTreeSelect = element => {
  return <TreeSelect {...element}></TreeSelect>;
};
TreasureBox.autoHeightList = ['img', 'upload', 'textArea', 'treeSelect', 'dynamicGroup'];

export default TreasureBox;
