---
layout: post
title: 《natural of code》 笔记
---

本书目的：用代码模拟大自然。

## 第一章，向量  P23

### 1.1 向量

### 1.2 Processing中的向量

### 1.3 向量的加法

### 1.4 更多的向量运算

### 1.5 向量的长度

### 1.6 单位化的向量

### 1.7 向量的运动：速度

### 1.8 向量的运动：加速度

### 1.9 静态函数和非静态函数

### 1.10 加速度的交互

### 第一章总结

---
## 第二章，力 【P54  (真实页面73)】

### 2.1 力和牛顿运动定律

### 2.2 牛顿第二定律编写函数

### 2.3 力的累加

### 2.4 处理质量

### 2.5 制造外力

### 2.6 地球引力和力的建模

### 2.7 摩擦力

### 2.8 空气和流体阻力

### 2.9 引力 （※重点）

### 2.10 万有引力

---
## 第三章，振荡 P86

### 3.1 角度

### 3.2 角运动

### 3.3 三角函数

### 3.4 指向运动的方向

### 3.5 极坐标系和笛卡尔坐标系

### 3.6 振荡振幅和振荡

### 3.7 带角速度的振荡

### 3.8 波

### 3.9 三角函数和力：钟摆

### 3.10 弹力

---
## 第四章，粒子 P122

### 4.1 为什么需要粒子系统

### 4.2 单个粒子

### 4.3 使用ArrayList

### 4.4 粒子系统类

### 4.5 由系统组成的系统

### 4.6 继承和多态的简介

### 4.7 继承基础

### 4.8 用继承实现粒子类

### 4.9 多态基础

### 4.10 用多态实现粒子系统

### 4.11 受力作用的粒子系统

### 4.12 带排斥对象的粒子系统

### 4.13 图像纹理和加法混合

---
## 第五章，物理函数库（引擎） P160 （重要）

- 客观：
  - 处理“碰撞”问题
  - Boxe2D和verletPhysics两个库
  - 用物理引擎来写之前的processing程序
  - 需要理解前面讲的“向量”
  - 它不是图形学，它就是物理计算。输入和输出都是数字
- 主观：

- 结论：
  

### 5.1 Boxe2D

### 5.2 获取Processing中的Box2D

### 5.3 Box2d的基础

### 5.4 生活在box2d的世界

### 5.5 创建一个box2d的物体

### 5.6 三要素：物体，形状和夹具

### 5.7 Box2D和Processing的结合

### 5.8 固定的Box2d对象

### 5.9 弯曲的边界

### 5.10 复杂的形状

### 5.11 Box2d关节

- 钟摆，轮子等带关节的复杂形状

### 5.12 回到力的话题
- 将力引入box2d

### 5.13 碰撞事件

- 碰撞时box2d的特性
- 获得碰撞的对象

### 5.14 积分法
- 微分就是求导数。找到函数随事件变化的规律。
- 速度为位置的导数
- 积分，就是求导的逆运算。
- 位置是速度的积分，积分就是物体在某个时间点的位置。
- 欧拉积分不那么精确的积分，但也足够

### 5.15 toxiclibs.verletPhysics物理库
- 包括可视化，界面交互
- 本章介绍他的verlet物理库，但是无法处理碰撞
- 粒子相互吸引相互排斥，更应该用toxiclibs
- 三维必须用toxiclibs，Box2d不支持三维
- 不处理任何几何形状
![](/docs/images/2020-12-15-16-10-35.png)

### 5.16 toxiclibs中的粒子和弹簧

### 5.17 整合代码：一个简单的交互式弹簧

### 5.18 相连的系统I：绳子

### 5.19 相连的系统II：力导向图

### 5.20 吸引和排斥行为



---
## 第六章，自治智能体  （重要）P218  
- 之前学的都是没生命的，这次把生命注入形状
- 自主行为
- 这些主体的群集行为
- 寻找，到达，流场，路径跟随，群集
  
### 6.1 内部的力

### 6.2 车辆和转向

### 6.3 转向力

### 6.4 到达行为

### 6.5 你的意图：所需速度

- 寻找和到达
  
### 6.6 流场
- 就像水流一样的方向

### 6.7 点乘
- 这是路径跟随的基础，向量的一种运算（点积）
- 
### 6.8 路径跟随
- 不是路径寻找，两点之间最短距离
- 而是路径跟随，路径已经有了，就是沿着路径行走。

### 6.9 多端路径跟随

### 6.10 复杂系统
- 个体之间相互影响
- 协同工作
- 竞争与合作 


### 6.11 群体行为（不要碰到对方）

### 6.12 结合
- 多个行为的结合模拟复杂系统的自发行为。例如寻找和分离。
- 小车互相之间远了就近点，近了就远点。

### 6.13 群集
- 避免和邻居碰撞，转向和邻居一致，插着邻居的中心转向
- 沙丁鱼群

### 6.14 算法效率（为什么程序跑的这么慢）
- 复杂度
- 网格空间分割降低复杂度
  

