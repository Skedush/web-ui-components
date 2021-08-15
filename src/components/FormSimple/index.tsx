import React, { Fragment, memo } from 'react';
import Form, { FormProps } from '../Form';
import { ColumnProps } from '../type';
import { Button, Col, Row } from '..';
import classNames from 'classnames';
import { ColProps } from 'antd/lib/col';
import TreasureBox, { TreasureBoxProps } from '../TreasureBox';
import './index.less';

const FormItem = Form.Item;

interface ButtonProps {
  customtype?: string;
  icon?: string;
  title?: any;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: React.MouseEventHandler<HTMLElement>;
  loading?: boolean;
}

export interface FormSimpleItem extends TreasureBoxProps {
  field?: string;
  colAlign?: 'right';
  label?: string;
  formItemLayout?: any;
  validateTrigger?: string;
  getValueFromEvent?: (...arg) => any;
  trigger?: string;
  disabled?: boolean;
  rules?: object[];
  columns?: ColumnProps<any>[];
}

export interface FormSimpleGroup {
  id?: string;
  label?: string;
  items: FormSimpleItem[];
}

export interface FormColConfig {
  left: ColProps;
  right: ColProps;
}

export interface FormSimpleProps extends FormProps {
  children?: any;
  groups: FormSimpleGroup[];
  actions?: ButtonProps[];
  formItemLayout?: any;
  colConfig?: FormColConfig;
  rowStyle?: any;
  onGetFormRef?: Function;
}

// eslint-disable-next-line max-lines-per-function
const FormSimple = memo((props: FormSimpleProps) => {
  const [form] = Form.useForm();
  const {
    groups,
    colConfig,
    actions,
    formItemLayout = {},
    className,
    onGetFormRef,
    ...options
  } = props;
  if (groups && onGetFormRef) {
    onGetFormRef(form);
  }

  const getAction = actions => {
    if (!actions) {
      return;
    }
    if (!Array.isArray(actions)) {
      console.error('data of from action is not array');
      return null;
    }
    const actionsElements = actions.map((item, index) => {
      const { title } = item;
      return (
        <Button key={`actionBtn${index}`} style={{ marginLeft: 10 }} {...item}>
          {title}
        </Button>
      );
    });
    return (
      <Col span={24} className={'lidig-form-simple-button-col'}>
        {actionsElements}
      </Col>
    );
  };

  const getGroup = (
    groups: FormSimpleGroup[],
    actions?: ButtonProps[],
    colConfig?: FormColConfig,
  ) => {
    // if (isEmpty(groups)) {
    //   return <div />;
    // }

    const cpts = groups.map((group, index) => {
      return (
        <Row key={group.label + index} className="lidig-group-elements" id={group.id}>
          {group.label ? <h1 className="lidig-group-item-title">{group.label}</h1> : ''}
          {getCol(group.items, colConfig)}
        </Row>
      );
    });
    const actionsCol = getAction(actions);
    return (
      <Fragment>
        {cpts}
        <Row>{actionsCol}</Row>
      </Fragment>
    );
  };

  const getCol = (items: FormSimpleItem[], colConfig?: FormColConfig) => {
    const { rowStyle = { padding: '16px 16px' } } = props;
    if (!Array.isArray(items)) {
      console.error('this data of page header is not array');
      return null;
    }
    const leftItems: any[] = [];
    const rightItems: any[] = [];

    items.forEach((item, index) => {
      if (item.colAlign === 'right') {
        rightItems.push(getFormElement(item, index));
      } else {
        leftItems.push(getFormElement(item, index));
      }
    });

    const rightCol = colConfig ? colConfig.right : {};
    const leftCol = colConfig ? colConfig.left : {};
    return (
      <Row style={rowStyle} justify={'center'}>
        {rightItems.length ? (
          <Col span={12} {...rightCol}>
            {leftItems}
          </Col>
        ) : (
          leftItems
        )}
        {rightItems.length ? (
          <Col span={12} {...leftCol}>
            {rightItems}
          </Col>
        ) : (
          ''
        )}
      </Row>
    );
  };

  const getFormElement = (element: FormSimpleItem, index: number) => {
    if (!element) {
      return null;
    }

    const {
      field,
      initialValue,
      validateTrigger,
      getValueFromEvent,
      trigger,
      rules,
      fill,
      span = 24,
      formItemLayout,
      valuePropName,
      label,
      tips,
      colStyle,
    } = element;

    const cpt = TreasureBox.getElement(element);

    const disabled = element.disabled;
    return (
      <Col
        key={`element${index}`}
        span={fill ? 24 : span}
        className={classNames(disabled ? 'lidig-form-simple-item' : '', 'lidig-form-item-col')}
        style={{
          padding: '0 8px',
          ...colStyle,
        }}
      >
        {field ? (
          <FormItem
            label={label}
            name={field}
            initialValue={initialValue}
            rules={rules}
            valuePropName={valuePropName}
            validateTrigger={validateTrigger || 'onChange'}
            trigger={trigger || 'onChange'}
            getValueFromEvent={getValueFromEvent}
            className={classNames(
              'lidig-form-item',
              formItemLayout ? formItemLayout.className : '',
              disabled ? 'lidig-form-simple-item-disabled' : '',
            )}
            {...formItemLayout}
          >
            {cpt}
          </FormItem>
        ) : (
          cpt
        )}
        {tips && <div className={'Ld-formSimple-remake'}>{tips}</div>}
      </Col>
    );
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let cols = getGroup(groups, actions, colConfig);
  return (
    <Form
      {...options}
      form={form}
      className={classNames(className)}
      labelAlign={'right'}
      {...formItemLayout}
      autoComplete={'off'}
    >
      <Row gutter={16} justify={'center'} style={{ marginLeft: '0', marginRight: '0' }}>
        {cols}
      </Row>
    </Form>
  );
});

export default FormSimple;
