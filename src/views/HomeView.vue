<template>
  <div class="homepage">
    <NavBar />
    <div class="content">
      <div class="left-side-grid">
        <ProfileComponent />
        <UsersComponent />
      </div>
      <div class="center-grid">
        <TweetComponent />
        <TweetsComponent />
      </div>
      <div class="right-side-grid">
        <TrendsComponent />
      </div>

    </div>
  </div>
</template>
<script>
import NavBar from '@/components/homepage/NavBar.vue';
import ProfileComponent from '@/components/homepage/ProfileComponent.vue';
import TrendsComponent from '@/components/homepage/TrendsComponent.vue';
import TweetsComponent from '@/components/homepage/TweetsComponent.vue';
import TweetComponent from '../components/homepage/TweetComponent.vue';
import UsersComponent from '../components/homepage/UsersComponent.vue';
export default {
  components: {
    NavBar,
    ProfileComponent,
    TweetComponent,
    TrendsComponent,
    UsersComponent,
    TweetsComponent
  },
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
<style lang='scss' scoped>
</style>