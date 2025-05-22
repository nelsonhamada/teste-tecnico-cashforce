const PrivateRoutes = {
    path: "/",
    meta: {
        requiresAuth: true,
    },
    props: true,
    component: () => import("@/features/private-routes/main/view/PrivateIndex.vue"),
    children: [
        {
            name: "invoices",
            path: "/invoices",
            component: () => import("@/features/private-routes/invoices/views/InvoicesIndex.vue"),
        }
    ]
};

export default PrivateRoutes;