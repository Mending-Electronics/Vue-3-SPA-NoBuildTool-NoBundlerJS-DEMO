// Définition des routes pour la SPA

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/app1',
    component: App1View
  },
  {
    path: '/app2',
    component: App2View
  },
  {
    path: '/app3',
    component: App3View
  },
  {
    path: '/app4',
    component: App4View
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];