 window.onload = function() {
    // number类型
    let a = 111;
    a.toString();
    console.log(a.toString());
    // 对象-字面量
    let obj1 = {name:'FE'}
    let b = obj1
    b.name = 'EF'
    console.log(obj1.name)
    // typeof判断基本类型
    console.log( "1" + typeof 1)
    console.log( "'1'" + typeof "1")
    console.log( "undefind" + typeof undefined)
    console.log( "null" + typeof null)
    console.log( "true" + typeof true)
    console.log( "[]" + typeof [])
    console.log( "{}" + typeof {})
    console.log( "console.log" + typeof console.log)
    // 判断Object类型
    console.log(Object.prototype.toString(obj1))
    
    let aaa;
    aaa === undefined;
    console.log(aaa == void 0 )
   
    // 转boolean
    if(null){
        console.log("null");
    }else{
        console.log("!null")
    }
    //对象装基本类型
    
    console.log('下面是aa.valueOf的值:')
    console.log(obj1.valueOf());
    console.log("aa.toString" + obj1.toString());
    // 重写valueOf方法
    // toString方法对于值类型数据使用而言，其效果相当于类型转换，将原类型转为字符串。 
// valueOf方法对于值类型数据使用而言，其效果将相当于返回原数据。
    let obj2 = {
        valueOf() {
            return 0
        }
    }    
    console.log(obj2.valueOf());
    console.log(obj2.toString());
    
    // 重写symbol.toPrimitive,转基本类型优先级高
    let obj3 = {
        valueOf() {
            return 0;
        },
        toString() {
            return '1';
        },
        [Symbol.toPrimitive](){
            return 2;
        }
    }
    console.log(1 + obj3)
    console.log('1' + obj3)
    // 四则运算：
    // 注只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。
    // 其他运算只要其中一方是数字，那么另一方就转为数字
    console.log(1 + '1'); //11
    console.log(1 + + '1');  //=>2
    console.log(1 + '2' * 4); //9
    console.log(2 * '2'); //4
    console.log([1 ,2] + [2, 1]); //1,22,1
    console.log('a' + + 'b'); //aNaN

    console.log([] ==! []); //true
    // 比较运算？？
    // toPrimitive(obj3,Number);
    // console.log(toPrimitive(obj2,2));

    // new   --有问题？？？
    // 1.生成一个新对象
    // 2.链接原型
    // 3.绑定this
    // 4.返回性对象
    // function create(){
    //     // 生成一个新对象
    //     let obj = new Object()
    //     // 获得构造函数
    //     let Con =  [].shift.call(arguments)
    //     // 链接原型
    //     obj.__proto__ = Con.prototype
    //     // 绑定this，执行构造函数
    //     let result = Con.apply(obj,arguments)
    //     // 返回一个对象
    //     return typeof result === 'object' ? result : obj 
    // }
    // create()
    
    function foo(){}
    function Foo(){
        return this;
    }
    Foo.getName = function () {
        console.log('1');
    }
    Foo.prototype.getName = function () { 
        console.log('2');
    }
    new Foo.getName()
    new Foo().getName()
    // instanceof用法
    console.log(obj3 instanceof Object);
    //instanceof实现
    function instanceofs(left,right){
        // 获得类型的原型
        let prototype = right.prototype
        // 获得对象的原型
        let left = left.__proto__
        // 判断对象原型和类型原型是否相等
        while(true){
            if(left === null)
            return false
            if(prototype === left)
            return true
            left = left.__proto__
        }
    }

    // this -指向问题
    ac = 1;
    function soo(){
        console.log(this.ac);
    }
    soo()//1

    var obj5 = {
        ac:2,
        soo: soo
    }
    obj5.soo() //2

    var c = new soo()
    c.ac = 3
    console.log(c.ac); //3
    
    // 箭头函数没有this,这个this之取决于他外面第一个不是箭头函数的函数this
    function ad(){
        return () => {
            return () => {
                console.log(this);
            }
        }
    }
    console.log(ad()()());

    // 
    // function boo(i){
    //     var b = 20
    // }
    // boo()
    //非匿名的立即执行函数 ????
    // var coo = 1
    (function coo() {
        coo = 10
        console.log(coo);
    }())
    // 闭包：函数A返回一个函数B，函数B中使用了函数A的变量，函数B叫闭包
    function A() {
        var ae = 1
        function B() {
            console.log(ae);
        }
        return B()
    }
    A()

    // 闭包面试题,解决下面面试题
    for(var i=1; i<=5;i++){
        setTimeout(function timer(){
            console.log(i);
        },i*1000)
    }
    // 方法一
    // for(var i = 1;i <= 5;i++){
    //     (function(j ))
    // }
    
    for (let i = 0; i<3; i++){
        ll()
    }

    function log1(count) {
        console.log(count);
        
    }
    function log (count) {
        return new Promise ( ( resolve , reject) => {
            resolve(count)
        })
    }
    function log1 (count) {
        return new Promise ( ( resolve , reject) => {
            resolve(count)
        })
    }
    log(2).then ( res => {
        console.log(res);
        log1()
    })
   

 }