import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

export default defineUserConfig({
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
    removeHtmlExtensionPlugin(),
  ],
  locales: {
    '/': {
      lang: 'zh-TW', 
    }
  },
  
  title: 'ToramDocs',
  description: 'Toram Online 遊戲資訊站',

  theme: defaultTheme({
    logo: '',

    navbar: [
      {
      text: '首頁',
      link: '/',
    }],
    repo: 'https://github.com/scarletkc/ToramDocs',
    contributors: true,
    editLinkText: '在 GitHub 上編輯此頁',
    lastUpdatedText: '最後更新',
    contributorsText: '貢獻者',
  }),

  bundler: viteBundler(),
})
