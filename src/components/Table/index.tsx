import React, { memo } from 'react';
import {
  Table as AntdTable,
  TableProps as AntdTableProps,
  TablePaginationConfig as PaginationConfig,
  TableColumnProps as ColumnProps,
} from 'antd';
import './index.less';
import CommonComponent from '../commonComponent';
import Icon from '../Icon';
export { PaginationConfig, ColumnProps };
const { CheckSquareOutlined } = Icon;

export interface TableProps<T> extends AntdTableProps<T> {
  type?: 'checkbox' | 'radio' | 'none';
  onSelectRow?: (selectedRowKeys: string[] | number[], selectedRows: T[]) => void;
  selectedRow?: any[];
}

// eslint-disable-next-line max-lines-per-function
const Table = memo((props: TableProps<any>) => {
  const getRowSelection = () => {
    const { type, selectedRow } = props;

    return {
      columnWidth: '60px',
      selectedRowKeys: selectedRow,
      onChange: onRowSelectionChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
      type: type === 'none' ? undefined : type,
    };
  };

  const getPaginationProps = () => {
    const { pagination, selectedRow, type } = props;
    const selectList = selectedRow;
    let paginationProps: typeof pagination = false;
    if (!pagination) return false;

    const showTotal = (total, range) => (
      <div className={'lidig-table-footer'}>
        {type === 'none' ? (
          <div className={'lidig-table-selectedNum'}>共{total}条数据</div>
        ) : (
          <div className={'lidig-table-selectedNum'}>
            <CheckSquareOutlined />
            已选中{selectList.length}项/共{total}条数据
          </div>
        )}
        <div>
          {` ${range[1] - range[0] + 1} 条/页`}
          {type && type !== 'none' ? `，共 ${total} 条` : ''}
        </div>
      </div>
    );

    paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
    };
    paginationProps.showTotal = paginationProps.showTotal || showTotal;
    return paginationProps;
  };

  const onRowSelectionChange = (selectedRowKeys, selectedRows) => {
    if (props.onSelectRow) {
      props.onSelectRow(selectedRowKeys, selectedRows);
    }
  };

  const onTableChange = (pagination, filters, sorter, extra) => {
    const { onChange } = props;
    if (onChange) {
      onChange(pagination, filters, sorter, extra);
    }
  };

  const { dataSource, loading, columns = [], rowKey, scroll, type, bordered, ...options } = props;

  const paginationProps = getPaginationProps();

  if (columns[0] && columns[0].title !== '序号' && paginationProps && paginationProps.current) {
    const width = '5%';
    columns.unshift({
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      width: width,
      render: (text: any, record: object, rowIndex) => {
        if (paginationProps.pageSize) {
          return CommonComponent.renderTableCol(
            rowIndex + 1 + (paginationProps.current - 1) * paginationProps.pageSize,
          );
        }
      },
    });
  }

  const rowSelection = getRowSelection();

  return (
    <div className={'lidig-table-container'}>
      <AntdTable
        {...options}
        bordered={bordered}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowClassName={() => 'ld-table-row'}
        onChange={onTableChange}
        pagination={paginationProps}
        rowKey={rowKey || 'id'}
        rowSelection={type === 'none' ? undefined : rowSelection}
        scroll={scroll || (dataSource && dataSource.length > 0 ? { y: '100%' } : undefined)}
      />
    </div>
  );
});

export default Table;
