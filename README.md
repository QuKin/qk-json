# qk-json

> 作者：QuKin
>
> 邮箱：13606184008@163.com

[![QuKie/qk-json](https://gitee.com/qukie/qk-json/widgets/widget_card.svg?colors=4183c4,ffffff,ffffff,e3e9ed,666666,9b9b9b)](https://gitee.com/qukie/qk-json)



## 了解

> 介绍：js对json数据进行操作
>
> 版本：V1.3.2

方法简洁明了的操作

有没有为网上哪些对json操作感到厌烦的
有些甚至还无法完成
感觉写出来不优雅的
都可以瞅瞅这个包，代码简洁好用，并且操作方式也非常的简单
源码使用JS类写的并且有注释，不会还可以去看文档，文档连接在下方
如果觉得这个方法好的，还可以从源码里面下载下来直接在你的项目中用
我就不把所有方法列出来了，比较多，好像有二十多个方法呢
如果没有npm，还提供了一个js方法，直接script src导入即可



### 安装

#### NPM

`npm i qk-json`

#### CDN

##### 开发板

https://unpkg.com/qk-json@1.3.2/qk-json.js

##### 压缩版

https://unpkg.com/qk-json@1.3.2/qk-json.min.js


### 源码

[Gitee](https://gitee.com/qukie/qk-json)

[GitHub](https://github.com/QuKin/qk-json)

### 文档

[国内](http://qukie.gitee.io/qk-json/docs/index.html)

[国外](https://qukin.github.io/qk-json/)



### 更新说明

#### V1.3.0

更新了四种常用的连表查询：内连接、左连接、右连接和完全连接，还有json去重



### 目录结构

|- docs						开发文档
|- ------- ...
|- index.html			重定向到开发文档内
|- index.js				  针对node的源码
|- LICENSE				 许可证
|- package.json	   node配置文件
|- qk-json.js			  针对DOM的源码
|- qk-json.min.js	 针对DOM的源码，压缩后
|- README.md		文档
|- test.js					 测试代码
|- test.json				测试代码用到的json数据

## 使用

### 起始

先要引入qk-json，并生成一个json数据

```js
const index = require("qk-json");
let json = [
    { "id": 0, "name": "aaa" },
    { "id": 1, "name": "bbb" },
    { "id": 2, "name": "ccc" },
    { "id": 3, "name": "ddd" },
    { "id": 4, "name": "eee" },
    { "id": 5, "name": "fff" },
    { "id": 6, "name": "ggg" },
    { "id": 7, "name": "hhh" },
    { "id": 8, "name": "iii" },
    { "id": 9, "name": "jjj" }
];
```



### get

获取值

#### 代码

```js
let main = new index(json);
console.log(main.get());
console.log(main.get(3));
```

#### 运行效果

```json
[
  { "id": 0, "name": "aaa" },
  { "id": 1, "name": "bbb" },
  { "id": 2, "name": "ccc" },
  { "id": 3, "name": "ddd" },
  { "id": 4, "name": "eee" },
  { "id": 5, "name": "fff" },
  { "id": 6, "name": "ggg" },
  { "id": 7, "name": "hhh" },
  { "id": 8, "name": "iii" },
  { "id": 9, "name": "jjj" }
]
[
  { "id": 0, "name": "aaa" },
  { "id": 1, "name": "bbb" },
  { "id": 2, "name": "ccc" }
]
```



### set

设置JSON数组值

#### 代码

```js
let main = new index();
console.log(main.get()); // []
main.set(json);
console.log(main.get());
main.set(JSON.stringify(json));
console.log(main.get());
main.set("test.json");
console.log(main.get());
```



#### 运行效果

```json
[]
[
  { "id": 0, "name": "aaa" },
  { "id": 1, "name": "bbb" },
  { "id": 2, "name": "ccc" },
  { "id": 3, "name": "ddd" },
  { "id": 4, "name": "eee" },
  { "id": 5, "name": "fff" },
  { "id": 6, "name": "ggg" },
  { "id": 7, "name": "hhh" },
  { "id": 8, "name": "iii" },
  { "id": 9, "name": "jjj" }
]
[
  { "id": 0, "name": "aaa" },
  { "id": 1, "name": "bbb" },
  { "id": 2, "name": "ccc" },
  { "id": 3, "name": "ddd" },
  { "id": 4, "name": "eee" },
  { "id": 5, "name": "fff" },
  { "id": 6, "name": "ggg" },
  { "id": 7, "name": "hhh" },
  { "id": 8, "name": "iii" },
  { "id": 9, "name": "jjj" }
]
[
  {
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2",
    "children": [ 
      {
        "id": 1,
        "first_name": "a",
        "last_name": "a",
        "email": "a@census.gov",
        "gender": "Female"
      },
      {
        "id": 2,
        "first_name": "b",
        "last_name": "b",
        "email": "b@census.gov",
        "gender": "Female"
      }
    ]
  },
  {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male",
    "ip_address": "229.179.4.212"
  },
  {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "gender": "Female",
    "ip_address": "180.66.162.255"
  },
  {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "gender": "Male",
    "ip_address": "67.76.188.26"
  }
]
```



### first

获取第一个值

#### 代码

```js
let main = new index(json);
console.log(main.first());
```



#### 运行效果

```json
{ "id": 0, "name": "aaa" }
```



### last

获取最后一个值

#### 代码

```js
let main = new index(json);
console.log(main.last());
```



#### 运行效果

```json
{ "id": 9, "name": "jjj" }
```



### pagination

分页

#### 代码

```js
let main = new index(json);
console.log(main.pagination(2, 3).get());
```



#### 运行效果

```json
[
  { "id": 6, "name": "ggg" },
  { "id": 7, "name": "hhh" },
  { "id": 8, "name": "iii" }
]
```



### limit

限制查询

#### 代码

```js
let main = new index(json);
console.log(main.limit(0, 2).get());
```



#### 运行效果

```json
[ { "id": 0, "name": "aaa" }, { "id": 1, "name": "bbb" } ]
```



### whereAll

查询

#### 代码

```js
let main = new index(json);
console.log(main.whereAll([["name", "bbb"], ["id", "<", 2]]).get());
```



#### 运行效果

```json
[ { "id": 1, "name": "bbb" } ]
```



### where

查询

#### 代码

```js
let main = new index(json);
console.log(main.where("id", 1).get());
main.clear(); // 清除掉where缓存
console.log(main.where("id", "<", 2).get());
main.clear();
console.log(main.where((item) => item.id > 6).get());
```



#### 运行效果

```json
[ { "id": 1, "name": "bbb" } ]
[ { "id": 0, "name": "aaa" }, { "id": 1, "name": "bbb" } ]
[
  { "id": 7, "name": "hhh" },
  { "id": 8, "name": "iii" },
  { "id": 9, "name": "jjj" }
]
```



### whereD

查询，默认为==

#### 代码

```js
let main = new index(json);
console.log(main.where("id", 1).get());
```



#### 运行效果

```json
[ { "id": 1, "name": "bbb" } ]
```



### whereS

查询

#### 代码

```js
let main = new index(json);
console.log(main.where("id", "<", 2).get());
```



#### 运行效果

```json
[ { "id": 0, "name": "aaa" }, { "id": 1, "name": "bbb" } ]
```



### whereC

查询，回调

#### 代码

```js
let main = new index(json);
console.log(main.where((item) => item.id > 6).get());
```



#### 运行效果

```json
[
  { "id": 7, "name": "hhh" },
  { "id": 8, "name": "iii" },
  { "id": 9, "name": "jjj" }
]
```



### select

查询单个键名

#### 代码

```js
let main = new index(json);
console.log(main.where("id", 2).select("name").get());
```



#### 运行效果

```tex
ccc
```



### eq

查询指定下标

#### 代码

```js
let main = new index(json);
console.log(main.where("id", "<", 2).eq(1).get());
```



#### 运行效果

```json
{ "id": 1, "name": "bbb" }
```



### insert

插入数据

#### 代码

```js
let main = new index(json);
main.insert({ "id": 10, "name": "kkk" });
console.log(main.where("id", ">", 8).get());
```



#### 运行效果

```json
[ { "id": 9, "name": "jjj" }, { "id": 10, "name": "kkk" } ]
```



### insertKey

插入键名

#### 代码

```js
let main = new index(json);
main.insertKey("age", 10);
console.log(main.first());
```



#### 运行效果

```json
{ "id": 0, "name": "aaa", "age": 10 }
```



### update

修改数据

#### 代码

```js
let main = new index(json);
main.where("id", 1).update("name", "lll");
console.log(main.where("id", 1).get());
```



#### 运行效果

```json
[ { "id": 1, "name": "lll" } ]
```



### delete

删除数据

#### 代码

```js
let main = new index(json);
let temp = main.where("id", 1).delete();
console.log(temp);
```



#### 运行效果

```json
[
  { "id": 0, "name": "aaa" },
  { "id": 2, "name": "ccc" },
  { "id": 3, "name": "ddd" },
  { "id": 4, "name": "eee" },
  { "id": 5, "name": "fff" },
  { "id": 6, "name": "ggg" },
  { "id": 7, "name": "hhh" },
  { "id": 8, "name": "iii" },
  { "id": 9, "name": "jjj" }
]
```



### deleteKey

删除键名

#### 代码

```js
let main = new index(json);
main.deleteKey("name");
console.log(main.first());
```



#### 运行效果

```json
{ "id": 0 }
```



### equal

判断两个json是否相等

#### 代码

```js
let main = new index(json);
let json1 = { "id": 1, "name": "a", "children": [1, 2] };
let json2 = { "id": 1, "name": "a", "children": [1, 2] };
console.log(main.equal(json1, json2));
```



#### 运行效果

```json
true
```



### orderBy

排序

#### 代码

```js
let main = new index(json);
console.log(main.where("id", "<", 2).orderBy(["name"], "desc").get());
```



#### 运行效果

```json
[ { "id": 1, "name": "bbb" }, { "id": 0, "name": "aaa" } ]
```



### expor

node导出

#### 代码

```js
let main = new index(json);
main.export("demo");
```



#### 运行效果

在本地文件夹中创建demo.json文件



### unRepeat

去重

#### 代码

```js
let repeats = [{ "id": 1, "name": "a" }, { "id": 2, "name": "b" }, { "id": 1, "name": "a" }];
let main = new index();
console.log(main.unRepeat(repeats, "id"));
```



#### 运行效果

```json
[ { "id": 1, "name": "a" }, { "id": 2, "name": "b" } ]
```





### 连表



#### 初始数据

```js
let student = [
    { "学号": 1001, "姓名": "FF", "性别": "女", "籍贯": "山东", "年龄": 18, "成绩级别": "A", "联系电话": 15112, "测试": 1 },
    { "学号": 1002, "姓名": "NN", "性别": "女", "籍贯": "河南", "年龄": 19, "成绩级别": "C", "联系电话": 15212, "测试": 2 },
    { "学号": 1003, "姓名": "ZZ", "性别": "男", "籍贯": "河南", "年龄": 17, "成绩级别": "B", "联系电话": 15312, "测试": 1 },
    { "学号": 1004, "姓名": "JJ", "性别": "男", "籍贯": "湖南", "年龄": 19, "成绩级别": "A", "联系电话": 15412, "测试": 3 },
    { "学号": 1005, "姓名": "AA", "性别": "男", "籍贯": "湖南", "年龄": 17, "成绩级别": "B", "联系电话": 15512, "测试": 4 },
    { "学号": 1006, "姓名": "HH", "性别": "女", "籍贯": "山东", "年龄": 18, "成绩级别": "B", "联系电话": 15612, "测试": 7 },
    { "学号": 1007, "姓名": "YY", "性别": "男", "籍贯": "河南", "年龄": 19, "成绩级别": "A", "联系电话": 15712, "测试": 1 },
    { "学号": 1008, "姓名": "KK", "性别": "女", "籍贯": "河南", "年龄": 17, "成绩级别": "C", "联系电话": 15812, "测试": 8 }
];

let classes = [
    { "学号": 1001, "专业": "计算机", "班级": "计191", "测试": 1 },
    { "学号": 1002, "专业": "会计", "班级": "会计191", "测试": 2 },
    { "学号": 1003, "专业": "计算机", "班级": "计192", "测试": 3 },
    { "学号": 1004, "专业": "英语", "班级": "英语182", "测试": 4 },
    { "学号": 1006, "专业": "土木工程", "班级": "土木201", "测试": 6 },
    { "学号": 1007, "专业": "软件工程", "班级": "软件221", "测试": 7 },
    { "学号": 1009, "专业": "软件工程", "班级": "软件222", "测试": 8 }
];
```





#### innerJoin

内连接

##### 代码

```js
let main = new index(student);
main.innerJoin(classes, ["学号", "测试"]);
console.log(main.get());
```



##### 运行效果

```json
[
  {
    "学号": 1001,
    "姓名": "FF",
    "性别": "女",
    "籍贯": "山东",
    "年龄": 18,
    "成绩级别": "A",
    "联系电话": 15112,
    "测试": 1,
    "专业": "计算机",
    "班级": "计191"
  },
  {
    "学号": 1002,
    "姓名": "NN",
    "性别": "女",
    "籍贯": "河南",
    "年龄": 19,
    "成绩级别": "C",
    "联系电话": 15212,
    "测试": 2,
    "专业": "会计",
    "班级": "会计191"
  }
]
```



#### leftJoin

左连接

##### 代码

```js
let main = new index(student);
main.leftJoin(classes, "学号");
console.log(main.get());
```



##### 运行效果

```json
[
  {
    "学号": 1001,
    "姓名": "FF",
    "性别": "女",
    "籍贯": "山东",
    "年龄": 18,
    "成绩级别": "A",
    "联系电话": 15112,
    "测试": 1,
    "专业": "计算机",
    "班级": "计191"
  },
  {
    "学号": 1002,
    "姓名": "NN",
    "性别": "女",
    "籍贯": "河南",
    "年龄": 19,
    "成绩级别": "C",
    "联系电话": 15212,
    "测试": 2,
    "专业": "会计",
    "班级": "会计191"
  },
  {
    "学号": 1003,
    "姓名": "ZZ",
    "性别": "男",
    "籍贯": "河南",
    "年龄": 17,
    "成绩级别": "B",
    "联系电话": 15312,
    "测试": 1,
    "专业": "计算机",
    "班级": "计192"
  },
  {
    "学号": 1004,
    "姓名": "JJ",
    "性别": "男",
    "籍贯": "湖南",
    "年龄": 19,
    "成绩级别": "A",
    "联系电话": 15412,
    "测试": 3,
    "专业": "英语",
    "班级": "英语182"
  },
  {
    "学号": 1005,
    "姓名": "AA",
    "性别": "男",
    "籍贯": "湖南",
    "年龄": 17,
    "成绩级别": "B",
    "联系电话": 15512,
    "测试": 4,
    "专业": null,
    "班级": null
  },
  {
    "学号": 1006,
    "姓名": "HH",
    "性别": "女",
    "籍贯": "山东",
    "年龄": 18,
    "成绩级别": "B",
    "联系电话": 15612,
    "测试": 7,
    "专业": "土木工程",
    "班级": "土木201"
  },
  {
    "学号": 1007,
    "姓名": "YY",
    "性别": "男",
    "籍贯": "河南",
    "年龄": 19,
    "成绩级别": "A",
    "联系电话": 15712,
    "测试": 1,
    "专业": "软件工程",
    "班级": "软件221"
  },
  {
    "学号": 1008,
    "姓名": "KK",
    "性别": "女",
    "籍贯": "河南",
    "年龄": 17,
    "成绩级别": "C",
    "联系电话": 15812,
    "测试": 8,
    "专业": null,
    "班级": null
  }
]
```



#### rightJoin

右连接

##### 代码

```js
let main = new index(student);
main.rightJoin(classes, "学号");
console.log(main.get());
```



##### 运行效果

```json
[
  {
    "学号": 1001,
    "姓名": "FF",
    "性别": "女",
    "籍贯": "山东",
    "年龄": 18,
    "成绩级别": "A",
    "联系电话": 15112,
    "测试": 1,
    "专业": "计算机",
    "班级": "计191"
  },
  {
    "学号": 1002,
    "姓名": "NN",
    "性别": "女",
    "籍贯": "河南",
    "年龄": 19,
    "成绩级别": "C",
    "联系电话": 15212,
    "测试": 2,
    "专业": "会计",
    "班级": "会计191"
  },
  {
    "学号": 1003,
    "姓名": "ZZ",
    "性别": "男",
    "籍贯": "河南",
    "年龄": 17,
    "成绩级别": "B",
    "联系电话": 15312,
    "测试": 3,
    "专业": "计算机",
    "班级": "计192"
  },
  {
    "学号": 1004,
    "姓名": "JJ",
    "性别": "男",
    "籍贯": "湖南",
    "年龄": 19,
    "成绩级别": "A",
    "联系电话": 15412,
    "测试": 4,
    "专业": "英语",
    "班级": "英语182"
  },
  {
    "学号": 1006,
    "姓名": "HH",
    "性别": "女",
    "籍贯": "山东",
    "年龄": 18,
    "成绩级别": "B",
    "联系电话": 15612,
    "测试": 6,
    "专业": "土木工程",
    "班级": "土木201"
  },
  {
    "学号": 1007,
    "姓名": "YY",
    "性别": "男",
    "籍贯": "河南",
    "年龄": 19,
    "成绩级别": "A",
    "联系电话": 15712,
    "测试": 7,
    "专业": "软件工程",
    "班级": "软件221"
  },
  {
    "学号": 1009,
    "姓名": null,
    "性别": null,
    "籍贯": null,
    "年龄": null,
    "成绩级别": null,
    "联系电话": null,
    "测试": 8,
    "专业": "软件工程",
    "班级": "软件222"
  }
]
```



#### fullJoin

完全连接

##### 代码

```js
let main = new index(student);
main.fullJoin(classes, "学号");
console.log(main.get());
```



##### 运行效果

```json
[
  {
    "学号": 1001,
    "姓名": "FF",
    "性别": "女",
    "籍贯": "山东",
    "年龄": 18,
    "成绩级别": "A",
    "联系电话": 15112,
    "测试": 1,
    "专业": "计算机",
    "班级": "计191"
  },
  {
    "学号": 1002,
    "姓名": "NN",
    "性别": "女",
    "籍贯": "河南",
    "年龄": 19,
    "成绩级别": "C",
    "联系电话": 15212,
    "测试": 2,
    "专业": "会计",
    "班级": "会计191"
  },
  {
    "学号": 1003,
    "姓名": "ZZ",
    "性别": "男",
    "籍贯": "河南",
    "年龄": 17,
    "成绩级别": "B",
    "联系电话": 15312,
    "测试": 1,
    "专业": "计算机",
    "班级": "计192"
  },
  {
    "学号": 1004,
    "姓名": "JJ",
    "性别": "男",
    "籍贯": "湖南",
    "年龄": 19,
    "成绩级别": "A",
    "联系电话": 15412,
    "测试": 3,
    "专业": "英语",
    "班级": "英语182"
  },
  {
    "学号": 1005,
    "姓名": "AA",
    "性别": "男",
    "籍贯": "湖南",
    "年龄": 17,
    "成绩级别": "B",
    "联系电话": 15512,
    "测试": 4,
    "专业": null,
    "班级": null
  },
  {
    "学号": 1006,
    "姓名": "HH",
    "性别": "女",
    "籍贯": "山东",
    "年龄": 18,
    "成绩级别": "B",
    "联系电话": 15612,
    "测试": 7,
    "专业": "土木工程",
    "班级": "土木201"
  },
  {
    "学号": 1007,
    "姓名": "YY",
    "性别": "男",
    "籍贯": "河南",
    "年龄": 19,
    "成绩级别": "A",
    "联系电话": 15712,
    "测试": 1,
    "专业": "软件工程",
    "班级": "软件221"
  },
  {
    "学号": 1008,
    "姓名": "KK",
    "性别": "女",
    "籍贯": "河南",
    "年龄": 17,
    "成绩级别": "C",
    "联系电话": 15812,
    "测试": 8,
    "专业": null,
    "班级": null
  },
  {
    "学号": 1009,
    "姓名": null,
    "性别": null,
    "籍贯": null,
    "年龄": null,
    "成绩级别": null,
    "联系电话": null,
    "测试": 8,
    "专业": "软件工程",
    "班级": "软件222"
  }
]
```



## 整合



 * 使用test.json文件进行
 * 新增一条数据
 * 都添加一个age字段，默认值为10
 * 在"id"大于2中的age字段设置为18
 * 在"id"为1里的children子元素
    * 删除"gender"的字段名
    * 删除"id"为2的数据
 * 最后的数据导出为main.json数据



#### 代码

```js
let main = new index("test.json");
main.insert({
  "id": 5,
  "first_name": "asdf",
  "last_name": "asdf",
  "email": "asdf@vk.com",
  "gender": "asdf",
  "ip_address": "67.76.188.236"
}).insertKey("age", 10).where("id", ">", 2).update("age", 18).clear();
main.where("id", 1).select("children").deleteKey("gender").where("id", 2).delete();
main.export("main");
main.clear();
console.dir(main.get(), { depth: null });
main.close();
```



#### 运行效果

```json
[
    {
      "id": 1,
      "first_name": "Jeanette",
      "last_name": "Penddreth",
      "email": "jpenddreth0@census.gov",
      "gender": "Female",
      "ip_address": "26.58.193.2",
      "children": [
        {
          "id": 1,
          "first_name": "a",
          "last_name": "a",
          "email": "a@census.gov"
        }
      ],
      "age": 10
    },
    {
      "id": 2,
      "first_name": "Giavani",
      "last_name": "Frediani",
      "email": "gfrediani1@senate.gov",
      "gender": "Male",
      "ip_address": "229.179.4.212",
      "age": 10
    },
    {
      "id": 3,
      "first_name": "Noell",
      "last_name": "Bea",
      "email": "nbea2@imageshack.us",
      "gender": "Female",
      "ip_address": "180.66.162.255",
      "age": 18
    },
    {
      "id": 4,
      "first_name": "Willard",
      "last_name": "Valek",
      "email": "wvalek3@vk.com",
      "gender": "Male",
      "ip_address": "67.76.188.26",
      "age": 18
    },
    {
      "id": 5,
      "first_name": "asdf",
      "last_name": "asdf",
      "email": "asdf@vk.com",
      "gender": "asdf",
      "ip_address": "67.76.188.236",
      "age": 18
    }
]
```

