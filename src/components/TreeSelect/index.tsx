import React from 'react';
import { TreeSelect as AntdTreeSelect, TreeSelectProps as AntdTreeSelectProps } from 'antd';
import { Tag } from '..';
import './index.less';
import classNames from 'classnames';

export interface TreeSelectProps extends AntdTreeSelectProps<any> {
  height: string;
  tagColor: string;
}

const TreeSelect = (props: TreeSelectProps) => {
  const {
    dropdownClassName,
    treeNodeFilterProp,
    allowClear,
    showCheckedStrategy,
    height,
    tagColor,
    ...options
  } = props;

  function tagRender(tagProps) {
    const { label, closable, onClose } = tagProps;

    return (
      <Tag color={tagColor} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
        {label}
      </Tag>
    );
  }
  return (
    <div className={'lidig-tree-select'}>
      <AntdTreeSelect
        {...options}
        style={{ height }}
        tagRender={tagRender}
        showCheckedStrategy={showCheckedStrategy || AntdTreeSelect.SHOW_ALL}
        allowClear={allowClear || true}
        treeNodeFilterProp={treeNodeFilterProp || 'title'}
        dropdownClassName={classNames('lidig-drop-down', dropdownClassName)}
      />
    </div>
  );
};

TreeSelect.TreeNode = AntdTreeSelect.TreeNode;
TreeSelect.SHOW_ALL = AntdTreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = AntdTreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = AntdTreeSelect.SHOW_CHILD;
export default TreeSelect;
