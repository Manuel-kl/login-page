<template>
  <div class="body">
    <WelcomePage />
    <LoginPage />
  </div>
</template>
<script>
import LoginPage from '@/components/registration/LoginPage.vue';
import WelcomePage from '@/components/welcome/WelcomeLoginPage.vue';
export default {
  components: { WelcomePage, LoginPage },
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
<style lang='css' scoped>
</style>