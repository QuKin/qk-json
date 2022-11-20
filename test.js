const index = require('./index.js');
let json = [
    { id: 0, name: 'aaa' },
    { id: 1, name: 'bbb' },
    { id: 2, name: 'ccc' },
    { id: 3, name: 'ddd' },
    { id: 4, name: 'eee' },
    { id: 5, name: 'fff' },
    { id: 6, name: 'ggg' },
    { id: 7, name: 'hhh' },
    { id: 8, name: 'iii' },
    { id: 9, name: 'jjj' }
];


function get() {
    let main = new index(json);
    console.log(main.get()); // json数组
    console.log(main.get(3)); // 输出三条
}
// get();

function set() {
    let main = new index();
    console.log(main.get()); // []
    main.set(json); // 设置json数组
    console.log(main.get()); // json数组
    main.set(JSON.stringify(json)); // json字符串设置json数组
    console.log(main.get()); // json数组
    main.set('test.json'); // 导入本地的test.json文件
    console.log(main.get()); // json数组
}
// set();

function first() {
    let main = new index(json);
    console.log(main.first()); // 输出第一条
}
// first();

function last() {
    let main = new index(json);
    console.log(main.last()); // 输出最后一条
}
// last();

function pagination() {
    let main = new index(json);
    console.log(main.pagination(2, 3).get()); // 输出id：6、7、8
}
// pagination();

function limit() {
    let main = new index(json);
    console.log(main.limit(0, 2).get()); // 输出id：0、1
}
// limit();

function whereAll() {
    let main = new index(json);
    console.log(main.whereAll([['name', 'bbb'], ['id', '<', 2]]).get()); // 输出id：1
}
// whereAll();

function where() {
    let main = new index(json);
    console.log(main.where('id', 1).get()); // 输出id：1
    main.clear(); // 清除掉where缓存
    console.log(main.where('id', '<', 2).get()); // 输出id：0、1
    main.clear();
    console.log(main.where((item) => item.id > 6).get()); // 输出id：7、8、9
}
// where();

function whereD() {
    let main = new index(json);
    console.log(main.where('id', 1).get()); // 输出id：1
}
// whereD();

function whereS() {
    let main = new index(json);
    console.log(main.where('id', '<', 2).get()); // 输出id：0、1
}
// whereS();

function whereC() {
    let main = new index(json);
    console.log(main.where((item) => item.id > 6).get()); // 输出id：7、8、9
}
// whereC();

function select() {
    let main = new index(json);
    console.log(main.where('id', 2).select('name').get()); // 输出ccc
}
// select();

function eq() {
    let main = new index(json);
    console.log(main.where('id', '<', 2).eq(1).get()); // 输出id：1
}
// eq();

function insert() {
    let main = new index(json);
    main.insert({ id: 10, name: 'kkk' });
    console.log(main.where('id', '>', 8).get()); // [ { id: 9, name: 'jjj' }, { id: 10, name: 'kkk' } ]
}
// insert();

function insertKey() {
    let main = new index(json);
    main.insertKey('age', 10);
    console.log(main.first()); // { id: 0, name: 'aaa', age: 10 }
}
// insertKey();

function update() {
    let main = new index(json);
    main.where('id', 1).update('name', 'lll');
    console.log(main.where('id', 1).get()); // [ { id: 1, name: 'lll' } ]
}
// update();

function del() {
    let main = new index(json);
    let temp = main.where('id', 1).delete();
    console.log(temp); // 少了id：1
}
// del();

function deleteKey() {
    let main = new index(json);
    main.deleteKey('name');
    console.log(main.first()); // { id: 0 }
}
// deleteKey();

function equal() {
    let main = new index(json);
    let json1 = { id: 1, name: 'a', children: [1, 2] };
    let json2 = { id: 1, name: 'a', children: [1, 2] };
    console.log(main.equal(json1, json2)); // true
}
// equal();

function orderBy() {
    let main = new index(json);
    console.log(main.where('id', '<', 2).orderBy(['name'], 'desc').get()); // [ { id: 1, name: 'bbb' }, { id: 0, name: 'aaa' } ]
}
// orderBy();

function expor() {
    let main = new index(json);
    main.export('demo'); // 在本地文件夹中创建demo.json文件
}
// expor();


/**
 * 高端操作
 * 
 * 使用test.json文件进行
 * 新增一条数据
 * 都添加一个age字段，默认值为10
 * 在id大于2中的age字段设置为18
 * 在id为1里的children子元素
 *   删除gender的字段名
 *   删除id为2的数据
 * 最后的数据导出为main.json数据
 */
function fun() {
    let main = new index('test.json');
    main.insert({
        "id": 5,
        "first_name": "asdf",
        "last_name": "asdf",
        "email": "asdf@vk.com",
        "gender": "asdf",
        "ip_address": "67.76.188.236"
    }).insertKey('age', 10).where('id', '>', 2).update('age', 18).clear();
    main.where('id', '1').select('children').deleteKey('gender').where('id', 2).delete();
    main.export('main');
    // console.log(main.where('id', '1').select('children').deleteKey('gender'))
    console.dir(main, { depth: null });
    main.close();
}
// fun();