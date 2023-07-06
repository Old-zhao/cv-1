let r = document.querySelector("#demo"), e = document.querySelector("#style"), o = `
/*您好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
#div1{
    border:solid 1px red;
    width:400px;
    height:400px;
    position:fixed;
    right:20px;
    top:20px;
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

};`; string2 = ""; let d = -1, i = () => { setTimeout(() => { d += 1, string2 += "\n" === o[d] ? "</br>" : o[d], r.innerHTML = string2, e.innerHTML = o.substring(0, d), d + 1 < o.length && i() }, 0) }; i();
//# sourceMappingURL=dist/index.0142c928.js.map
