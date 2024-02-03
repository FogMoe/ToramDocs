export const searchIndex = [
  {
    "title": "Get Started",
    "headers": [
      {
        "level": 2,
        "title": "Pages",
        "slug": "pages",
        "link": "#pages",
        "children": []
      },
      {
        "level": 2,
        "title": "Content",
        "slug": "content",
        "link": "#content",
        "children": []
      },
      {
        "level": 2,
        "title": "Configuration",
        "slug": "configuration",
        "link": "#configuration",
        "children": []
      },
      {
        "level": 2,
        "title": "Layouts and customization",
        "slug": "layouts-and-customization",
        "link": "#layouts-and-customization",
        "children": []
      }
    ],
    "path": "/get-started",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "ToramOnline遊戲資訊站",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "導航",
    "headers": [
      {
        "level": 2,
        "title": "怪物圖鑒",
        "slug": "怪物圖鑒",
        "link": "#怪物圖鑒",
        "children": []
      },
      {
        "level": 2,
        "title": "料理地址",
        "slug": "料理地址",
        "link": "#料理地址",
        "children": []
      }
    ],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "料理地址",
    "headers": [
      {
        "level": 2,
        "title": "托蘭異世錄",
        "slug": "托蘭異世錄",
        "link": "#托蘭異世錄",
        "children": [
          {
            "level": 3,
            "title": "HP上限",
            "slug": "hp上限",
            "link": "#hp上限",
            "children": []
          },
          {
            "level": 3,
            "title": "MP上限",
            "slug": "mp上限",
            "link": "#mp上限",
            "children": []
          },
          {
            "level": 3,
            "title": "暴擊率",
            "slug": "暴擊率",
            "link": "#暴擊率",
            "children": []
          },
          {
            "level": 3,
            "title": "攻回",
            "slug": "攻回",
            "link": "#攻回",
            "children": []
          },
          {
            "level": 3,
            "title": "減仇",
            "slug": "減仇",
            "link": "#減仇",
            "children": []
          },
          {
            "level": 3,
            "title": "增仇",
            "slug": "增仇",
            "link": "#增仇",
            "children": []
          },
          {
            "level": 3,
            "title": "ATK",
            "slug": "atk",
            "link": "#atk",
            "children": []
          },
          {
            "level": 3,
            "title": "MATK",
            "slug": "matk",
            "link": "#matk",
            "children": []
          },
          {
            "level": 3,
            "title": "武器ATK",
            "slug": "武器atk",
            "link": "#武器atk",
            "children": []
          },
          {
            "level": 3,
            "title": "物理抗性",
            "slug": "物理抗性",
            "link": "#物理抗性",
            "children": []
          },
          {
            "level": 3,
            "title": "魔法抗性",
            "slug": "魔法抗性",
            "link": "#魔法抗性",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "托拉姆物語",
        "slug": "托拉姆物語",
        "link": "#托拉姆物語",
        "children": []
      }
    ],
    "path": "/docs/cuisine/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "怪物圖鑒",
    "headers": [
      {
        "level": 2,
        "title": "定點王",
        "slug": "定點王",
        "link": "#定點王",
        "children": []
      },
      {
        "level": 2,
        "title": "野王",
        "slug": "野王",
        "link": "#野王",
        "children": []
      },
      {
        "level": 2,
        "title": "小怪",
        "slug": "小怪",
        "link": "#小怪",
        "children": []
      }
    ],
    "path": "/docs/mobs/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
