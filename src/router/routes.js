import login from "../components/Login.vue";
import register from "../components/Register.vue";
import home from "../components/Home.vue";

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
            requireAuth: false, // false: không cần đăng nhập
            title: "Đăng ký"
        }
    },
    {
        path: "/home",
        name: 'Home',
        component: home,
        meta: {
            requireAuth: true, // true: yêu cầu đăng nhập mới vào được
            title: "Home"
        }
    },
]
export default routes;