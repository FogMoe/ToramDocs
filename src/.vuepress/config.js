import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  locales: {
    '/': {
      lang: 'zh-TW', 
    }
  },
  
  title: 'ToramDocs',
  description: 'Toram Online 遊戲資訊站',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', ],
  }),

  bundler: viteBundler(),
})
