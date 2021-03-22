---
layout: post
title: MYSQL的ibtmp1文件太大怎么处理
---



## ibtmp1太大，导致空间100%
![](/docs/images/2021-03-22-17-58-06.png)
![](/docs/images/2021-03-22-17-57-37.png)

## 解决：
[首页](https://www.chinaz.com) > [问答](https://www.chinaz.com/ask/) > [关键词](//www.chinaz.com/tags/) > [mysql最新资讯](//www.chinaz.com/tags/mysql.shtml) > 正文

# MYSQL的ibtmp1文件太大怎么处理

2020-07-14 14:46 · 稿源：数据库干货铺

<!-- _cz_{"place":"new_article_meta_right","id": "setMetaMedia"} -->

<!-- _cz_{"place":"new_article_pcontent_top","id": "setPtopMedia"} -->

![互联网，大数据](https://upload.chinaz.com/picmap/202006151540006659_8.jpg "互联网，大数据 (图片来源图虫：已授站长之家使用)")

**1.  啥情况呀**

测试环境机器磁盘空间不足的告警打破了下午的沉寂，一群人开始忙活着删数据。但是，不久前刚清理了一波数据，测试环境在没做压测的情况下不至于短短一个月不到就涨了200G数据，于是，我悄悄的进入数据目录下，发现一个不寻常的点，[ibtmp1](//www.chinaz.com/tags/ibtmp1.shtml) 文件有192G

1.   ll \-hibtmp1 
2.  \-rw\-r\-----1[mysql](//www.chinaz.com/tags/mysql.shtml) mysql 192GAug1216：20 ibtmp1

**2.   怎么处理**

**2.1  简单说明**

ibtmp1 是非压缩的innodb临时表的独立表空间，通过innodb\_temp\_data\_file\_path参数指定文件的路径，文件名和大小，默认配置为ibtmp1：12M：autoextend，也就是说在支持大文件的系统这个文件大小是可以无限增长的。

**2.2  解决办法**

a\)  找个空闲时间关闭数据

1.  #设置innodb\_fast\_shutdown参数SET GLOBAL innodb\_fast\_shutdown = 0;# 此步骤可以省略
2.  #关闭数据库实例shutdown;   #  因本实例为MySQL5.7  可以直接在SQL命令行中shutdown关闭

关闭后ibtmp1 文件会自动清理

b\)  修改my.cnf配置文件

为了避免ibtmp1 文件无止境的暴涨导致再次出现此情况，可以修改参数，限制其文件最大尺寸。

如果文件大小达到上限时，需要生成临时表的SQL无法被执行\(一般这种SQL效率也比较低，可借此机会进行优化\)

1.   innodb\_temp\_data\_file\_path \= ibtmp1：12M：autoextend：max：5G# 12M代表文件初始大小，5G代表最大size

c\) 启动mysql服务

启动数据库后可以查一下是否生效

1.  mysql\> show  variables like 'innodb\_temp\_data\_file\_path';+----------------------------+-------------------------------+|Variable\_name|Value|+----------------------------+-------------------------------+| innodb\_temp\_data\_file\_path | ibtmp1：12M：autoextend：max：5G|+----------------------------+-------------------------------+1 row inset\(0.01 sec\)

** 3.  什么情况下会用到临时表**

当EXPLAIN 查看执行计划结果的 Extra 列中，如果包含 Using Temporary 就表示会用到临时表，例如如下几种常见的情况通常就会用到：

a\)  GROUP BY 无索引字段或GROUP  BY+ ORDER  BY 的子句字段不一样时

