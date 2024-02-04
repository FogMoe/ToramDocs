import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'
import { commentPlugin } from "vuepress-plugin-comment2";

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
    commentPlugin({
      provider: "Giscus", // Artalk | Giscus | Waline | Twikoo

      // 在这里放置其他选项
      
      // ...
    }),
  ],
  locales: {
    '/': {
      lang: 'zh-TW', 
    },
    'https://translate.google.com.hk/?hl=zh-CN&sourceid=cnhp&sl=zh-TW&tl=zh-CN&op=websites': {
      lang: 'zh-CN',
    },
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
    docsDir: 'src',
    contributors: true,
    editLinkText: '在 GitHub 上編輯此頁',
    lastUpdatedText: '最後更新',
    contributorsText: '貢獻者',
    toggleColorMode: '切換顏色模式',
    selectLanguageText: '選擇語言',
    locales: {
      '/': {
        selectLanguageName: '正體中文',
      },
      'https://translate.google.com.hk/?hl=zh-CN&sourceid=cnhp&sl=zh-TW&tl=zh-CN&op=websites': {
        selectLanguageName: '简体中文',
      },
    },
  }),

  bundler: viteBundler(),
})
