import React from 'react';

import BasicLayout from '@/layouts/BasicLayout';
const Dashboard = React.lazy(() =>import('@/pages/Dashboard'));
const NotFound = React.lazy(() =>import('@/pages/NotFound'));
const Demo = React.lazy(() =>import('@/pages/Demo'));
const ErrorCode = React.lazy(() =>import('@/pages/Config/ErrorCode'));
const Business = React.lazy(() =>import('@/pages/Config/Business'));
const Dimension = React.lazy(() =>import('@/pages/Config/Dimension'));
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
        path: '/config/errorcode',
        component: ErrorCode,
      },
      {
        path: '/config/business',
        component: Business,
      },
      {
        path: '/config/dimension',
        component: Dimension,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
