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
    sidebar: {
      "/Vue/": [
        {
          title: "Vue",
          collapsable: false,
          children: [["/Vue/", "关于"]]
        }
      ],
      "/Python/": [
        {
          title: "Python",
          collapsable: false,
          children: [
            ["/Python/", "关于"],
            "/Python/深入理解Python中的元类",
            "/Python/Python单例模式"
          ]
        }
      ],
      "/JavaScript/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: [["/JavaScript/", "关于"]]
        }
      ],
      "/Git/": [
        {
          title: "Git",
          collapsable: false,
          children: [["/Git/", "关于"]]
        }
      ],
      "/Css/": [
        {
          title: "Css",
          collapsable: false,
          // path: '/Css/',
          children: [
            ["/Css/", "关于"],
            "/Css/文本截断汇总",
            ["/Css/animation", "animation"],
            ["/Css/transition", "transition"]
          ]
        }
      ],
      "/Linux/": [
        {
          title: "Linux",
          collapsable: false,
          children: [["/Linux/", "关于"]]
        }
      ],
      "/Books/": [
        {
          title: "Vue.js 组件精讲",
          path: "/Books/Vue.js 组件精讲/",
          collapsable: true,
          children: [
            "/Books/Vue.js 组件精讲/开篇：Vue.js 的精髓——组件",
            "/Books/Vue.js 组件精讲/基础：Vue.js 组件的三个 API：prop、event、slot",
            "/Books/Vue.js 组件精讲/组件的通信 1：provide   inject",
            "/Books/Vue.js 组件精讲/组件的通信 2：派发与广播——自行实现 dispatch 和 broadcast 方法",
            "/Books/Vue.js 组件精讲/实战 1：具有数据校验功能的表单组件——Form",
            "/Books/Vue.js 组件精讲/组件的通信 3：找到任意组件实例——findComponents 系列方法",
            "/Books/Vue.js 组件精讲/实战 2：组合多选框组件——CheckboxGroup & Checkbox",
            "/Books/Vue.js 组件精讲/Vue 的构造器——extend 与手动挂载——$mount",
            "/Books/Vue.js 组件精讲/实战 3：动态渲染 .vue 文件的组件—— Display",
            "/Books/Vue.js 组件精讲/实战 4：全局提示组件——$Alert",
            "/Books/Vue.js 组件精讲/更灵活的组件：Render 函数与 Functional Render",
            // '/Books/Vue.js 组件精讲/实战 5：可用 Render 自定义列的表格组件——Table',
            // '/Books/Vue.js 组件精讲/实战 6：可用 slot-scope 自定义列的表格组件——Table',
            "/Books/Vue.js 组件精讲/递归组件与动态组件",
            "/Books/Vue.js 组件精讲/实战 7：树形控件——Tree",
            "/Books/Vue.js 组件精讲/拓展：Vue.js 容易忽略的 API 详解",
            "/Books/Vue.js 组件精讲/拓展：Vue.js 面试、常见问题答疑",
            "/Books/Vue.js 组件精讲/拓展：如何做好一个开源项目（上篇）",
            "/Books/Vue.js 组件精讲/拓展：如何做好一个开源项目（下篇）",
            "/Books/Vue.js 组件精讲/写在最后"
          ]
        }
      ]
    }
  }
};
