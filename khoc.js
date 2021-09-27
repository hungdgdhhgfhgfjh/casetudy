
let a=prompt("tai khoan");
let b=prompt("mat khau");
if((a=="admin")&&(b=="bathuong")){
    alert("ok hey you what's up man")
}else{
    location.reload();
}
var l=[];
var p=[];
class mobile{
    constructor(tinnhan,name,id){
        this.tinnhan=[];
        this.name=name;
        this.id=id;
        this.soantinnhan="";
    }
     gettinnha() {
        var n2=document.getElementById("n2").value;
      return   this.tinnhan=n2;
    }
    gesoantinnha() {
        return this.soantinnhan;
    }
    sen1(noidung){
        this.soantinnhan=noidung;
       var n2=document.getElementById("n2").value;
        this.soantinnhan=n2;
        document.getElementById("n3").innerHTML=n2;
     var i= l.push(n2);
     document.getElementById("n7").innerHTML=l.join(" ");
     document.getElementById("n6").innerHTML=p.join(" ");
     return  this.soantinnhan=n2;
    }
    sen2(noidung){
                this.soantinnhan=noidung;
        var n4=document.getElementById("n4").value;
        this.soantinnhan=n4;
        document.getElementById("n1").innerHTML=n4;
        var i=p.push(n4);
     document.getElementById("n5").innerHTML=l.join(" ");
     document.getElementById("n8").innerHTML=p.join(" ");
     return this.soantinnhan=n4;
    }
    bluck(noidung){
         return this.tinnhan=noidung;
    }
}
let iphone=new mobile("hello","iphone",1);
let samsung=new mobile("hello","samsung",2);
samsung.sen1();
iphone.sen2();
console.log(samsung);
console.log(iphone);
var sount=0;

function tatmay(){
    window.location.href = "file:///C:/Users/PC-ASUS/Desktop/New%20folder%20(4)/casetudy/casee.html";
}
function reload2(){
    window.location.href="file:///C:/Users/PC-ASUS/Desktop/New%20folder%20(4)/casetudy/casee.html"
    }
function doyou(){
    window.location.href = "doyoulove.html";

}
function googe(){
    window.location.href= "https://www.google.com/";
}
function nhac(){
    window.location.href="https://www.nhaccuatui.com/";
}
function mes(){
    window.location.href="https://www.messenger.com/";
}
function tt(){
    window.location.href='file:///C:/Users/PC-ASUS/Desktop/New%20folder%20(4)/casetudy/tictoacte.html';
}
function face(){
    window.location.href="https://www.facebook.com/";
}
function youtu(){
    window.location.href="https://www.youtube.com/";
}
function falundafa(){
    window.location.href="https://www.falundafa.org/";
}
function cacula(){
    window.location.href="file:///C:/Users/PC-ASUS/Desktop/New%20folder%20(4)/casetudy/caculator.html";
}
function reload1(){
    window.location.href="file:///C:/Users/PC-ASUS/Desktop/New%20folder%20(4)/casetudy/nhinhanh.html";
}
function tatmar(){
    window.location.href="file:///C:/Users/PC-ASUS/Desktop/New%20folder%20(4)/casetudy/nhung - Copy.html";
}