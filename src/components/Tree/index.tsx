import React, { memo, useState } from 'react';
import { Tree as AntdTree } from 'antd';
import { TreeProps as AntdTreeProps } from 'antd/lib/tree';
import Input from '../Input';
import './index.less';
import classNames from 'classnames';
const { Search } = Input;
export interface TreeProps extends AntdTreeProps {
  search: boolean;
  value: { checked: string[]; halfChecked: string[] };
  onChange: (checked: any[] | { checked: any[]; halfChecked: any[] }) => void;
  includeHalfKeys: boolean;
  dataList: any[];
}
type Key = string | number;

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
// eslint-disable-next-line max-lines-per-function
const Tree = (props: TreeProps) => {
  const {
    className,
    height,
    value,
    treeData,
    dataList,
    onChange,
    expandedKeys,
    autoExpandParent = true,
    search = false,
    includeHalfKeys,
    ...options
  } = props;
  const [thisExpandedKeys, setThisExpandedKeys] = useState<Key[]>(expandedKeys);
  const [searchValue, setSearchValue] = useState<string>('');
  const [thisAutoExpandParent, setThisAutoExpandParent] = useState<boolean>(autoExpandParent);

  const onExpand = expandedKeys => {
    setThisExpandedKeys(expandedKeys);

    setThisAutoExpandParent(false);
  };

  const loop = data =>
    data.map(item => {
      const index = item.title.indexOf(searchValue);
      const beforeStr = item.title.substr(0, index);
      const afterStr = item.title.substr(index + searchValue.length);
      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="ld-tree-search-value">{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );
      if (item.children) {
        return { ...item, title, children: loop(item.children) };
      }

      return {
        title,
        key: item.key,
      };
    });

  const onSearchChange = e => {
    const { value } = e.target;
    const expandedKeys = dataList
      .map(item => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, treeData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);

    setSearchValue(value);
    setThisAutoExpandParent(true);
    setThisExpandedKeys(expandedKeys);
  };

  if (search) {
    return (
      <div>
        <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={onSearchChange} />
        <AntdTree
          className={classNames(className, 'lidig-tree')}
          style={{ height }}
          height={height}
          expandedKeys={thisExpandedKeys}
          checkedKeys={value}
          autoExpandParent={thisAutoExpandParent}
          treeData={loop(treeData)}
          onExpand={onExpand}
          onCheck={onChange}
          {...options}
        ></AntdTree>
      </div>
    );
  }

  return (
    <AntdTree
      className={classNames(className, 'lidig-tree')}
      style={{ height }}
      height={height}
      checkedKeys={value}
      treeData={treeData}
      onCheck={onChange}
      {...props}
    ></AntdTree>
  );
};
Tree.TreeNode = AntdTree.TreeNode;
Tree.DirectoryTree = AntdTree.DirectoryTree;

export default memo(Tree);
