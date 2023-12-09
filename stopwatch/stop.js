const pausebtn=document.getElementById("btn1")
const resetbtn=document.getElementById("btn2")
const startbtn=document.getElementById("btn3")

const time=document.getElementById("time")
let min=0;
let sec=0;

function updateptag(){
    time.innerHTML=`<span class="time">${String(min).padStart(2,'0')}</span><span id="colon">:</span> <span class="time">${String(sec).padStart(2,'0')}</span>`;
}
let timer;
function start(){
   timer= setInterval(function(){
        sec++;
        if(sec===60){
            sec=0;
            min++;
        }
        updateptag();


    },10)
    startbtn.disabled=true;
    resetbtn.disabled=false;
    pausebtn.disabled=false;
}
startbtn.addEventListener("click",start)


function pause(){
    clearInterval(timer);
    startbtn.disabled=false;
    resetbtn.disabled=false;
    pausebtn.disabled=true;
}

pausebtn.addEventListener("click",pause)
function reset(){
    clearInterval(timer);
    sec=0;
    min=0;
    updateptag()
    startbtn.disabled=false;
    resetbtn.disabled=true;
    pausebtn.disabled=false;
}
resetbtn.addEventListener("click",reset)