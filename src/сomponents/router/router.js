import MainPage from "@/сomponents/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router"
import PostPage from "@/сomponents/pages/PostPage";
import AboutPage from "@/сomponents/pages/AboutPage";
import PostIdPage from "@/сomponents/pages/PostIdPage";

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