<template>
    <v-app>
        <NavMenu />
        <v-main>
            <transition
                mode="out-in"
                enter-active-class="animate__animated animate__zoomIn animate__faster"
                leave-active-class="animate__animated animate__zoomOut animate__faster"
                ><router-view />
            </transition>
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',
    components: { NavMenu, Footer },
    data: () => ({
        drawer: false,
    }),
    created() {
        this.$vuetify.theme.dark = true;
    },
};
</script>
<style lang="scss">
#app {
    background-image: url('./assets/back-home.jpg');
    background-repeat: repeat;
    background-size: cover;
}
</style>
