const fs = require('fs-extra')
const path = require('path')

module.exports = {
  '/Vue/': [
    {
      title: 'Vue',
      collapsable: false,
      children: [['/Vue/', '关于']]
    }
  ],
  '/Python/': [
    {
      title: 'Python',
      collapsable: false,
      children: [
        ['/Python/', '关于'],
        '/Python/深入理解Python中的元类',
        '/Python/Python单例模式'
      ]
    }
  ],
  
  '/Git/': [
    {
      title: 'Git',
      collapsable: false,
      children: [['/Git/', '关于']]
    }
  ],
  '/Css/': [
    {
      title: 'Css',
      collapsable: false,
      // path: '/Css/',
      children: [
        ['/Css/', '关于'],
        '/Css/文本截断汇总',
        ['/Css/animation', 'animation'],
        ['/Css/transition', 'transition']
      ]
    }
  ],
  '/Linux/': [
    {
      title: 'Linux',
      collapsable: false,
      children: [['/Linux/', '关于']]
    }
  ],
  '/Books/': getBookSidebar(),
  '/JavaScript/': getJsSidebar()
}

function getSubDirContent(category, subDirname) {
  const absolutePath = subDirname ? `${category}/${subDirname}` : category
  return fs.readdirSync(path.resolve(__dirname, `../../${absolutePath}`))
  .map(filename => {
    return (subDirname ? `${subDirname}/` : '') + filename.split(0, -3)
  })
}

function getJsSidebar() {
  return [
    ['', '概览'],
    {
      title: '数组',
      collapsable: true,
      children: getSubDirContent('JavaScript', 'Array')
    },
    {
      title: 'Es6',
      collapsable: true,
      children: getSubDirContent('JavaScript', 'es6')
    }
  ]
}

function getBookSidebar() {
  return [
    ['', '概览'],
    {
      title: 'Vue.js组件精讲',
      collapsable: true,
      children: getSubDirContent('Books', 'Vue.js组件精讲')
    }
  ]
}