### 6.15 最后的几个优化技巧

## 第六章总结：
增加群体行为，寻找，路径跟随，流场，聚合与分离。
让每个个体有自主行为

---
## 第七章，细胞自动机 P270
- 接着群集的研究
- 随着时间的推移，运动对象的状态发生改变的系统。如生死。

### 7.1 什么是细胞自动机

### 7.2 初等细胞自动机

### 7.3 如何编写初等细胞自动机

### 7.4 绘制初等CA
- 一行细胞
- 根据周围两个细胞计算下一帧自己这个细胞的状态
  
### 7.5 Wolfram分类
- 统一，重复，随机，复杂四种
  
### 7.6 生命游戏
- 核心目标：用代码模拟大自然
- 细胞矩阵
- 根据周围细胞计算下一帧自己这个细胞的状态
- 简化成“死亡”，“新生”，“静止”
### 7.7 编写生命游戏

### 7.8 面向对象的细胞实现
- 使细胞可以增加一些扩展行为，细胞就是对象
  
### 7.9 传统CA的变化
- 非矩形细胞


---
## 第八章，分形 P297
- 用来模拟自然中的图形
- 每个部分都是整体缩小后的形状。

### 8.1 什么是分型
- 自相似结构
  
### 8.2 递归
- 构造分形，只能产图案，无法把图案当作对象。
  
### 8.3 用递归函数实现康托尔集

### 8.4 科赫曲线和ArrayList技术
- 把图案的各个部分当作对象，产生分形
- 科赫曲线就是雪花 

### 8.5 树
- 以上都是确定性的图形，不够贴近自然，自然是不确定的。
- 这里是不确定技术构造分形，会不那么对称了，自然

### 8.6 L系统
- 模拟植物生长的系统，不确定分形。Lindenmayer系统。
- 用它可以画出所有分形

---
## 第九章，代码的进化  P327

- 把对象当作DNA，产生新的对象并把自己的DNA传给下一代
- 交互式选择，看一幅油画，根据你的喜好自动产生油画
- 模拟对象的相遇结合，基因传给下一代。模拟生态系统


### 9.1 遗传算法：启发自真实现象
- 遗传算法是为了解决解无穷多，穷举不了的情况

### 9.2 为什么使用遗传算法

### 9.3 达尔文的自然选择
- 遗传，突变，选择

### 9.4 遗传算法，第一部分：创建种群
- 随机生成个体，个体拥有DNA（随机）
### 9.5 遗传算法，第二部分：选择
- 适应度：正确的字符数量
- 创建交配池：适应度的分值当作权重（占比）当作随机概率，获得繁殖机会
- 繁殖：就是子的每个字母都随机父母的所有字母
- 突变：概率低的子，可以替换掉字母，该字母父母都没有
### 9.6 遗传算法，第三部分：繁殖

### 9.7 创建种群的代码 初始化，选择，繁殖

### 9.8 遗传算法：整合代码

### 9.9 遗传算法：创建自己的遗传算法
![](/docs/images/2020-12-15-18-05-40.png)

### 9.10 力的进化：智能火箭
- 上面的应用。
  
### 9.11 智能火箭：代码整合
- 火箭绕障碍物，更快地抵达目标
- Evolved Virtual Creatures 论文 Sims技术
- BoxCard2d模拟了车的进化
  
### 9.12 交互式选择
- 适应度由客户传感器来计算
- 
### 9.13 生态系统模拟
#### 9.13.1 基因型和表现型

#### 9.13.2 选择和繁殖

---
## 第十章，神经网络 P371

- 神经网络动画和可视化技术
- 只是一个计算模型
- 解决的是人容易做而机器不容易的事情，例如认识人


### 10.1 导论和应用
- 这类任务统称模式识别
- 神经网络由学习能力
- 可以根据流经自身的信息改变自身的内部结构，通过调整权重
- 模式识别，时序预测，信号处理（脑电波，声波放大），控制（自动驾驶），软传感器，异常检测

### 10.2 感知器
- 输入，权重，输出，
- 偏置
### 10.3 用感知器进行简单的模式识别
- 输入时x，y
- 输入+-1，表示两种状态
- 偏置解决0的问题
  
### 10.4 实现感知器
- 新权重 = 老权重 + 误差
  
### 10.5 转向感知器
- 转向力当输入，感知器对输入的权重处理，最后产生输出的转向力
- 小车把转向力运算交给了brain
- 感知器的输入变成了向量

得学好前面两章，不行复习复习

### 10.6 还记得这是个网络吗
- 单个感知器只能解决线性问题
- 两个以上得感知器合起来解决非线性问题。
- 难点：如何训练多层神经网络？
  - 反向传播（需要更复杂的基于微积分的激励函数）不是我们的重点。
 
### 10.7 神经网络图
就是个图

### 10.8 实现前馈动画
是动画
体现信息流传播，一个圆点在线上移动
### 10.9 结束语

#### 第十章总结
