<template>
  <div class="login">
    <section class="top">
      <h1 id="login-title">Create Account</h1>
      <div class="images">
        <img src="../../assets/images/facebook.png" alt="faceboook" />
        <img src="../../assets/images/google-plus.png" alt="Google+" />
        <img src="../../assets/images/linkedin.png" alt="LinkedIn" />
      </div>
      <p class="d">Or use your email for registration</p>
    </section>
    <section class="input">
      <div id="inp">
        <img src="../../assets/images/user.png" alt="account icon" />
        <input type="text" placeholder="Enter your full names" />
      </div>
      <div id="inp">
        <img src="../../assets/images/envelope.png" alt="Mail" />
        <input type="email" placeholder="Enter your email" />
      </div>
      <div id="inp">
        <img src="../../assets/images/padlock.png" alt="password" />
        <input type="password" placeholder="Enter your password" />
      </div>
    </section>
    <section class="signup">
      <button>SIGN UP</button>
    </section>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() { },
  methods: {},
  mounted() { },
};
</script>
<style scoped>
</style>
<style lang="scss" scoped>
</style>
