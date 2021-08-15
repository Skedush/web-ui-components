import React, { useState } from 'react';
import Menu from '../Menu';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { queryAncestors } from '@/utils/route';
import { RouteList } from '@/types';
import store from 'store';
import './index.less';

const { SubMenu } = Menu;

type OwnProps = {
  routeList: RouteList[];
  collapsed: boolean;
};

interface Props extends RouteComponentProps, OwnProps {}

const SiderMenu = (props: Props) => {
  const [openKeys, setOpenKeys] = useState(store.get('openKeys') || []);

  const renderMenus = data => {
    return data.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            key={item.id}
            title={
              <span>
                {item.icon}
                <span>{item.name}</span>
              </span>
            }
          >
            {renderMenus(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.id}>
          <NavLink to={item.route || '#'}>
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        </Menu.Item>
      );
    });
  };

  const { routeList, location, collapsed } = props;
  const selectedKeys = queryAncestors(routeList, location?.pathname).map(_ => _.id + '');
  const menuProps = collapsed
    ? {}
    : {
        openKeys,
      };

  const onOpenChange = openKeys => {
    const rootSubmenuKeys = routeList.filter(_ => !_.parentId).map(_ => _.id);

    const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);

    let newOpenKeys = openKeys;
    if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
      newOpenKeys = latestOpenKey ? [latestOpenKey] : [];
    }
    setOpenKeys(newOpenKeys);
    store.set('openKeys', newOpenKeys);
  };

  return (
    <Menu
      mode={'inline'}
      onOpenChange={onOpenChange}
      selectedKeys={selectedKeys}
      style={{ height: '100%', borderRight: 0 }}
      className={'menu'}
      {...menuProps}
    >
      {renderMenus(routeList)}
    </Menu>
  );
};

export default SiderMenu;
