import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const  router =  new VueRouter({
    mode: "history",
    routes: [
    {
        path: '/',
        name: 'Home',
        component: () => import("../components/BufferClone.vue"),
    },
    {
        path: '/gym',
        name: 'Gym',
        component: () => import("../components/GymSite.vue"),
    },
]
});

export default router;