import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import pt from 'vuetify/lib/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#007BFF',
                corTextNav: '#222',
            },
            dark: {
                primary: '#FD2155',
                secondary: '#06C5A9',
            },
        },
    },
    lang: {
        locales: { pt },
        current: 'pt',
    },
});
