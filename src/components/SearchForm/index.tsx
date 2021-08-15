import React, { Fragment, CSSProperties, useState } from 'react';
import './index.less';
import classNames from 'classnames';
import Button from '../Button';
import Form, { FormProps } from '../Form';
import TreasureBox, { TreasureBoxProps } from '../TreasureBox';
import Col from '../Col';
import Row from '../Row';
import ExpandBtn from '../ExpandBtn';
import { chunk } from 'lodash';

const FormItem = Form.Item;
const DEFAULT_COLUMN_NUM_OF_ROW = 4;

interface SearchFormItem extends TreasureBoxProps {
  field: string;
  disabled?: boolean;
  onClick?: Function;
  initialValue?: any;
  formItemLayout?: any;
  validateTrigger?: string;
  getValueFromEvent?: (...arg) => any;
  trigger?: string;
  rules?: object[];
}

interface ButtonProps {
  customtype?: string;
  icon?: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

interface SearchFormProps extends FormProps {
  actions: ButtonProps[];
  items: SearchFormItem[];
  columnNumOfRow?: number;
  onGetFormRef?: Function;
  className?: string;
  style?: CSSProperties;
}

// eslint-disable-next-line max-lines-per-function
const SearchForm = (props: SearchFormProps) => {
  const [isExpandForm, setIsExpandForm] = useState(false);
  let columnNum = DEFAULT_COLUMN_NUM_OF_ROW;
  const [form] = Form.useForm();
  const { actions, items, className, style, columnNumOfRow, onGetFormRef, ...options } = props;
  let containerRef = React.createRef<HTMLDivElement>();
  if (items) {
    columnNum = columnNumOfRow || DEFAULT_COLUMN_NUM_OF_ROW;
    if (onGetFormRef) {
      onGetFormRef(form);
    }
  }

  const getRow = (items: SearchFormItem[], actions: ButtonProps[]) => {
    if (!Array.isArray(items)) {
      console.error('this data of page header is not array');
      return null;
    }

    const cpts = items.map((item, index) => {
      return getFormElement(item, index);
    });

    const actionsElements = getAction(actions);
    const chunks = chunk(cpts, columnNum);
    const rows = chunks.map((item, index) => {
      let actionCpts: React.ReactNode = null;

      if (!isExpandForm && index > 0) {
        return null;
      }

      if (index === 0) {
        actionCpts = (
          <Fragment>
            <Col md={4} sm={24}>
              <FormItem>
                <div className={'lidig-sf-btnWrapper'}>
                  <div className={'lidig-sf-btn'}>{actionsElements}</div>
                  {chunks.length > 1 && (
                    <ExpandBtn isExpand={isExpandForm} onClick={onClickExpandForm} />
                  )}
                </div>
              </FormItem>
            </Col>
          </Fragment>
        );
      }

      return (
        <Row
          key={`row${index}`}
          gutter={{ md: 24, lg: 24, xl: 24 }}
          justify={'start'}
          align={'middle'}
          className={'ld-search-row'}
        >
          {item}
          {actionCpts}
        </Row>
      );
    });

    return <Fragment>{rows}</Fragment>;
  };

  const getAction = (actions: ButtonProps[]) => {
    if (!Array.isArray(actions)) {
      console.error('data of from action is not array');
      return null;
    }

    return actions.map((item, index) => {
      const { title } = item;
      return (
        <Button key={`actionBtn${index}`} {...item}>
          {title}
        </Button>
      );
    });
  };

  // eslint-disable-next-line max-lines-per-function
  const getFormElement = (element: SearchFormItem, index: number) => {
    if (!element) {
      return null;
    }

    const {
      field,
      initialValue,
      trigger,
      rules,
      formItemLayout,
      valuePropName,
      validateTrigger,
      getValueFromEvent,
    } = element;
    const cpt = TreasureBox.getElement(element);

    return (
      <Col key={`element${index}`} md={Math.floor((24 - 4) / columnNum)} sm={24}>
        <FormItem
          initialValue={initialValue}
          name={field}
          rules={rules}
          valuePropName={valuePropName}
          validateTrigger={validateTrigger || 'onChange'}
          trigger={trigger || 'onChange'}
          getValueFromEvent={getValueFromEvent}
          {...formItemLayout}
        >
          {cpt}
        </FormItem>
      </Col>
    );
  };

  const onClickExpandForm = () => {
    setIsExpandForm(!isExpandForm);
  };
  if (!items) {
    return null;
  }
  if (!Array.isArray(items)) {
    console.error('this data of page header is not array');
    return null;
  }

  const rows = getRow(items, actions);

  return (
    <Fragment>
      <div
        style={style}
        className={classNames('lidig-sf-searchForm', 'lidig-sf-formWrapper', className)}
        ref={containerRef}
      >
        <Form {...options} autoComplete={'off'} form={form}>
          {rows}
        </Form>
      </div>
    </Fragment>
  );
};

export default SearchForm;
