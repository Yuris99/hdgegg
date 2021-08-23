import { createWebHistory, createRouter } from "vue-router";
import EggList from './components/EggList.vue';
import Detail from './components/Detail.vue';

const routes = [
    {
        path: "/detail/:id",
        component: Detail,
    },
    {
        path: "/",
        component: EggList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 