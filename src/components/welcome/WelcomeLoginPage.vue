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
            <section>
                <p class="h">Welcome Back!</p>
                <p class="p">
                    To keep connected with us please login with your personal info
                </p>
            </section>
            <section class="signin">
                <p class="sign-in-p"> Don't have an account? </p>
                <router-link to="register">
                    <button>SIGN UP</button>
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
