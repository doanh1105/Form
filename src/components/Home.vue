<template>
  <div class="login">
    <h3>Trang chủ</h3>
    <p>Hello {{ user.username }}</p>
    <button @click="onLogout()" class="btn btn-danger">Logout</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "../store/auth";
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
    ...mapState(useAuthStore, {
      user: "user", // lấy user này show info lên trên
    }),
  },
  methods: {
    ...mapActions(useAuthStore, {
      logout: "logout",
    }),
    onLogout() {
      this.logout(); //gọi như method
      this.$router.push({ name: "Login" }); // sau khi logout thì chuyển ra đăng nhập
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  //border: 1px solid black;
  border-radius: 5px;
  padding: 1.5rem;
  width: 100%;
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
      background-color: #7cafda;
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
