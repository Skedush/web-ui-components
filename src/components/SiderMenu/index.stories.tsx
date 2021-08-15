import React from 'react';
import { SiderMenu } from '@/components';
// import { Router } from 'react-router';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';

export default {
  title: 'SiderMenu',
  component: SiderMenu,
  decorators: [withKnobs],
};

export const basic = () => {
  const defaultValue = [
    {
      id: 1,
      parentId: null,
      level: 1,
      name: '首页',
      icon: 'home',
      route: 'url/demo',
      children: [
        {
          id: 2,
          parentId: 1,
          level: 1,
          name: '首页2',
          icon: 'home',
          route: 'url/demo2',
          children: [],
        },
      ],
    },
  ];

  const routeList = object('routeList', defaultValue);
  const collapsed = boolean('collapsed', false);

  return <SiderMenu routeList={routeList} collapsed={collapsed} />;
};
