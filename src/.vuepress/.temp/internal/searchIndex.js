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
    "path": "/get-started.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "托兰中文资料站",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "导航",
    "headers": [
      {
        "level": 2,
        "title": "怪物图鉴",
        "slug": "怪物图鉴",
        "link": "#怪物图鉴",
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
        "title": "托兰异世录",
        "slug": "托兰异世录",
        "link": "#托兰异世录",
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
            "title": "暴击率",
            "slug": "暴击率",
            "link": "#暴击率",
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
            "title": "减仇",
            "slug": "减仇",
            "link": "#减仇",
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
        "title": "托拉姆物语",
        "slug": "托拉姆物语",
        "link": "#托拉姆物语",
        "children": []
      }
    ],
    "path": "/docs/cuisine/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "怪物图鉴",
    "headers": [
      {
        "level": 2,
        "title": "定点王",
        "slug": "定点王",
        "link": "#定点王",
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
