<template>
    <nav>
        <v-toolbar class="hidden-md-and-up" flat>
            <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
        </v-toolbar>
        <v-navigation-drawer
            class="aside"
            fixed
            floating
            width="256"
            color="#181818"
            v-model="drawer"
            mobile-breakpoint="699"
            app
        >
            <v-list>
                <v-list-item class="logoTipo">
                    <v-list-item-content class="d-flex flex-column">
                        <span class="text-h1" logo>M</span>
                        <span class="text-h6">Michel</span>
                        <span class="text-caption">Web Developer</span>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav class="my-lg-8 my-4">
                <v-list-item-group color="secondary">
                    <v-list-item
                        :to="item.route"
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title
                                v-text="item.text"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <v-divider></v-divider>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                { text: 'Home', icon: 'mdi-home', route: '/' },
                { text: 'Sobre', icon: 'mdi-account', route: '/sobre' },
                {
                    text: 'Qualificações',
                    icon: 'mdi-school',
                    route: '/carreira',
                },
                {
                    text: 'Portfolio',
                    icon: 'mdi-briefcase',
                    route: '/portfolio',
                },
                { text: 'Contato', icon: 'mdi-at', route: '/contato' },
            ],
            redes: [
                {
                    icon: 'mdi-github',
                    link: 'www.github.com/mvpmichel',
                },
                {
                    icon: 'mdi-twitter',
                    link: 'www.github.com/mvpmichel',
                },
                {
                    icon: 'mdi-linkedin',
                    link: 'www.github.com/mvpmichel',
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
.logoTipo {
    width: 100%;
    span {
        font-family: 'Concert One', cursive !important;
    }
}
.ic {
    border: 1px solid red;
}

.it {
    border: 1px solid green;
}

.aside {
    height: 100vh;
    display: flex !important;
    flex-direction: column !important;
    align-items: space-around !important;
}

/* .containerNav {
    border: 1px solid red;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
} */
</style>
