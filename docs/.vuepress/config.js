module.exports = {
    title: '个人博客',
    themeConfig: {
        repo: 'wangjunget/blog-vuepress',
        // editLinks: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '分类', link: '/category'},
            { text: '关于', link: '/about'}
        ],
        sidebar: {
            '/Python/': [
                '',
                ['深入理解Python中的元类', '深入理解Python中的元类'],
                ['one', '第一']
            ]

        },

    }
}