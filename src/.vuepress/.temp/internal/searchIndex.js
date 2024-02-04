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
    "headers": [
      {
        "level": 2,
        "title": "GitHub 貢獻者",
        "slug": "github-貢獻者",
        "link": "#github-貢獻者",
        "children": []
      }
    ],
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
            "title": "「基礎類」",
            "slug": "「基礎類」",
            "link": "#「基礎類」",
            "children": []
          },
          {
            "level": 3,
            "title": "「仇恨類」",
            "slug": "「仇恨類」",
            "link": "#「仇恨類」",
            "children": []
          },
          {
            "level": 3,
            "title": "「攻防類」",
            "slug": "「攻防類」",
            "link": "#「攻防類」",
            "children": []
          },
          {
            "level": 3,
            "title": "「能力類」",
            "slug": "「能力類」",
            "link": "#「能力類」",
            "children": []
          },
          {
            "level": 3,
            "title": "「對抗屬類」",
            "slug": "「對抗屬類」",
            "link": "#「對抗屬類」",
            "children": []
          },
          {
            "level": 3,
            "title": "「其他類」",
            "slug": "「其他類」",
            "link": "#「其他類」",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "托拉姆物語",
        "slug": "托拉姆物語",
        "link": "#托拉姆物語",
        "children": [
          {
            "level": 3,
            "title": "「基礎類」",
            "slug": "「基礎類」-1",
            "link": "#「基礎類」-1",
            "children": []
          },
          {
            "level": 3,
            "title": "「仇恨類」",
            "slug": "「仇恨類」-1",
            "link": "#「仇恨類」-1",
            "children": []
          },
          {
            "level": 3,
            "title": "「攻防類」",
            "slug": "「攻防類」-1",
            "link": "#「攻防類」-1",
            "children": []
          },
          {
            "level": 3,
            "title": "「能力類」",
            "slug": "「能力類」-1",
            "link": "#「能力類」-1",
            "children": []
          },
          {
            "level": 3,
            "title": "「對抗屬類」",
            "slug": "「對抗屬類」-1",
            "link": "#「對抗屬類」-1",
            "children": []
          },
          {
            "level": 3,
            "title": "「其他類」",
            "slug": "「其他類」-1",
            "link": "#「其他類」-1",
            "children": []
          }
        ]
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
    "title": "職業攻略",
    "headers": [
      {
        "level": 2,
        "title": "【275級版本】遠程物理系魔劍士",
        "slug": "【275級版本】遠程物理系魔劍士",
        "link": "#【275級版本】遠程物理系魔劍士",
        "children": []
      },
      {
        "level": 2,
        "title": "",
        "slug": "",
        "link": "#",
        "children": []
      }
    ],
    "path": "/docs/strategy/",
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
