import { defineStore } from 'pinia'

export const accountStore = defineStore('account', {
    state: () => {
        return {
            acounts: [
                {
                    username: "Demo",
                    password: "11111",
                }
            ],
        }
    },
    getters: {
        getAccountList: state => state.acount
    },

    actions: {
        addAcc(account) {
            this.acounts.push(Object.assign({...account}))
        },
        delAcc(index) {
            this.acounts.splice(index, 1);
        },
    },
    persist: true
})