const sidebarConfig = require('./config/sidebar')

const isGitpage = process.env.isGitpage

module.exports = {
  base: isGitpage ? '/blog-vuepress/' : '',
  title: 'wangjunget',
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale('zh-CN')
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    ],
    ['@vuepress/back-to-top'],
    [
      'vuepress-plugin-container',
      {
        type: 'css',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      }
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ]
  ],
  themeConfig: {
    repo: 'wangjunget/blog-vuepress',
    // editLinks: true,
    editLinkText: '编辑此页',
    lastUpdated: '最近更新',
    head: [['link', { rel: 'icon', href: './public/favicon.ico' }]],
    nav: [
      { text: '主页', link: '/' },
      {
        text: '分类',
        items: [
          {
            text: '前端',
            items: [
              { text: 'Html', link: '/Html/' },
              { text: 'JavaScript', link: '/JavaScript/' },
              { text: 'Css', link: '/Css/' }
            ]
          },
          {
            text: '开发工具',
            items: [
              { text: 'Python', link: '/Python/' },
              { text: 'Git', link: '/Git/' },
              { text: 'Linux', link: '/Linux/' }
            ]
          }
        ]
      }
      // { text: '关于', link: '/about'}
    ],
    sidebarDepth: 2,
    sidebar: sidebarConfig
  }
}
