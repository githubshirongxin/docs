module.exports = [ // 注入到当前页面的 HTML <head> 中的标签 favicon.io
    // SEO
    ['meta', { name: 'name', content: 'cjb的资料库' }],
    ['meta', { name: 'keywords', content: 'java,cobol,分布式存储' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'icon', href: '/logo.png' }],
    // PWA
    // ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
]