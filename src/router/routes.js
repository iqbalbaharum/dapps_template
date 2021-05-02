import MainLayout from './../layouts/MainLayout'

const routes = [
  {
    path: '/',
    component: MainLayout,
    meta: {
      access: 'public'
    },
    children: [
      {
        path: '/public',
        meta: {
          title: '',
          position: '',
          icon: '',
          roles: []
        },
        component: () => import('pages/Index.vue')
      },
      {
        path: '/pools',
        meta: {
          title: 'Pools',
          position: 'header',
          icon: '',
          roles: []
        },
        component: () => import('pages/Pools.vue')
      },
      {
        path: '/gems',
        meta: {
          title: 'RD Gems',
          position: 'header',
          icon: '',
          roles: []
        },
        component: () => import('pages/Gems.vue')
      },
      {
        path: '/project/:id',
        meta: {
          title: '',
          position: '',
          icon: '',
          roles: []
        },
        component: () => import('src/pages/project/Index.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    meta: {
      access: 'public'
    },
    component: () => import('pages/Error404.vue')
  }
]

export default routes
