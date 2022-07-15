const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/cosmo", component: () => import("pages/cosmoRobinson.vue") },
      { path: "/login", component: () => import("pages/loginAccount.vue") },
      { path: "/after", component: () => import("pages/afterLogin.vue") },
      { path: "/testpage", component: () => import("pages/testPage.vue") },
      {
        path: "/testlayout",
        component: () => import("layouts/testLayout.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
