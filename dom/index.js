/**
 * @name          QKJson
 * @description   JSON进行操作
 * @version       1.2.3
 * @author        QuKin <13606184008@163.com>
 * @Date          2022-11-17 08:45:16
 * @LastEditors   QuKin
 * @LastEditTime  2022-11-21 17:11:49
 */

"use strict";


/**
 * @class QKJson
 */
class QKJson {
    /**
     * 构造函数
     * @param {Array|Path|String} [json=[]] JSON
     * @constructs 
     * 
     * this.json：  原始数据 
     * this.data：  处理数据 -> where查询过后会赋值给这个
     * this.whereTF:是否查询数据
     * 
     * 用法:[{id:0,name:'aaa'},{id:1,name:'bbb'},{id:2,name:'ccc'},{id:3,name:'ddd'}]
     */
    constructor(json = []) {
        this.set(json);
        // 主要用途是where查询存放
        this.data = [];
        // 判断是否已经执行过where
        this.whereTF = false;
    }

    /**
     * 设置JSON数组值
     * @param {Array} json JSON数组
     */
    set(json) {
        if (typeof json === 'string') {
            if (json.indexOf('.json') === -1) {
                this.json = JSON.parse(json);
            } else {
                console.log('请使用node版本才能导入json文件');
            }
        } else {
            this.json = json;
        }
        return this;
    }

    /**
     * 获取值
     * @param {Number} [length=0] 获取的长度
     * @returns {Array} json数组
     */
    get(length = 0) {
        if (length === 0) {
            if (!this.whereTF) return this.json;
            return this.data;
        } else {
            if (!this.whereTF) return this.json.splice(0, length);
            return this.data.splice(0, length);
        }
    }

    /**
     * 获取第一个值
     * @returns {Array} json数组
     */
    first() {
        if (!this.whereTF) {
            if (this.json.length > 0) return this.json[0];
            return [];
        } else {
            if (this.data.length > 0) return this.data[0];
            return [];
        }
    }

    /**
     * 获取最后一个值
     * @returns {Array} json数组
     */
    last() {
        if (!this.whereTF) {
            if (this.json.length > 0) return this.json[this.json.length - 1];
            return [];
        } else {
            if (this.data.length > 0) return this.data[this.data.length - 1];
            return [];
        }
    }

    /**
     * 分页
     * @param {Number} [pages=0] 查询第几页
     * @param {Number} [length=6] 每页的数量
     * @returns this
     * 
     * 用法：pagination(0,6)
     * 解读：查询第一页，每页的数据条数为6条
     */
    pagination(pages = 0, length = 6) {
        pages = pages * length;
        this.limit(pages, length);
        return this;
    }

    /**
     * 限制查询
     * @param {Number} [start=0] 从start下标开始
     * @param {Number} [end=6] 到end下标结束
     * @returns this
     * 
     * 用法：limit(0,6)
     */
    limit(start = 0, end = 6) {
        if (!this.whereTF) {
            this.json = this.json.splice(start, end);
        } else {
            this.data = this.data.splice(start, end);
        }
        return this;
    }

    /**
     * 查询单个键名
     * @param {String} key 键名
     * @param {Number} num 下标
     * @returns this
     */
    select(key, num = 0) {
        if (!this.whereTF) {
            this.json = this.json[num][key];
        } else {
            this.data = this.data[num][key];
        }
        return this;
    }

    /**
     * 查询指定下标
     * @param {Number} num 下标
     * @returns this
     */
    eq(num) {
        if (!this.whereTF) {
            if (this.json.length > num) this.json = this.json[num];
        } else {
            if (this.data.length > num) this.data = this.data[num];
        }
        return this;
    }

