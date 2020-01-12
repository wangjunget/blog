const fs = require('fs-extra')
const path = require('path')

module.exports = {
  '/Vue/': getSidebarContent('Vue'),
  '/Python/': getSidebarContent('Python'),
  '/Git/': getSidebarContent('Git'),
  '/Css/': getSidebarContent('Css'),
  '/Linux/': getSidebarContent('Linux'),
  '/Books/': getSidebarContent('Books'),
  '/JavaScript/': getSidebarContent('JavaScript'),
  '/Html/': getSidebarContent('Html'),
  '/Test/': getSidebarContent('Test')
}

function getSidebarContent(category) {
  /**
   * @param category 文章分类
   */
  const sidebarContent = []
  const rootPath = path.resolve(__dirname, `../../${category}`)
  if (fs.existsSync(rootPath)) {
    registerSideBar(sidebarContent, rootPath, `/${category}`)
  }
  return sidebarContent
}

function registerSideBar(list, currentDir, parentRoute) {
  /**
   * @param list 路径存放数组
   * @param currentDir 当前文件夹
   * @param parentRoute 父级路由绝对路径
   */
  fs.readdirSync(currentDir).map(item => {
    const stat = fs.statSync(path.resolve(currentDir, item))
    if (stat && stat.isDirectory()) {
      const group = {
        title: item,
        collapsable: true,
        children: []
      }
      list.push(group)
      registerSideBar(
        group.children,
        path.resolve(currentDir, item),
        `${parentRoute}/${item}`
      )
    } else {
      const homePage = ['index.md', 'INDEX.md', 'README.md']
      if (homePage.indexOf(item) > -1) {
        list.unshift(['', '概览']) // 概览添加到顶部
      } else {
        list.push([`${parentRoute}/${item}`.slice(0, -3), item.slice(0, -3)])
      }
    }
  })
}

function sortRoute(route) {}
