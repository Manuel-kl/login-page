<template>
    <div class="navbar">
        <div class="home">
            <img class="twitter-icon" src="../../assets/images/twitter-icon.png" alt="Twitter Icon" />
            <input type="text" placeholder="# Explore" />
        </div>
        <div class="options">
            <span id="twitter-home">
                <img class="twitter-home" src="../../assets/images/twitter-home.png" alt="Home" />
                <label for="twitter-home">Home</label>
            </span>
            <span class="noti">
                <img class="filters" src="../../assets/images/filter-tweets.png" alt="Filters" />
                <img class="messages" src="../../assets/images/twitter-inbox.png" alt="Messages" />
                <img class="notification" src="../../assets/images/notifications.png" alt="Notifications" />
            </span>
            <span id="profile">
                <img class="profile" src="../../assets/images/manuel.jpeg" alt="Profile picture" />
                <label for="profile">Emmanuel Langat</label>
                <img class="more" src="../../assets/images/down.png" alt="More" />
            </span>
            <span class="menu">
                <img class="menu-icon" src="../../assets/images/menu.png" alt="menu" />
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
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
<style lang='scss' scoped>
</style>