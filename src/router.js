import {createRouter, createWebHistory} from 'vue-router';

// Components
import AppHome from './pages/AppHome.vue';
import AboutMe from './pages/AboutMe.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about-me',
            component: AboutMe
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex
        },
    ]
});

export {router};