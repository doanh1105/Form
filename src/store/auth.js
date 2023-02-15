import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        user: null
    },
    getters: {
        isLoginned: state => !!state.user
    },

    actions: {
        login(account) { // có tham số accout, cần truyền acc vào. hiều chưa
            this.user = {
                username: account.username,
            }
        },
        //viết 1 action logout vào đây
        logout(){ // không có tham số, ko cần truyền gì cả 
            this.user = null //xoá state user đi
        }
    },
    persist: true
})