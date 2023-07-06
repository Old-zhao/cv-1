// 通过选择器找到demo类
let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/*接下来我给各位画一个太极*/
/*我要开始画了*/
#div1{
    border:solid 1px red;
    width:400px;
    height:400px;
    position:fixed;
    right:100px;
    top:100px;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5); 
    border:none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);

}
#div1::before{
    content:'';
    display:block;
    border:1px solid red;
    width:200px;
    height:200px;
    border-radius:50%;
    position:absolute;
    left:100px;
    top:0px;
    border:none;
    background-color:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);

}
#div1::after{
    content:'';
    display:block;
    border:1px solid red;
    width:200px;
    height:200px;
    border-radius:50%;
    position:absolute;
    right:100px;
    bottom:0px;
    background-color:#fff;
    border:none;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);

};`;
string2 = ``;
let n = -1;
// setTimeout 定时执行
// setInterval 每隔一段时间执行一次
// 使用setTimeouto，实现每隔一段时间执行一次。好处是能够根据条件设置停止机制
let step = ()=>{
    setTimeout(()=>{
        n += 1;
        string2 += string[n] === "\n" ? "</br>" : string[n];
        // 向容器中写入内容
        demo.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        if (n + 1 < string.length) step();
    }, 500);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
