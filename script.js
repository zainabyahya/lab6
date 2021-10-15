var name = prompt ('Your name','');

document.write("<CENTER><Strong><FONT FACE=ARIAdL,VERDANA  SIZE=5>Welcome "+name+"</FONT><Strong></CENTER>")

var arr=[];

// function add()
// {
//     var value1= parseInt(document.getElementById("numA").value);
//     var value2=parseInt(document.getElementById("numB").value);
//     var sum=value1+value2;
//     document.getElementById("result").value=sum;

// }

// function substract()
// {
//     var value1= parseInt(document.getElementById("numA").value);
//     var value2=parseInt(document.getElementById("numB").value);
//     var subtraction=value1-value2;
//     document.getElementById("result").value=subtraction;

// }

// function multiply()
// {
//     var value1= parseInt(document.getElementById("numA").value);
//     var value2=parseInt(document.getElementById("numB").value);
//     var multiplication=value1*value2;
//     document.getElementById("result").value=multiplication;

// }

// function divide()
// {
//     var value1= parseInt(document.getElementById("numA").value);
//     var value2=parseInt(document.getElementById("numB").value);
//     var devision=value1/value2;
//     document.getElementById("result").value=devision;

// }

function myFunction(id)
{
    var value1= parseInt(document.getElementById("numA").value);
    var value2=parseInt(document.getElementById("numB").value);
    var res;
    if(id=="add"){
        res=value1+value2;
        document.getElementById("result").value=res;
        arr.push(res);
    }
    else if(id=="substract"){
        res=value1-value2;
        document.getElementById("result").value=res;
        arr.push(res);
    }
    else if(id=="multiply"){
        res=value1*value2;
        document.getElementById("result").value=res;
        arr.push(res);
    }
    else if(id=="divide"){
        res=value1/value2;
        document.getElementById("result").value=res;
        arr.push(res);
    }
}

function PrintArray()
{
    document.getElementById('Results').innerHTML =arr;
}
var array1=["john", "Jason", "kevin"];

array1.unshift("jad");

var array2=["manel", "nahla", "sabine", "mirna"];

var array3=array1.concat(array2);

var i=array3.indexOf("john");

var length=array3.length;

var pop=array3.pop();

var shift=array3.shift();

var push= array3.push();

var reverse=array3.reverse();

var array4=array3.slice(0,3);

var include=array4.includes("Sabine");

array3.forEach(i=> console.log(i));