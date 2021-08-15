import React from 'react';
import { FormSimple } from '@/components';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'FormSimple',
  component: FormSimple,
  decorators: [withKnobs],
};

// eslint-disable-next-line max-lines-per-function
export const singleGroup = () => {
  const formItemLayout = {
    wrapperCol: {
      span: 18,
    },
    labelCol: {
      span: 6,
    },
  };
  let formRef = null;
  const options = {
    groups: [
      {
        label: '基础信息',
        items: [
          {
            type: 'select',
            children: [],
            field: 'licensePlateColor',
            formItemLayout,
            initialValue: '0',
            height: '60px',
            rules: [{ required: true, message: '请选择车牌颜色' }],
            span: 12,
            allowClear: false,
            onChange: () => console.log('111111'),
            label: '车牌颜色',
            maxLength: 10,
          },
          {
            type: 'input',
            field: 'spec',
            height: '60px',
            formItemLayout,
            label: '车型',
            maxLength: 10,
          },
          {
            type: 'input',
            field: 'color',
            height: '60px',
            formItemLayout,
            label: '颜色',
            maxLength: 10,
          },
          {
            type: 'textArea',
            field: 'remark',
            fill: true,
            formItemLayout: {
              wrapperCol: {
                span: 21,
              },
              labelCol: {
                span: 3,
              },
            },
            colStyle: { padding: '0 4px' },
            maxLength: 200,
            label: '备注内容',
          },
          {
            type: 'richText',
            field: 'desc',
            initialValue: 'aaaaa',
            placeholder: '请输入...',
            span: 24,
            label: '描述',
          },
        ],
      },
    ],
    actions: [
      { customtype: 'second', title: '上一步', onClick: () => console.log('2222') },
      {
        customtype: 'select',
        title: '提交',
        onClick: () => {
          formRef.validateFields((err, fieldsValue) => {
            console.log('fieldsValue: ', fieldsValue);
            if (err) {
            }
          });
        },
      },
    ],
    onGetFormRef: form => {
      formRef = form;
    },
  };

  return (
    <div style={{ width: '50%', height: '800px', overflow: 'auto' }}>
      <FormSimple {...options} />
      {/* <Anchor
        style={{ position: 'absolute', right: 0, top: 0, display: 'flex', flexDirection: 'column' }}
      >
        <Link href="#components-anchor-demo-1" title="1" />
        <Link href="#components-anchor-demo-2" title="2" />
        <Link href="#components-anchor-demo-3" title="3" />
        <Link href="#components-anchor-demo-4" title="4" />
      </Anchor>
      , */}
    </div>
  );
};

