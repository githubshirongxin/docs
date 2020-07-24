
// 以后尝试用用
// vuepress-plugin-auto-sidebar
// https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar

const secret = require("./secret");

//const moment = require('moment');
//moment.locale("zh-cn")

module.exports = {
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'githubshirongxin',
    repo: 'vuepress',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true
  },
  //为了测试方便，暂时把PWA功能注释了。
  // '@vuepress/pwa': {
  //   serviceWorker: true,
  //   updatePopup: {
  //     '/': {
  //       message: "New content is available.",
  //       buttonText: "Refresh"
  //     },
  //     '/zh/': {
  //       message: "发现新内容可用",  
  //       buttonText: "刷新"
  //     }
  //   }
  // },
  "vuepress-plugin-auto-sidebar": {
    nav: true
  },
  '@vuepress/medium-zoom': {
    selector: 'img', // <img>图标适用
  }
}
