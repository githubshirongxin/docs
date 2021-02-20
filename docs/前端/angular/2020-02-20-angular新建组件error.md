---
layout: post
title: AngularCli新建组件报错（More than one module matches. Use skip-import ...）
---

https://blog.csdn.net/qq_23521659/article/details/83472080

原因：
项目中存在多个module，需要指定某个module新建；

解决办法：
加后缀  --module=app

```bash
Administrator@HDMI-16C64G-PC MINGW64 /f/work/angulartest/angularUISample (master)
$ ng g component components/btn
More than one module matches. Use the skip-import option to skip importing the component into the closest module or use the module option to specify a module.

Administrator@HDMI-16C64G-PC MINGW64 /f/work/angulartest/angularUISample (master)
$ ng g component components/btn --module=app
CREATE src/app/components/btn/btn.component.html (18 bytes)
CREATE src/app/components/btn/btn.component.spec.ts (607 bytes)
CREATE src/app/components/btn/btn.component.ts (264 bytes)
CREATE src/app/components/btn/btn.component.scss (0 bytes)
UPDATE src/app/app.module.ts (1208 bytes)

```