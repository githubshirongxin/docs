#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 如果发布到 https://<USERNAME>.github.io
# git push -u origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# …or push an existing repository from the command line
# git remote add origin git@github.com:githubshirongxin/vuepress.git
# git push -u origin master



git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:githubshirongxin/docs.git master
cd -
