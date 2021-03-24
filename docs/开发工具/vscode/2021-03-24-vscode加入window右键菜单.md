---
layout: post
title: vscode在windows上右键菜单中
---

vscode的安装目录换一下。然后
随便起个名字.reg ，双击即可。
```
Windows Registry Editor Version 5.00
 
[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="C:\\Users\\writer\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"
 
[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"C:\\Users\\writer\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\" \"%1\""
 
Windows Registry Editor Version 5.00
 
[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="C:\\Users\\writer\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"
 
[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"C:\\Users\\writer\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\" \"%V\""
 
Windows Registry Editor Version 5.00
 
[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="C:\\Users\\writer\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"
 
[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"C:\\Users\\writer\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\" \"%V\""

```