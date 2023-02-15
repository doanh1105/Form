<template>
  <div class="register">
    <h3>Đăng Ký</h3>
    <form @submit.prevent="register()">
      <p class="text-danger" v-if="error">{{ error }}</p>
      <p class="text-success" v-if="success">{{ success }}</p>
      <input type="text" placeholder="username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" required />
      <input
        type="password"
        placeholder="Confirm Password"
        v-model="cfpassword"
        required
      />
      <button type="submit">Register</button>
    </form>
    <router-link :to="{ name: 'Login' }">
      <button class="btn">Login</button>
    </router-link>
  </div>

  <div class="container">
    <h5>Danh sách tài khoản</h5>
    <template v-for="(account, index) in accountList" :key="index">
      <p>
        {{ `${index + 1}.username: ${account.username}, pass: ${account.password}` }}
        <button class="btn btn-danger" @click="deleteAccount(index)">Xoá</button>
      </p>
    </template>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from "pinia";
import { accountStore } from "../store/acount.js";
import validate from "../helper/validate.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      cfpassword: "",
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
    ...mapActions(accountStore, {
      addAccount: "addAcc",
      deleteAccount: "delAcc",
    }),
    register() {
      if (validate.minLength(this.username, 6)) {
        this.error = "Tên đăng nhập tối thiểu là 6 kí tự.";
      } else if (validate.minLength(this.password, 8)) {
        this.error = "Mật khẩu tối thiểu là 8 kí tự.";
      } else if (this.password != this.cfpassword) {
        this.error = "Nhập mật khẩu còn sai";
      } else {
        const existAcc = this.accountList.find(
          (_item) => _item.username == this.username
        );
        if (existAcc) {
          // nếu có acc đã có username
          this.error = "Tài khoản đã tồn tại";
        } else {
          this.error = "";
          this.success = "Đăng ký thành công";
          const account = {
            username: this.username,
            password: this.password,
          };
          this.addAccount(account);
          this.resetField();
        }
      }
    },
    resetField() {
      this.error = "";
      this.username = "";
      this.password = "";
      this.cfpassword = "";
    },
  },
};
</script>

<style scoped lang="scss">
.register {
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
