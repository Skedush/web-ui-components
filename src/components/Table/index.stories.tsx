import React from 'react';
import { PaginationConfig } from '@/components/type';
import { Table } from '@/components';

export default {
  title: 'Table',
  component: Table,
};

const data = {
  content: [
    {
      id: 1,
      type: 'string',
      typeStr: 'string',
      name: 'string',
      address: 'string',
      buildUnit: 'string',
      buildUnitStr: 'string',
      buildDate: '2019-09-05T09:00:57.755Z',
      operator: 'string',
      operatorStr: 'string',
      operatorPhone: 'string',
      status: 'string',
      statusStr: 'string',
    },
  ],
  pageable: {
    sort: {
      sorted: true,
      unsorted: false,
      empty: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 10,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalPages: 1,
  totalElements: 21,
  size: 10,
  number: 0,
  sort: {
    sorted: true,
    unsorted: false,
    empty: false,
  },
  numberOfElements: 21,
  first: true,
  empty: false,
};
// eslint-disable-next-line max-lines-per-function
export function Basic() {
  const columns = [
    {
      title: '活动标题',
      // width: SINGLE_COLUMN_WIDTH,
      dataIndex: 'name',
      key: 'name',
      // render: (text: any, record: object) => CommonComponent.renderTableCol(text, record),
    },
    {
      title: '举办方',
      dataIndex: 'typeStr',
      key: 'typeStr',
      // width: SINGLE_COLUMN_WIDTH,
      // render: (text: any, record: object) => CommonComponent.renderTableCol(text, record),
    },

    {
      title: '报名时间',
      // width: DOUBLE_COLUMN_WIDTH,
      dataIndex: 'address',
      key: 'address',
      // render: (text: any, record: object) => CommonComponent.renderTableCol(text, record),
    },
    {
      title: '活动时间',
      // width: SINGLE_COLUMN_WIDTH,
      key: 'buildUnitStr',
      dataIndex: 'buildUnitStr',
      // render: (text: any, record: object) => CommonComponent.renderTableCol(text, record),
    },
    {
      title: '人数限制',
      // width: SINGLE_COLUMN_WIDTH,
      key: 'operatorStr',
      dataIndex: 'operatorStr',
      // render: (text: any, record: object) => CommonComponent.renderTableCol(text, record),
    },
    {
      title: '报名人数',
      // width: SINGLE_COLUMN_WIDTH,
      key: 'buildDate',
      dataIndex: 'buildDate',
      // render: (text: any, record: object) => CommonComponent.renderTableCol(text, record),
    },
  ];
  const pagination: PaginationConfig = {
    position: 'bottom',
    total: data.totalElements,
    current: data.pageable.pageNumber + 1,
    pageSize: data.pageable.pageSize,
    defaultCurrent: 1,
  };
  return (
    <div className={'flexAuto'}>
      <Table
        columns={columns}
        dataSource={data.content}
        scroll={{ y: '100%' }}
        pagination={pagination}
        // onSelectRow={this.onTableSelectRow}
        // onChange={this.onTableChange}
        // loading={getDeviceDoorLoading}
        // selectedRow={selectedRowKeys}
      />
    </div>
  );
}
