function point(){
    let bubbl= "";
for(let i=1; i<97;i++){
    const rn= Math.floor(Math.random()*20)
    console.log(rn)
   bubbl +=`<div id="bubbl">${rn}</div>`
}

const bottm= document.getElementById("pbtm")
bottm.innerHTML=bubbl

}


let time=60;
function timer(){
   const total= setInterval(function(){
        if(time>0){
           
            time--;
        const times=document.getElementById("times").textContent=time;
        }
        else{
            clearInterval(total)
            document.getElementById("pbtm").innerText="";
        }
    },1000)

}



let hitvalue=60
let ran=0;
function hit(){
  ran=Math.floor(Math.random()*10)
 const get=document.getElementById("hitval").textContent=ran;
}




let scorval=0;
function total(){
    scorval+=10;
    const scor=document.getElementById("scor")
    .textContent=scorval;
}

document.getElementById("pbtm").addEventListener("click",function(done){
    const number=Number(done.target.textContent)
    if(number === ran){
        hit()
        total()
        timer()
        point()
    }
})

hit()
timer()
point()


// let time=60;
// function timer(){
//    const total= setInterval(function () {
//       if(time>0){
//         time--;
//         const times=document.getElementById("times").textContent=time; 
//       }
//         else{
//               clearInterval(total)
//         }
//     },1000);

// }

// timer()
