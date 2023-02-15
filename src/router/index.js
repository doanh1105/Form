import { createRouter, createWebHistory } from 'vue-router'
import routes from "./routes.js";
import {useAuthStore} from '../store/auth';

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from,next) => {

    document.title = to.meta.title;
    const auth = useAuthStore();
    // nếu trang có requireAuth = true nhưng chưa có user login thì chuyển về login
    if(to.meta.requireAuth && !auth.user){
        router.push({name: 'Login'})
    }
    next()

});
export default router;