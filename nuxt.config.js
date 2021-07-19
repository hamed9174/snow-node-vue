export default {

  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'snow-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/fontawesome/css/all.css',
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src : '@/plugins/swiper.js'
    },
    {
      src : '@/plugins/vue-scroll-fixed-header.js',
      mode : 'client'
    },
    {
      src : '@/plugins/axios.js'
    },
    {
      src : '@/plugins/veeValidate.js',
      mode : 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  bootstrapVue: {
    icons: true
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: `login`, method: 'post', propertyName: 'data.token' },
          logout: { url: `logout`, method: 'post' },
          user: { url: `user`, method: 'get', propertyName: 'data.user' }
        },
        // globalToken: true,
        // autoFetchUser: true,
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {baseURL :'http://localhost:5000/'},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  }
}
