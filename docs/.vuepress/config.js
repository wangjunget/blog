const sidebarConfig = require('./config/sidebar')

module.exports = {
  title: "wangjunget",
  plugins: [
    [
      "@vuepress/last-updated",
      false,
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locale("zh-CN");
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
        }
      }
    ],
    ["@vuepress/back-to-top"]
  ],
  themeConfig: {
    repo: "wangjunget/blog-vuepress",
    // editLinks: true,
    editLinkText: "编辑此页",
    // lastUpdated: '最近更新',
    head: [["link", { rel: "icon", href: "./public/favicon.ico" }]],
    nav: [
      { text: "主页", link: "/" },
      {
        text: "分类",
        items: [
          {
            text: "前端",
            items: [
              { text: "Vue", link: "/Vue/" },
              { text: "JavaScript", link: "/JavaScript/" },
              { text: "Css", link: "/Css/" }
            ]
          },
          {
            text: "开发工具",
            items: [
              { text: "Python", link: "/Python/" },
              { text: "Git", link: "/Git/" },
              { text: "Linux", link: "/Linux/" }
            ]
          }
        ]
      }
      // { text: '关于', link: '/about'}
    ],
    sidebarDepth: 2,
    sidebar: sidebarConfig
  }
};
