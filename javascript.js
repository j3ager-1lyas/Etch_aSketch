const sketch=document.querySelector('#sketchboard');
const board=document.querySelector('#board');
let divvert=[];
let divhorz=[];
sketch.style.height=board.clientHeight;
sketch.style.width=board.clientWidth;
for(i=0;i<16;i++){
    divvert[i]=document.createElement('div');
    divvert[i].id="verticalpixel";
    divvert[i].style.height=(board.clientHeight)/16+'px';
    sketch.appendChild(divvert[i])
    for(j=0;j<16;j++){
        divhorz[j]=document.createElement('div');
        divhorz[j].id="horizentalpixel";
        divhorz[j].style.width=(board.clientWidth)/16+'px';
        divvert[i].appendChild(divhorz[j]);
    }
}
const pixels=document.querySelectorAll('#horizentalpixel');
pixels.forEach((pixel)=>{
    pixel.addEventListener('mouseover', (e)=>{
        
            let col=e.target;
            col.style.backgroundColor='black'
            console.log(col);
       
    });
    
})




