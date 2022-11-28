import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router"
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import PostIdPage from "@/pages/PostIdPage";

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/posts",
        component: PostPage
    },
    {
        path: "/posts/:id",
        component: PostIdPage
    },
    {
        path: "/about",
        component: AboutPage
    },
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router;