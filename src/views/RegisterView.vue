<template>
    <div class="body">
        <WelcomePage />
        <RegisterPage />
    </div>
</template>
<script>
import RegisterPage from '@/components/registration/RegisterPage.vue';
import WelcomePage from '@/components/welcome/WelcomeNewPage.vue';
export default {
    components: { WelcomePage, RegisterPage },
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