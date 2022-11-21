# qk-json

> 作者：QuKin
>
> 邮箱：13606184008@163.com

[![QuKie/qk-json](https://gitee.com/qukie/qk-json/widgets/widget_card.svg?colors=4183c4,ffffff,ffffff,e3e9ed,666666,9b9b9b)](https://gitee.com/qukie/qk-json)



## 了解

> 介绍：js对json数据进行操作
>
> 版本：V1.2.2

方法简洁明了的操作





### 安装

`npm i qk-json`



### 源码

https://gitee.com/qukie/qk-json



### 文档

http://qukie.gitee.io/qk-json/docs/index.html



## 使用

### 起始

先要引入qk-json，并生成一个json数据

```js
const index = require('qk-json');
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

#### 代码

```js
let main = new index();
console.log(main.get()); // []
main.set(json);
console.log(main.get());
main.set(JSON.stringify(json));
console.log(main.get());
main.set('test.json');
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

#### 代码

```js
let main = new index(json);
console.log(main.whereAll([['name', 'bbb'], ['id', '<', 2]]).get());
```



#### 运行效果

```json
[ { "id": 1, "name": "bbb" } ]
```



### where

#### 代码

```js
let main = new index(json);
console.log(main.where("id", 1).get());
main.clear(); // 清除掉where缓存
console.log(main.where("id", '<', 2).get());
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

#### 代码

```js
let main = new index(json);
console.log(main.where("id", '<', 2).get());
```



#### 运行效果

```json
[ { "id": 0, "name": "aaa" }, { "id": 1, "name": "bbb" } ]
```



### whereC

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

#### 代码

```js
let main = new index(json);
console.log(main.where("id", '<', 2).eq(1).get());
```



#### 运行效果

```json
{ "id": 1, "name": "bbb" }
```



### insert

#### 代码

```js
let main = new index(json);
main.insert({ "id": 10, "name": "kkk" });
console.log(main.where("id", '>', 8).get());
```



#### 运行效果

```json
[ { "id": 9, "name": "jjj" }, { "id": 10, "name": "kkk" } ]
```



### insertKey

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

#### 代码

```js
let main = new index(json);
main.where("id", 1).update("name", 'lll');
console.log(main.where("id", 1).get());
```



#### 运行效果

```json
[ { "id": 1, "name": "lll" } ]
```



### delete

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

#### 代码

```js
let main = new index(json);
console.log(main.where("id", '<', 2).orderBy(["name"], 'desc').get());
```



#### 运行效果

```json
[ { "id": 1, "name": "bbb" }, { "id": 0, "name": "aaa" } ]
```



### expor

#### 代码

```js
let main = new index(json);
main.export('demo');
```



#### 运行效果

在本地文件夹中创建demo.json文件



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
let main = new index('test.json');
main.insert({
  "id": 5,
  "first_name": "asdf",
  "last_name": "asdf",
  "email": "asdf@vk.com",
  "gender": "asdf",
  "ip_address": "67.76.188.236"
}).insertKey('age', 10).where("id", '>', 2).update("age", 18).clear();
main.where("id", 1).select('children').deleteKey("gender").where("id", 2).delete();
main.export('main');
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

