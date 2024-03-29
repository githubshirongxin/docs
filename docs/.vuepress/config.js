const headConf = require("./config/headConf.js");
const pluginsConf = require("./config/pluginsConf");
const nav = require("./nav");


module.exports = {
  base: "/docs/",
  title: '积累',
  dest: "public",
  description: '共享库',
  head: headConf,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: pluginsConf,
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/logo.png',
    nav: nav,
    searchMaxSuggestions: 10
    /* 方案1：侧边栏只显示三组中的一组链接 */
    // sidebar: sidebarConf, //使用了vuepress plugin auto sidebar就不用这些了
  }
}