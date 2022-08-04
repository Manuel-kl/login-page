<template>
  <div class="welcome">
    <section class="profile">
      <div class="pic">
        <img src="../../assets/images/manuel.jpeg" alt="Profile Picture" />
      </div>
      <div class="name">
        <p>Manuel</p>
      </div>
    </section>
    <section class="message">
      <section class="message-welcome">
        <p class="h">Welcome!</p>
        <p class="p">
          To keep connected with us please create an account
        </p>
      </section>
      <section class="signin">
        <p class="sign-in-p">Already having an account?</p>
        <router-link to="/login">
          <button>SIGN IN</button>
        </router-link>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: "WelcomePage",
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
