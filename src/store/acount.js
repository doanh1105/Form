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
        addAcc(acount) {
            this.acounts.push(Object.assign({acount}))
        },
    },
})