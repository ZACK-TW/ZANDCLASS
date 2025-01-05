module.exports = {
  title: 'ZANDCLASS',
  description: 'AI賦能 邁向卓越 直至超越',
  base: '/ZANDCLASS/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首頁', link: '/' },
      {
        text: 'AI應用思維',
        items: [
          { text: 'AI應用框架', link: '/guide/ai-framework/' },
          { text: '商業框架', link: '/guide/business-framework/' }
        ]
      },
      {
        text: 'AI應用實踐',
        items: [
          { text: '文字生成類', link: '/ai-tools/text-generation/' },
          { text: '圖片生成類', link: '/ai-tools/image-generation/' },
          { text: '聲音生成類', link: '/ai-tools/audio-generation/' },
          { text: '影片生成類', link: '/ai-tools/video-generation/' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'AI應用思維',
          collapsable: false,
          children: [
            ['ai-framework/', 'AI應用框架'],
            ['business-framework/', '商業框架']
          ]
        }
      ],
      '/ai-tools/': [
        {
          title: 'AI應用實踐',
          collapsable: false,
          children: [
            ['text-generation/', '文字生成類'],
            ['image-generation/', '圖片生成類'],
            ['audio-generation/', '聲音生成類'],
            ['video-generation/', '影片生成類']
          ]
        }
      ]
    },
    lastUpdated: '上次更新',
    repo: 'ZACK-TW/ZANDCLASS',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上編輯此頁',
    smoothScroll: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}