export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '客户资料-table',
    icon: 'table',
    path: '/customerProfile',
    component:'./CustomerProfile'
  },
  {
    name: '客户资料-proTable',
    icon: 'table',
    path: '/customer_profile',
    component:'./CustomerProfile-useProtable'
  },
  {
    name: 'basic-list',
    icon: 'table',
    path: '/basic-list',
    component:'./BasicList'
  },
  {
    name: 'TestUseState',
    icon: 'crown',
    path: '/useStateFun',
    // 这里如果component给了值就会走这里的component，会导致一个页面有两个组件
    // component: './TestUseState',
    routes: [
      {
        path: '/useStateFun/clickPopup',
        name: '点击弹窗',
        icon: 'smile',
        component: './TestUseState/components/ClickPopup',
      },
      {
        path: '/useStateFun/clickOneDisplayOne',
        name: '点击显示对应的',
        icon: 'smile',
        component: './TestUseState/components/ClickOneDisplayOne',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
