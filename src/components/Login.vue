<template>
  <div class="login">
    <h3>Đăng Nhập</h3>
    <form @submit.prevent="submitLogin()">
      <p class="text-danger" v-if="error">{{ error }}</p>
      <p class="text-success" v-if="success">{{ success }}</p>
      <input type="text" placeholder="username" v-model="username" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <button type="submit">Login</button>
      <!-- <router-link :to="{ name: 'Home' }">
        <button>Login</button>
      </router-link> -->
      <router-link :to="{ name: 'Register' }">
        <button class="btn">Register</button>
      </router-link>
    </form>
  </div>
  <div class="container">
    <template v-for="(account, index) in accountList" :key="index"> </template>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from "pinia";
// import { accountStore } from "../store/acount.js";
import { accountStore } from "../store/acount.js";
import { useAuthStore } from "../store/auth";
import validate from "../helper/validate.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      success: "",
    };
  },
  computed: {
    ...mapState(accountStore, {
      accountList: "acounts",
    }),
  },
  methods: {
    ...mapActions(useAuthStore, {
      login: "login",
    }),
    submitLogin() {
      const checkAcc = this.accountList.find(
        (item) => item.username == this.username && item.password == this.password
      );
      if (!checkAcc) {
        this.error = "Không đúng tài khoản";
        this.success = "";
      } else {
        this.error = "";
        this.success = "Đăng nhập thành công";
        const accLogin = {
          username: this.username,
        };
        this.login(accLogin);
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  border: 1px solid black;
  border-radius: 5px;
  padding: 1.5rem;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  .container-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    img {
      width: 2rem;
      height: 2rem;
    }
    h3 {
      text-align: center;
    }
  }
  form {
    display: flex;
    flex-flow: column;
    *:not(:last-child) {
      margin-bottom: 1rem;
    }
    input {
      padding: 0.5rem;
    }
    button {
      padding: 0.5rem;
      background-color: #1b82d7;
      border: 1px solid #a29f9f;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: #92beea;
      }
    }
  }
}
</style>
