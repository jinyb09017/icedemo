import React from 'react';

import BasicLayout from '@/layouts/BasicLayout';

const Dashboard = React.lazy(() =>import('@/pages/Dashboard'));
const NotFound = React.lazy(() =>import('@/pages/NotFound'));
const Demo = React.lazy(() =>import('@/pages/Demo'));
const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/demo/basic',
        component: Demo,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
