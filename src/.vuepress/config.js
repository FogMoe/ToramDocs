import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  locales: {
    "/cn/": {
      lang: "zh-CN",
    },
    "/tw/": {
      lang: "zh-TW",
    },
  title: 'ToramDocs',
  description: '托兰中文资料站',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', ],
  }),

  bundler: viteBundler(),
})
