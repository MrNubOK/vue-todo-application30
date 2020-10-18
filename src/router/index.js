import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/my-tasks',
        name: 'TodoList',
        component: () => import('../views/TodoList.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;