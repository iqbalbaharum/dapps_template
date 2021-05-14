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
        path: '/dashboard',
        meta: {
          title: 'Dashboard',
          position: '',
          icon: '',
          roles: []
        },
        component: () => import('pages/Dashboard.vue')
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
