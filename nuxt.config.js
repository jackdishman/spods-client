module.exports = {
    mode: 'spa',
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
        "~/assets/css/hover.css"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/vue-cytoscape', mode: 'client' }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxt/typescript-build',
        // '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/toast'
    ],
    // serverMiddleware: ['./api/auth'],
    auth: {
        redirect: {
            callback: '/callback',
            login: '/',
            logout: '/',
        },
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post', propertyName: 'token.accessToken' },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: '/api/auth/user', method: 'get', propertyName: 'authData.u' }
                },
                tokenType: 'Bearer',
            }
        }
    },
    axios: {
        // proxyHeaders: false
        baseURL: 'http://localhost:5000/'
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