    /**
     * 查询 默认and
     * 用到了eval方法，一些游览器不支持
     * @param {Array} arr 数组
     * @param {String} [join='&&'] 连接。&&：和；||：或者
     * @return this
     * 
     * 用法：whereAll([['name','bbb'],['id','<',2]])
     * 解读：json.name=="bbb" && json.id<"2"
     * 输出：[{id: 1, name: "bbb"}]
     */
    whereAll(arr, join = '&&') {
        this.whereTF = true;

        let temp = [];
        let tempArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length == 2) {
                temp.push([arr[i][0], '==', arr[i][1]]);
            } else {
                temp.push([arr[i][0], arr[i][1], arr[i][2]]);
            }
        }
        this.json.forEach((value) => {
            let ifEval = '', a = null, b = null;
            for (const item of temp) {
                a = !isNaN(Number(value[item[0]])) ? parseInt(value[item[0]]) : '"' + value[item[0]] + '"';
                b = !isNaN(Number(item[2])) ? parseInt(item[2]) : '"' + item[2] + '"';
                ifEval += a + item[1] + b + ' ' + join + ' ';
            }
            ifEval = ifEval.substring(0, ifEval.length - 4);
            if (eval(ifEval)) {
                tempArr.push(value);
            }
        })
        this.data = tempArr;
        return this;
    }

    /**
     * 查询
     * @param {*} obj1 参数1
     * @param {*} [obj2=null] 参数2
     * @param {*} [obj2=null] 参数3
     * @returns this
     * 
     * 因为js没有重载的概念，所以用arguments来进行判断传入了几个参数
     * 
     * 当只有一个参数时：采用的方法是回调：where((item)=>item.id==1)
     * 当只有两个参数时：查询 -> obj1==obj2
     * 当有三个参数时，obj2是符号：查询 -> obj1 obj2 obj3
     */
    where(obj1, obj2 = null, obj3 = null) {
        let arr = [];
        if (!this.whereTF) arr = this.json;
        else arr = this.data;

        this.whereTF = true;

        switch (arguments.length) {
            case 1:
                /**
                 * @callback obj1 回调
                 * 
                 * 用法：where((item)=>item.id==1)
                 * 解读：json.id==1
                 * 输出：[{id: 1, name: "bbb"}]
                 */
                this.data = arr.filter(obj1);
                break;
            case 2:
                /**
                 * @param {*} obj1 键名
                 * @param {*} obj2 键值
                 * 
                 * 用法：where('id',1)
                 * 解读：json.id==1
                 * 输出：[{id: 1, name: "bbb"}]
                 */
                this.data = arr.filter((item) => {
                    return item[obj1] == obj2;
                });
                break;
            case 3:
                /**
                 * @param {*} obj1 键名
                 * @param {*} obj2 符号，当输入其余的符号，默认是==
                 * @param {*} obj3 键值
                 * 
                 * 用法：where('id','===',1)
                 * 解读：json.id===1
                 * 输出：[{id: 1, name: "bbb"}]
                 */
                this.data = arr.filter((item) => {
                    switch (obj2) {
                        case '===': return item[obj1] === obj3;
                        case '<': return item[obj1] < obj3;
                        case '>': return item[obj1] > obj3;
                        case '<=': return item[obj1] <= obj3;
                        case '>=': return item[obj1] >= obj3;
                        case '!=': return item[obj1] != obj3;
                        case '!==': return item[obj1] !== obj3;
                        default: return item[obj1] == obj3;
                    }
                });
                break;
        }
        return this;
    }

    /**
     * 查询，默认为==
     * @param {*} key 键名
     * @param {*} value 键值
     * @returns this
     * 
     * 用法：where('id',1)
     * 解读：json.id==1
     * 输出：[{id: 1, name: "bbb"}]
     */
    whereD(key, value) {
        this.whereTF = true;
        let arr = [];
        if (!this.whereTF) arr = this.json;
        else arr = this.data;

        this.data = arr.filter((item) => {
            return item[key] == value;
        });
        return this;
    }

    /**
     * 查询
     * @param {*} key 键名
     * @param {*} symbol 符号，当输入其余的符号，默认是==
     * @param {*} value 键值
     * @returns this
     * 
     * 用法：where('id','===',1)
     * 解读：json.id===1
     * 输出：[{id: 1, name: "bbb"}]
     */
    whereS(key, symbol, value) {
        this.whereTF = true;
        let arr = [];
        if (!this.whereTF) arr = this.json;
        else arr = this.data;

        this.data = arr.filter((item) => {
            switch (symbol) {
                case '===': return item[key] === value;
                case '<': return item[key] < value;
                case '>': return item[key] > value;
                case '<=': return item[key] <= value;
                case '>=': return item[key] >= value;
                case '!=': return item[key] != value;
                case '!==': return item[key] !== value;
                default: return item[key] == value;
            }
        });
        return this;
    }

    /**
     * 查询
     * @param {Function} callback 回调
     * @returns this
     * @callback callback 回调
     * 
     * 用法：where((item)=>item.id==1)
     * 解读：json.id==1
     * 输出：[{id: 1, name: "bbb"}]
     */
    whereC(callback) {
        this.whereTF = true;
        let arr = [];
        if (!this.whereTF) arr = this.json;
        else arr = this.data;

        this.data = arr.filter(callback);
        return this;
    }

    /**
     * 插入
     * @param {JSON} json json
     * @returns this
     * 
     * 用法：insert({id:4,name:'eee'})
     */
    insert(json) {
        if (!this.whereTF) this.json.push(json);
        else this.data.push(json);

        return this;
    }

    /**
     * 插入键名
     * @param {String} key 要新增的键名
     * @param {*} [value=null] 新增的键名给它赋值
     * @returns this
     * 
     * 用法：insertKey('age',10)
     */
    insertKey(key, value = null) {
        if (!this.whereTF) {
            for (let i = 0; i < this.json.length; i++) this.json[i][key] = value;
        } else {
            for (let i = 0; i < this.data.length; i++) this.data[i][key] = value;
        }

        return this;
    }

    /**
     * 修改数据
     * @param {String} key 要修改的键名
     * @param {*} [value=null] 修改的键名给它赋值
     * @returns this
     * 
     * 用法：update('age',12)
     */
    update(key, value = null) {
        if (!this.whereTF) {
            for (let i = 0; i < this.json.length; i++) this.json[i][key] = value;
        } else {
            for (let i = 0; i < this.data.length; i++) this.data[i][key] = value;
        }

        return this;
    }

    /**
     * 删除数据
     * @returns {Array} json数组
     * 
     * 用法：delete()
     * 注意  如delete方法前方没有where进行判断，就会清楚json里面的所有数据；
     *       如有就会进行删除json中出现那个值
     */
    delete() {
        if (!this.whereTF) {
            this.json = [];
        } else {
            this.findDelete(this.json, []);
            this.data = [];
        }

        return this.json;
    }

    /**
     * 查找删除
     * 用到了eval方法，一些游览器不支持
     * @private
     * @param {JSON} json json
     * @param {Array} path 路径
     */
    findDelete(json, path) {
        for (const i in json) {
            if (json[i] != null && typeof (json[i]) == "object") this.findDelete(json[i], path.concat(i));

            for (let j = 0; j < this.data.length; j++) {
                if (JSON.stringify(json[i]) == JSON.stringify(this.data[j])) {
                    // console.log(json[i], path, i);
                    let temp = 'this.json'
                    for (let o = 0; o < path.length; o++) {
                        temp += '["' + path[o] + '"]'
                    }
                    // console.log(temp, eval(temp))
                    eval(temp).splice(i, 1);
                }
            }
        }
    }

    /**
     * 删除数据
     * @param {String} key 要删除的键名
     * @returns this
     * 
     * 用法：deleteKey('age')
     */
    deleteKey(key) {
        if (!this.whereTF) {
            for (let i = 0; i < this.json.length; i++) delete this.json[i][key];
        } else {
            for (let i = 0; i < this.data.length; i++) delete this.data[i][key];
        }

        return this;
    }

    /**
     * 判断两个json是否相等
     * @param {*} json1 json1
     * @param {*} json2 json2
     */
    equal(objA, objB) {
        function isObj(object) {
            return object && typeof (object) == 'object' && Object.prototype.toString.call(object).toLowerCase() == "[object object]";
        }

        function isArray(object) {
            return object && typeof (object) == 'object' && object.constructor == Array;
        }

        if (!isObj(objA) || !isObj(objB)) return false;
        if (objA.length != objB.length) return false;
        return CompareObj(objA, objB, true);

        function CompareObj(objA, objB, flag) {
            for (var key in objA) {
                if (!flag) //跳出整个循环
                    break;
                if (!objB.hasOwnProperty(key)) {
                    flag = false;
                    break;
                }
                if (!isArray(objA[key])) { //子级不是数组时,比较属性值
                    if (objB[key] != objA[key]) {
                        flag = false;
                        break;
                    }
                } else {
                    if (!isArray(objB[key])) {
                        flag = false;
                        break;
                    }
                    var oA = objA[key],
                        oB = objB[key];
                    if (oA.length != oB.length) {
                        flag = false;
                        break;
                    }
                    for (var k in oA) {
                        if (!flag) //这里跳出循环是为了不让递归继续
                            break;
                        flag = CompareObj(oA[k], oB[k], flag);
                    }
                }
            }
            return flag;
        }
    }

    /**
     * 排序
     * @param {Array|String} parameters 排序参数
     * @param {String} [type='asc'] 排序类型
     * @returns this
     * 
     * 用法：orderBy(['age','name'],'desc')
     */
    orderBy(parameters, type = 'asc') {
        if (typeof parameters == 'string') parameters = [parameters];

        function main(arr, parameters) {
            let pop = parameters.pop();

            arr.sort(function (a, b) {
                let convertA = a[pop];
                let convertB = b[pop];
                if (typeof convertA == 'string' && typeof convertB == 'string') {
                    if (type == 'asc') return convertA.localeCompare(convertB);
                    return convertB.localeCompare(convertA);
                } else {
                    if (type == 'asc') return convertA - convertB;
                    return convertB - convertA;
                }
            });

            if (parameters.length != 0) {
                main(arr, parameters);
            }
        }

        if (!this.whereTF) main(this.json, parameters);
        else main(this.data, parameters);

        return this;
    }

    /**
     * dom导入
     * @param {this} self 表单input:file的this指向
     * 
     * 用法：document.getElementById('file').onchange=function(){new QJson().QImport(this)}
     */
    domImport(self) {
        // 其实是可以扩展到多文件上传的，不过我们就选第一个，也就是下标0
        const file = self.files[0];
        // !!是一个js的语法，表示后面的变量不是null/undefined/空串，实用写法。
        if (!!file) {
            // 实例化一个FileReader对象
            const reader = new FileReader();
            // 借助 FileReader 的方法，按照文本格式读入文件，第二个参数是编码方式（可空）
            reader.readAsText(file);
            reader.onload = function () {
                //然后在FileReader的onload方法里，然后在FileReader的onload方法里，刚刚读入的文件能以文本的形式得到了
                this.json = JSON.parse(this.result);
            };
        }
    }

    /**
     * dom导出
     * @param {String} filename 文件名
     */
    domExport(filename = 'json') {
        let data = [];
        if (!this.whereTF) data = this.json;
        else data = this.data;

        if (!data) {
            console.log('没有数据');
        }

        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4);
        }
        // 要创建一个 blob 数据
        let blob = new Blob([data], { type: "text/json" }),
            a = document.createElement("a");
        a.download = filename + '.json';

        // 将blob转换为地址
        // 创建 URL 的 Blob 对象
        a.href = window.URL.createObjectURL(blob);

        // 标签 data- 嵌入自定义属性  屏蔽后也可正常下载
        a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");

        // 添加鼠标事件
        let event = new MouseEvent("click", {});

        // 向一个指定的事件目标派发一个事件
        a.dispatchEvent(event);
    }

    /**
     * 清除缓存
     * @returns this
     * 
     * 用途：where从头开始和清除data缓存
     */
    clear() {
        this.whereTF = false;
        this.data = [];

        return this;
    }

    /**
     * 关闭
     * @returns true
     */
    close() {
        this.json = [];
        this.data = [];
        this.whereTF = [];
        return true;
    }
}