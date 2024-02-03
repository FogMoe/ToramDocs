export const themeData = JSON.parse("{\"logo\":\"\",\"navbar\":[{\"text\":\"首頁\",\"link\":\"/\"}],\"repo\":\"https://github.com/scarletkc/ToramDocs\",\"docsDir\":\"src\",\"contributors\":true,\"editLinkText\":\"在 GitHub 上編輯此頁\",\"lastUpdatedText\":\"最後更新\",\"contributorsText\":\"貢獻者\",\"toggleColorMode\":\"切換顏色模式\",\"selectLanguageText\":\"選擇語言\",\"locales\":{\"/\":{\"selectLanguageName\":\"正體中文\"},\"https://translate.google.com.hk/?hl=zh-CN&sourceid=cnhp&sl=zh-TW&tl=zh-CN&op=websites\":{\"selectLanguageName\":\"简体中文\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