// eslint-disable-next-line max-lines-per-function
export const multipleGroup = () => {
  const formItemLayout = {
    wrapperCol: {
      span: 18,
    },
    labelCol: {
      span: 6,
    },
  };
  let formRef = null;
  const options = {
    groups: [
      {
        label: '基础信息',
        items: [
          {
            type: 'select',
            children: [],
            field: 'licensePlateColor',
            formItemLayout,
            initialValue: '0',
            height: '60px',
            rules: [{ required: true, message: '请选择车牌颜色' }],
            span: 12,
            allowClear: false,
            onChange: () => console.log('111111'),
            label: '车牌颜色',
            maxLength: 10,
          },
          {
            type: 'input',
            field: 'spec',
            height: '60px',
            formItemLayout,
            label: '车型',
            maxLength: 10,
          },
          {
            type: 'input',
            field: 'color',
            height: '60px',
            formItemLayout,
            label: '颜色',
            maxLength: 10,
          },
          {
            type: 'textArea',
            field: 'remark',
            fill: true,
            formItemLayout: {
              wrapperCol: {
                span: 21,
              },
              labelCol: {
                span: 3,
              },
            },
            colStyle: { padding: '0 4px' },
            maxLength: 200,
            label: '备注内容',
          },
        ],
      },
      {
        label: '动态添加',
        items: [
          {
            type: 'dynamicGroup',
            field: 'spec',
            // initialValue: [{ a: '1', b: '2' }],
            initialValue: [
              {
                time: [],
              },
            ],
            onAdd: value => {
              console.log(value);
            },
            onRemove: index => {
              console.log(index);
            },
            items: [
              {
                field: 'time',
                value: {
                  span: 24,
                  initialValue: [],
                  type: 'timeRangePicker',
                },
              },
              // {
              //   field: 'a',
              //   value: {
              //     type: 'input',
              //     initialValue: 'wdw',
              //     span: 12,
              //   },
              // },
              // {
              //   field: 'b',
              //   value: {
              //     type: 'number',
              //     initialValue: '13681812640',
              //     span: 12,
              //   },
              // },
            ],
            // formItemLayout,
            label: '车型',
            span: 24,
          },
        ],
      },
      {
        label: '基础信息2',
        items: [
          {
            type: 'input',
            field: 'type',
            initialValue: '',
            disabled: true,
            children: [],
            label: '车辆类型',
            formItemLayout,
            span: 12,
            rules: [{ required: true, message: '车辆类型不能为空！' }],
          },
          // {
          //   type: 'number',
          //   field: 'customizeDay',
          //   span: 8,
          //   disabled: false,
          //   maxLength: 9,
          //   min: 1,
          //   initialValue: '',
          //   placeholder: '自定义天数',
          //   rules: [{ required: true, message: '请输入自定义天数!' }],
          // },
          {
            disabled: true,
            initialValue: '',
            type: 'input',
            formItemLayout,
            field: 'ownerPhone',
            label: '联系电话',
            span: 12,
            rules: [{ required: true, message: '请选择关联人员！' }],
          },
          {
            type: 'select',
            children: [],
            field: 'licensePlateColor',
            formItemLayout,
            initialValue: '0',
            height: '60px',
            rules: [{ required: true, message: '请选择车牌颜色' }],
            span: 12,
            allowClear: false,
            onChange: () => console.log('111111'),
            label: '车牌颜色',
            maxLength: 10,
          },
          // this.getCarPlateItem(),
          {
            type: 'segment',
            field: 'brand',
            formItemLayout,
            height: '60px',
            label: '品牌',
            separator: '-',
            span: 12,
            initialValue: null,
            rules: [
              {
                validator: (rule, value, callback) => {
                  if (value && value.name > 0 && value.phone > 0) {
                    return callback();
                  }
                  // eslint-disable-next-line standard/no-callback-literal
                  callback('Price must greater than zero!');
                },
              },
            ],
            items: [
              {
                field: 'name',
                value: {
                  type: 'input',
                  initialValue: 'wdw',
                  span: 11,
                },
              },
              {
                field: 'phone',
                value: {
                  type: 'number',
                  initialValue: '13681812640',
                  span: 12,
                },
              },
            ],
          },
          {
            type: 'input',
            field: 'color',
            height: '60px',
            formItemLayout,
            label: '颜色',
            maxLength: 10,
          },
          {
            type: 'textArea',
            field: 'remark',
            fill: true,
            formItemLayout: {
              wrapperCol: {
                span: 21,
              },
              labelCol: {
                span: 3,
              },
            },
            colStyle: { padding: '0 4px' },
            maxLength: 200,
            label: '备注内容',
          },
        ],
      },
    ],
    actions: [
      {
        customtype: 'second',
        title: '上一步',
        onClick: () => {
          formRef.validateFields((err, fieldsValue) => {
            console.log('fieldsValue: ', fieldsValue);
            if (err) {
            }
          });
        },
      },
      {
        customtype: 'select',
        title: '下一步',
        htmlType: 'submit' as 'submit',
      },
    ],
    onGetFormRef: form => {
      formRef = form;
    },
  };

  return (
    <div style={{ width: '50%', height: '800px', overflow: 'auto' }}>
      <FormSimple {...options} />
      {/* <Anchor
        style={{ position: 'absolute', right: 0, top: 0, display: 'flex', flexDirection: 'column' }}
      >
        <Link href="#components-anchor-demo-1" title="1" />
        <Link href="#components-anchor-demo-2" title="2" />
        <Link href="#components-anchor-demo-3" title="3" />
        <Link href="#components-anchor-demo-4" title="4" />
      </Anchor>
      , */}
    </div>
  );
};
