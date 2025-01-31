// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: 'feedback',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'email',
  },
  {
    name: 'help',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'help',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'atm',
    children: [
      {
        name: '监控页',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    name: '图表页',
    path: '/chart',
    icon: 'picture',
    children: [
      {
        name: '基础图表',
        path: '/chart/basic',
      },
      {
        name: '通用图表',
        path: '/chart/general',
      },
    ],
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'calendar',
    children: [
      {
        name: '基础表格',
        path: '/table/basic',
      },
      {
        name: '通用表格',
        path: '/table/general',
      },
    ],
  },

  {
    name: '测试',
    path: '/demo',
    icon: 'calendar',
    children: [
      {
        name: '基础控件',
        path: '/demo/basic',
      },
      {
        name: '通用表格',
        path: '/demo/general',
      },
    ],
  },

  {
    name: '配置',
    path: '/config',
    icon: 'calendar',
    children: [
      {
        name: '错误',
        path: '/config/errorcode',
      },
      {
        name: '业务',
        path: '/config/business',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
