import {createRouter, createWebHistory} from 'vue-router';

// Components
import NotFound from './pages/NotFound.vue';
import AppHome from './pages/AppHome.vue';
import AboutMe from './pages/AboutMe.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectsShow from './pages/ProjectsShow.vue';

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
            name: 'projects-index',
            component: ProjectsIndex
        },
        {
            path: '/projects/:slug',
            name: 'projects-show',
            component: ProjectsShow
        },
        {
            path: '/:pathMath(.*)*',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export {router};