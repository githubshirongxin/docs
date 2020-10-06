git bash

./lazypush.sh

## push to 
- gitlab.ccbjb.com.cn , Spec Runner
- gitlab.com , Shared Runner
- github.com , Travis Ci（https://travis-ci.com/github/githubshirongxin/docs）

## explore blog url
- https://gitlab.ccbjb.com.cn/shirongxin/docs
- https://shirongxin.gitlab.io/docs/
- https://githubshirongxin.github.io/docs/

----

npm run build
npm run dev

## 更优先使用yarn
yarn install
yarn run build
yarn run dev

## 生成新目录的方法
删除nav.js且注释config.js ,yarn run build, 放开注释config.js,再yarn run build


## .gitlab-ci.yml
最终决定还是上传。里面使用了${LOCAL_REGISTRY}变量。
gitlab-UI里定义该变量。
所以，在gitlab.ccbjb.com.cn里定义该变量=docker.ccbjb.com.cn
在gitlab.com里不定义这个变量。

所以，就能在不同的网站上，从不同的地方下载docker镜像了。


