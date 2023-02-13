<template>
  <div class="login">
    <h3>Đăng Nhập</h3>
    <form>
      <input type="text" placeholder="username" v-model="username"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <button type="submit">Login</button>
    </form>
    <router-link :to="{name: 'Register'}" >
      <button class="btn">Register</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
  },
  methods: {
  }
}
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
    background-color: rgba(0,0,0,.3);
    img {
      width: 2rem;
      height: 2rem;
    }
    h3{
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
      padding: .5rem;
    }
    button {
      padding: .5rem;
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