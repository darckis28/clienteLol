const progress = document.querySelector(".circle_exterior");
let porcentaje = 0;

const active = setInterval(()=>{
    if(porcentaje<=100){
        console.log(progress)
        progress.style.background= ` conic-gradient(#30fbdc ${porcentaje*3.6}deg, rgba(0 0 0 /.5) 0deg)`
        porcentaje++
    }else{
        clearInterval(active)
    }
},200)