import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Committees from "@/views/Committees";
import About from "@/views/About";
import Program from "@/views/Program";
import Hotel from "@/views/Hotel";
import Registration from "@/views/Registration";
import Authors from "@/views/Authors";
import Patrons from "@/views/Patrons";
import Speakers from "@/views/Speakers";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/committees',
        name: 'Committees',
        component: Committees
    },
    {
        path: '/speakers',
        name: 'Speakers',
        component: Speakers
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/program',
        name: 'Program',
        component: Program
    },
    {
        path: '/hotel',
        name: 'Hotel',
        component: Hotel
    },
    {
        name: 'Authors',
        path: '/authors',
        component: Authors
    },
    {
        name: 'Patrons',
        path: '/patrons',
        component: Patrons
    }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router
