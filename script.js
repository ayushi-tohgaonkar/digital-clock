var flag=0;

function time()
{
var hour=document.getElementById('hour');
var minute=document.getElementById('minute');
var second=document.getElementById('second');




var h=new Date().getHours();
 var m=new Date().getMinutes();
var s=new Date().getSeconds();


if(flag===1){
    if(h >12){
        h = h % 12;
    }
    // clearInterval(interval); dis is for stoping the clock after click(means stoping the interval)
}

hour.innerHTML=h;
minute.innerHTML=m;
second.innerHTML=s;
}
var interval=setInterval(time, 1000);
var sub=document.getElementById("sub")
sub.addEventListener("click",changeFormat)

function changeFormat()
{
    if(flag===1){
        flag=0
        document.getElementById('sub').innerText="24 hrs"
    }
    else if(flag===0){
        flag=1
        document.getElementById('sub').innerText="12 hrs"
    }
}