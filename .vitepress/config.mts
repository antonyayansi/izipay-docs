import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@dankira | Izipay",
  description: "💳 Integración de Izipay en su proyecto, con configuración mínima y proxy integrado.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/install' },
      // { text: 'Ejemplos', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Instalación', link: '/docs/install' },
          { text: 'Configuración', link: '/docs/configuration' },
          { text: 'Vista de formulario', link: '/docs/form' },
          { text: 'Proxy (Opcional)', link: '/docs/proxy' },
        ]
      },
      {
        text: 'Ejemplos',
        items: [
          { text: 'React', link: '/examples/react' },
          { text: 'Vue', link: '/examples/vue' },
          { text: 'Angular', link: '/examples/angular' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/vite_js'}
    ]
  }
})
