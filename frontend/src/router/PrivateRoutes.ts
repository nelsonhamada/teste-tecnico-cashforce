const PrivateRoutes = {
    path: "/",
    meta: {
        requiresAuth: true,
    },
    props: true,
    component: () => import("@/features/private-routes/main/view/PrivateIndex.vue"),
    children: []
};

export default PrivateRoutes;