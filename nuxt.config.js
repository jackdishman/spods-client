module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Orbitron:500&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Comfortaa&display=swap' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#48BB78' },
    /*
     ** Global CSS
     */
    css: [
        "~/assets/css/animate.css",
        "~/assets/css/hover.css",
        "~/assets/css/platforms.css"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/vue-cytoscape', mode: 'client' },
        { src: '~/plugins/localStorage.js', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxt/typescript-build',
        '@nuxtjs/google-analytics',
        // '@nuxtjs/vuetify',
    ],
    googleAnalytics: {
        id: 'UA-172035861-1'
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        // '@nuxtjs/auth',
        '@nuxtjs/toast',
        // '@nuxtjs/proxy',
    ],
    axios: {
        proxy: true,
        // baseURL: 'http://localhost:5000',
        // baseURL: 'https://spodserver.herokuapp.com'
    },
    loading: {
        name: 'chasing-dots',
        color: '#ff5638',
        background: 'white',
        height: '4px'
    },
    // router: {
    //   middleware: ['index']
    // },
    toast: {
        position: 'top-right',
        duration: 2000
    },
    /*
     ** Build configuration
     */
    build: {
        watch: ['api'],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) { }
    }
};