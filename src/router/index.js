import {createRouter,createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        redirect: '/homePage',
    },
    {
        path: '/homePage',
        name:'homePage',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        path: '/fontDisplay',
        name:'fontDisplay',
        component: () => import('../pages/FontDisplay.vue'),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});
export default router;
