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

## 生成新目录的方法
删除nav.js且注释config.js ,npm run build, 放开注释config.js,再npm run build

忽略.gitlab-ci.yml

使用码云或者github创建项目的时候现在都会自动生成.gitignore文件，一定要注意先pull –rebase origin master 下来后在git add，也就是说先把.gitignore文件同步到本地中，在git add，否则.gitignore 文件是无效的。
我就向上面这样做了，那么怎么补救呢？

https://blog.csdn.net/revitalizing/article/details/51337509

```
git rm -r --cached xxx   //xxx表示不再想版本控制的文件，然后在  .gitignore 文件中加入该忽略的文件 
git add .
git commit -m 'update .gitignore'
git push -f //强制来了
```
