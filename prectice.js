// function b()
// {

//     function c(){
//         var d=20;
//     }
//     console.log(d);
// }
// b();

// var a=10;
// if(a)
// {
//     alert("yes");
// }
// else
// {
//     alert("no");
// }


// **********for in loop &****************

// let a={
//     name:"raj",
//     rollno:101
// };
// for(var value in a){
//     console.log(value,":",a[value]);
// }

// **********new keyword***************
// var height;
// function a()
// {
//     this.width=10;
//     this.height=20;
// }
// var c=new a();
// console.log(c);

// *********iife*************

// var b=(function(){
//     var a=20;//its count as private variable
//     return{
//         getter:function(){
//             console.log(a);
//     },
//     setter:function(val){
//         a=val;
//     }
// }
// })();


// *********prototype**********
var a={
    name:"raj"
}
console.log(a.length());
