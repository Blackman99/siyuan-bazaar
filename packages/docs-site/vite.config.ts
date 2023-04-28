import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          {
            title: 'Introduction',
            to: '/introduction',
          },
          {
            title: 'Modules',
            items: [
              {
                title: 'Quick create project',
                to: '/create',
              },
              {
                title: 'API',
                to: '/api',
              },
              {
                title: 'Utility functions',
                to: '/utils',
              },
            ],
          },
        ],
        sidebar: {
          // Add your sidebar configs here
        },
        github: 'https://github.com/Blackman99/siyuan-bazaar',
        logo: '/logo.svg',
      }),
      siteConfig: {
        title: 'SiYuan Toolkit',
        description: 'A dev toolkit made for SiYuan',
      },
    }),
  ],
})

export default config