1.  /\*\*先看一下表结构 \*/mysql\> show  create tabletest\_tmp1\\G\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*1. row \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
2.  Table： test\_tmp1Create Table： CREATE TABLE \`test\_tmp1\`\(
3.  \`id\`int\(11\) NOT NULL AUTO\_INCREMENT，
4.  \`name\` varchar\(50\) DEFAULT NULL，
5.  \`col2\` varchar\(25\) DEFAULT NULL，PRIMARY KEY \(\`id\`\)，KEY \`name\`\(\`name\`\)
6.  \) ENGINE\=InnoDB AUTO\_INCREMENT\=16 DEFAULT CHARSET\=utf81 row inset\(0.00 sec\)/\*\*groupby无索引字段\*/mysql\> explain select\*from test\_tmp1 group bycol2 ;+----+-------------+-----------+------------+------+---------------+------+---------+------+------+----------+---------------------------------+| id | select\_type | table     | partitions | type | possible\_keys | key  | key\_len |ref| rows | filtered |Extra|+----+-------------+-----------+------------+------+---------------+------+---------+------+------+----------+---------------------------------+|1| SIMPLE      | test\_tmp1 | NULL       | ALL  | NULL          | NULL | NULL    | NULL |8|100.00|Using temporary;Using filesort |+----+-------------+-----------+------------+------+---------------+------+---------+------+------+----------+---------------------------------+/\*\*group by 与order by字段不一致时，及时group by和order by字段有索引也会使用 \*/mysql\> explain select name from test\_tmp1 groupby  name order by id desc;+----+-------------+-----------+------------+-------+---------------+------+---------+------+------+----------+-----------------------------------------------------------+| id | select\_type | table     | partitions | type  | possible\_keys | key  | key\_len |ref| rows | filtered |Extra|+----+-------------+-----------+------------+-------+---------------+------+---------+------+------+----------+-----------------------------------------------------------+|1| SIMPLE      | test\_tmp1 | NULL       | range | name          | name |153| NULL |3|100.00|Using index forgroup\-by;Using temporary;Using filesort |+----+-------------+-----------+------------+-------+---------------+------+---------+------+------+----------+-----------------------------------------------------------+1 row inset，1 warning \(0.02 sec\)

b\)  order by  与distinct 共用，其中distinct与order by里的字段不一致\(主键字段除外\)

1.  /\*\*例子中有无索引时会存在，如果 2 个字段都有索引会如何\*/mysql\> alter table  test\_tmp1 add key col2\(col2\);
2.  Query OK，0 rows affected \(1.07 sec\)
3.  Records：0Duplicates：0Warnings：0/\*\* 结果如下，其实该写法与group by +order by 一样\*/mysql\> explain select distinct col2  from test\_tmp1 order  byname;+----+-------------+-----------+------------+-------+---------------+------+---------+------+------+----------+---------------------------------+| id | select\_type | table     | partitions | type  | possible\_keys | key  | key\_len |ref| rows | filtered |Extra|+----+-------------+-----------+------------+-------+---------------+------+---------+------+------+----------+---------------------------------+|1| SIMPLE      | test\_tmp1 | NULL       | index | col2          | col2 |78| NULL |8|100.00|Using temporary;Using filesort |+----+-------------+-----------+------------+-------+---------------+------+---------+------+------+----------+---------------------------------+1 row inset，1 warning \(0.00 sec\)

 c\)  UNION查询\(MySQL5. 7 后union all已不使用临时表\)

1.  /\*\*先测一下union all的情况\*/mysql\> explain select name from test\_tmp1 union all  select name from test\_tmp1 where id \<10;+----+-------------+-----------+------------+-------+---------------+---------+---------+------+------+----------+-------------+| id | select\_type | table     | partitions | type  | possible\_keys | key     | key\_len |ref| rows | filtered |Extra|+----+-------------+-----------+------------+-------+---------------+---------+---------+------+------+----------+-------------+|1| PRIMARY     | test\_tmp1 | NULL       | index | NULL          | name    |153| NULL |8|100.00|Using index ||2| UNION       | test\_tmp1 | NULL       | range | PRIMARY       | PRIMARY |4| NULL |8|100.00|Usingwhere|+----+-------------+-----------+------------+-------+---------------+---------+---------+------+------+----------+-------------+2 rows inset，1 warning \(0.01 sec\)/\*\*再看一下union 作为对比，发现出现了使用临时表的情况\*/mysql\> explain select name from test\_tmp1 unionselect name from test\_tmp1 where id \<10;+----+--------------+------------+------------+-------+---------------+---------+---------+------+------+----------+-----------------+| id | select\_type  | table      | partitions | type  | possible\_keys | key     | key\_len |ref| rows | filtered |Extra|+----+--------------+------------+------------+-------+---------------+---------+---------+------+------+----------+-----------------+|1| PRIMARY      | test\_tmp1  | NULL       | index | NULL          | name    |153| NULL |8|100.00|Using index     ||2| UNION        | test\_tmp1  | NULL       | range | PRIMARY       | PRIMARY |4| NULL |8|100.00|Usingwhere|| NULL | UNION RESULT |\<union1，2\>| NULL       | ALL   | NULL        | NULL    | NULL    | NULL | NULL |     NULL |Using temporary |+----+--------------+------------+------------+-------+---------------+---------+---------+------+------+----------+-----------------+3 rows inset，1 warning \(0.00 sec\)

d\)  insert into select ...from ...

1.  /\*\*简单看一下本表的数据重复插入的情况 \*/mysql\> explain insert into test\_tmp1\(name，col2\)select name，col2 from test\_tmp1;+----+-------------+-----------+------------+------+---------------+------+---------+------+------+----------+-----------------+| id | select\_type | table     | partitions | type | possible\_keys | key  | key\_len |ref| rows | filtered |Extra|+----+-------------+-----------+------------+------+---------------+------+---------+------+------+----------+-----------------+|1| INSERT      | test\_tmp1 | NULL       | ALL  | NULL          | NULL | NULL    | NULL | NULL |     NULL | NULL            ||1| SIMPLE      | test\_tmp1 | NULL       | ALL  | NULL          | NULL | NULL    | NULL |8|100.00|Using temporary |+----+-------------+-----------+------------+------+---------------+------+---------+------+------+----------+-----------------+2 rows inset\(0.00 sec\)

小结：  上面列举的是最常见的使用临时表的情况，其中基本都是引起慢查询的因素，因此，如果遇到临时表空间文件暴涨是需要查看一下是否有大量的慢查询。

**4.  和临时表空间相关的参数有哪些**

各参数之间相互影响，其中直接影响临时表空间的参数如要有如下几个

1.  innodb\_temp\_data\_file\_path 
2.  tmp\_table\_size
3.  max\_heap\_table\_size
4.  default\_tmp\_storage\_engine
5.  internal\_tmp\_disk\_storage\_engine

**5.  下面来模拟一个ibtmp1 文件快速膨胀的例子**

**5.1  调整参数值**

上面列出了主要的参数，那么先调整一下参数，以便于模拟

1.  tmp\_table\_size \=16M
2.  innodb\_temp\_data\_file\_path \= ibtmp1：12M：autoextend：max：5G

调整后重启数据库

**5.2   造一批数据**

1.  /\*\*造一张表或者从其他表复制一批数据，为了方便模拟，可以不创建主键及索引\*/mysql\> create table test\_tmp3 select\*from db1.tbname;
2.  Query OK，15948372 rows affected \(2 min 27.24 sec\)
3.  Records：15948372Duplicates：0Warnings：0

此时查看一下ibtmp1 文件的大小

1.  ll \-h ibtmp1 
2.  \-rw\-r\-----1 mysql mysql 12MAug1516：06 ibtmp1  /\*\*此时是默认的初始大小\*/

**5.2  使用insert into ... select \* from ...的方式插入**

1.  /\*\*此方式将会使用临时表空间，且 tmp\_table\_size参数已调小为16M，本表当前有2G多，所以会使用临时表空间\*/mysql\> insert into  test\_tmp3 select\*from test\_tmp3 ;
2.  Query OK，15948372 rows affected \(2 min 7.40 sec\)
3.  Records：15948372Duplicates：0Warnings：0

此时 查看一下ibtmp1 文件的大小

1.   ll \-h ibtmp1 
2.  \-rw\-r\-----1 mysql mysql 2.8GAug1516：17 ibtmp1  /\*\*此时已使用了2.8G\*/

此时该表的size如下

1.   ll \-h bak\_db/test\_tmp3\*/\*\* 结果中已有5.8G\*/\-rw\-r\-----1 mysql mysql 8.9KAug1516：04 bak\_db/test\_tmp3.frm\-rw\-r\-----1 mysql mysql 5.8GAug1516：16 bak\_db/test\_tmp3.ibd

**5.3  继续测试，看看会发生什么**

因为ibtmp1 当前设置的最大值为5G，继续复制一个5.8G的数据，会不会异常，如果异常有什么表现\?

1.  /\*\* 继续插入时 因临时表空间大小有限制，超过5G后将异常，信息如下\*/mysql\> insert into  test\_tmp3 select\*from test\_tmp3;
2.  ERROR 1114\(HY000\)：The table '/app/data/mysql3306/tmp/#sql\_32469\_0'is full

此时 查看一下ibtmp1 文件的大小

1.   ll \-h ibtmp1 
2.  \-rw\-r\-----1 mysql mysql 5.0GAug1516：17 ibtmp1/\*\*此时已使用了5.0G，已达到上限\*/

数据库日志里也会记录本次异常

1.  2019\-08\-15T08：23：47.016495Z3\[ERROR\]/usr/local/mysql5.7/bin/mysqld：The table '/app/data/mysql3306/tmp/#sql\_32469\_0'is full

以上测试实例因不同的版本可能会有差异，建议大家亲自测试一下。


