import login from "../components/Login.vue";
import register from "../components/Register.vue";

const routes = [
    {
        path: "/login",
        name: 'Login',
        component: login,
        meta: {
            requireAuth: false,
            title: "Đăng Nhập"
        }
    },
    {
        path: "/register",
        name: 'Register',
        component: register,
        meta: {
            requireAuth: false,
            title: "Đăng ký"
        }
    },
]
export default routes;