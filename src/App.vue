<template>
  <div class="body">
    <WelcomePage />
    <LoginPage />
  </div>
</template>
<script>
import WelcomePage from "../src/components/WelcomePage.vue";
import LoginPage from "../src/components/LoginPage.vue";
export default {
  components: { WelcomePage, LoginPage },
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style scoped></style>
<style lang="css" scoped>
@import "../src/css/app.css";
</style>
