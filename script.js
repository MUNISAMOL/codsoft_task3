function displayTime()
{
    var d=new Date();
    var hr=d.getHours();
    var mnt=d.getMinutes();
    var sec=d.getSeconds();
    var ampm="AM";
    if (hr>=12)
    {
        ampm="PM";
    }
    if (hr>12)
    {
        hr=hr-12;
    }
    if (hr<10)
       hr="0"+hr;
    if (mnt<10)
        mnt="0"+mnt;
    if (sec<10)
        sec="0"+sec;
    
    document.getElementById("time").innerHTML=hr+":"+mnt+":"+sec+" "+ampm;
}
setInterval(displayTime,1000);
