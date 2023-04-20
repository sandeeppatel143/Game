let box=document.getElementById("box")
box.addEventListener("click",()=>{
    cong.style.display="none"
})

let bt=document.getElementById("bt")
bt.addEventListener("click",()=>{

    let increment=document.getElementById("increment")
    let value1=document.getElementById("value1")
    let dicrement=document.getElementById("dicrement")
    increment.addEventListener("click",()=>{
        value1.innerText=Number(value1.innerText)+5
    })
    dicrement.addEventListener("click",()=>{
        value1.innerText=Number(value1.innerText)-5;
        let s=value1.innerText
    
    if(s>0){
    id1.addEventListener("click", function settimeout(){
        let v1=document.getElementById("id1").value
        let timmer=1;
        let stop=setInterval(()=>{
            timmer=timmer-1
            document.getElementById("time").innerHTML="Time: "+timmer+"s"
            if(timmer===0){
                clearInterval(stop)
                let value=1
            if(value==v1){
                let cong=document.getElementById("cong")
                cong.style.display="flex"
                cong.style.alignItems="center"
                let Rs=document.getElementById("Rs")
                Rs.textContent="Rs. "+s*5

                let wal=document.getElementById("wal")
                wal.style.display="flex"
                wal.style.justifyContent="center"
                wal.style.alignItems="center"
                wal.textContent=("Rs. "+s*5)
                console.log("Congratulations",+s);
            }
            else{
            console.log("Not Matched");
            }
            }
        },1000)
    },10000)
}



id2.addEventListener("click", function settimeout(){
let v2=document.getElementById("id2").value
    let timmer=10;
    let stop=setInterval(()=>{
        timmer=timmer-1
        document.getElementById("time").innerHTML="Time: "+timmer+"s"
        if(timmer===0){
            clearInterval(stop)
            let value=Math.floor(Math.random()*9)
        if(value==v2){
            let cong=document.getElementById("cong")
            cong.style.display="block"
        console.log("Congratulations");
        }
        else{
        console.log("Not Matched");
        }
        }
    },1000)
},10000)

id3.addEventListener("click", function settimeout(){
let v3=document.getElementById("id3").value
    let timmer=10;
    let stop=setInterval(()=>{
        timmer=timmer-1
        document.getElementById("time").innerHTML="Time: "+timmer+"s"
        if(timmer===0){
            clearInterval(stop)
            let value=Math.floor(Math.random()*9)
        if(value==v3){
            let cong=document.getElementById("cong")
            cong.style.display="block"
            console.log("Congratulations");
        }
        else{
        console.log("Not Matched");
        }
        }
    },1000)
},10000)

id4.addEventListener("click", function settimeout(){
let v4=document.getElementById("id4").value
    let timmer=10;
    let stop=setInterval(()=>{
        timmer=timmer-1
        document.getElementById("time").innerHTML="Time: "+timmer+"s"
        if(timmer===0){
            clearInterval(stop)
            let value=Math.floor(Math.random()*9)
        if(value==v4){
            let cong=document.getElementById("cong")
            cong.style.display="block"
            console.log("Congratulations");
        }
        else{
        console.log("Not Matched");
        }
        }
    },1000)
},10000)

id5.addEventListener("click", function settimeout(){
let v5=document.getElementById("id5").value
    let timmer=10;
    let stop=setInterval(()=>{
        timmer=timmer-1
        document.getElementById("time").innerHTML="Time: "+timmer+"s"
        if(timmer===0){
            clearInterval(stop)
            let value=Math.floor(Math.random()*9)
        if(value==v5){
            let cong=document.getElementById("cong")
            cong.style.display="block"
            console.log("Congratulations");
        }
        else{
        console.log("Not Matched");
        }
        }
    },1000)
},10000)

id6.addEventListener("click", function settimeout(){
let v6=document.getElementById("id6").value
    let timmer=10;
    let stop=setInterval(()=>{
        timmer=timmer-1
        document.getElementById("time").innerHTML="Time: "+timmer+"s"
        if(timmer===0){
            clearInterval(stop)
            let value=Math.floor(Math.random()*9)
        if(value==v6){
            let cong=document.getElementById("cong")
            cong.style.display="block"
            console.log("Congratulations");
        }
        else{
        console.log("Not Matched");
        }
        }
    },1000)
},10000)

id7.addEventListener("click", function settimeout(){
let v7=document.getElementById("id7").value
    let timmer=10;
    let stop=setInterval(()=>{
        timmer=timmer-1
        document.getElementById("time").innerHTML="Time: "+timmer+"s"
        if(timmer===0){
            clearInterval(stop)
            let value=Math.floor(Math.random()*9)
        if(value==v7){
            let cong=document.getElementById("cong")
            cong.style.display="block"
            console.log("Congratulations");
        }
        else{
        console.log("Not Matched");
        }
        }
    },1000)
},10000)

id8.addEventListener("click", function settimeout(){
let v8=document.getElementById("id8").value
    let timmer=10;
    let stop=setInterval(()=>{
        timmer=timmer-1
        document.getElementById("time").innerHTML="Time: "+timmer+"s"
        if(timmer===0){
            clearInterval(stop)
            let value=Math.floor(Math.random()*9)
        if(value==v8){
            let cong=document.getElementById("cong")
            cong.style.display="block"
            console.log("Congratulations");
        }
        else{
        console.log("Not Matched");
        }
        }
    },1000)
},10000)

id9.addEventListener("click", function settimeout(){
let v9=document.getElementById("id9").value
    let timmer=10;
    let stop=setInterval(()=>{
        timmer=timmer-1
        document.getElementById("time").innerHTML="Time: "+timmer+"s"
        if(timmer===0){
            clearInterval(stop)
            let value=Math.floor(Math.random()*9)
        if(value==v9){
            let cong=document.getElementById("cong")
            cong.style.display="block"
            console.log("Congratulations");
        }
        else{
        console.log("Not Matched");
        }
        }
    },1000)
},10000)

id0.addEventListener("click", function settimeout(){
let v0=document.getElementById("id0").value
    let timmer=10;
    let stop=setInterval(()=>{
        timmer=timmer-1
        document.getElementById("time").innerHTML="Time: "+timmer+"s"
        if(timmer===0){
            clearInterval(stop)
            let value=Math.floor(Math.random()*9)
        if(value==v0){
            let cong=document.getElementById("cong")
            cong.style.display="block"
            console.log("Congratulations");
        }
        else{
        console.log("Not Matched");
        }
        }
    },1000)
},10000)
})
})





