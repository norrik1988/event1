import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/composition-api/module',
        '@primevue/nuxt'
    ],
    plugins: [
        '~/plugins/primevue.js'
    ],
    primevue: {
        theme: 'saga-blue',
        components: ['Menubar', 'Button', 'InputText'],
        directives: [],
        config: {
            ripple: true
        }
    }
});
